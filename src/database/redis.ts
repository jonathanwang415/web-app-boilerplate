import { createClient } from "redis";
import { ENV } from "@/constants";

let redisClient: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: ENV.REDIS_URL,
    });

    redisClient.on("error", err => {
      console.error("Redis Client Error:", err);
    });

    redisClient.on("connect", () => {
      console.log("Connected to Redis");
    });

    await redisClient.connect();
  }

  return redisClient;
}

export async function closeRedisClient() {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}

// Redis utility functions
export class RedisService {
  private client: ReturnType<typeof createClient>;

  constructor(client: ReturnType<typeof createClient>) {
    this.client = client;
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const serialized = JSON.stringify(value);
    if (ttl) {
      await this.client.setEx(key, ttl, serialized);
    } else {
      await this.client.set(key, serialized);
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.client.exists(key);
    return result === 1;
  }

  async expire(key: string, ttl: number): Promise<void> {
    await this.client.expire(key, ttl);
  }

  // Session management
  async setSession(
    sessionId: string,
    userId: string,
    ttl: number = 86400
  ): Promise<void> {
    await this.set(`session:${sessionId}`, { userId }, ttl);
  }

  async getSession(sessionId: string): Promise<{ userId: string } | null> {
    return await this.get(`session:${sessionId}`);
  }

  async deleteSession(sessionId: string): Promise<void> {
    await this.del(`session:${sessionId}`);
  }

  // Cache management
  async setCache(key: string, data: any, ttl: number = 3600): Promise<void> {
    await this.set(`cache:${key}`, data, ttl);
  }

  async getCache<T>(key: string): Promise<T | null> {
    return await this.get<T>(`cache:${key}`);
  }

  async clearCache(pattern: string): Promise<void> {
    const keys = await this.client.keys(`cache:${pattern}`);
    if (keys.length > 0) {
      await this.client.del(keys);
    }
  }
}

// Graceful shutdown
process.on("SIGINT", closeRedisClient);
process.on("SIGTERM", closeRedisClient);
