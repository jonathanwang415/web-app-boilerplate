import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/database/sqlite";
import { getRedisClient, RedisService } from "@/database/redis";
import { apiResponseSchema } from "@/lib/validations";
import { HTTP_STATUS } from "@/constants";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    const db = getDatabase();
    const redis = await getRedisClient();
    const redisService = new RedisService(redis);

    // Try to get from cache first
    const cacheKey = `users:page:${page}:limit:${limit}`;
    const cachedData = await redisService.getCache(cacheKey);

    if (cachedData) {
      return NextResponse.json(
        apiResponseSchema.parse({
          success: true,
          data: cachedData,
        }),
        { status: HTTP_STATUS.OK }
      );
    }

    // Get users from database
    const users = db
      .prepare(
        "SELECT id, email, name, created_at, updated_at FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?"
      )
      .all(limit, offset) as any[];

    // Get total count
    const totalResult = db
      .prepare("SELECT COUNT(*) as count FROM users")
      .get() as any;
    const total = totalResult.count;

    const result = {
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };

    // Cache the result for 5 minutes
    await redisService.setCache(cacheKey, result, 300);

    return NextResponse.json(
      apiResponseSchema.parse({
        success: true,
        data: result,
      }),
      { status: HTTP_STATUS.OK }
    );
  } catch (error) {
    console.error("Get users error:", error);
    return NextResponse.json(
      apiResponseSchema.parse({
        success: false,
        message: "Internal server error",
      }),
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: "Name and email are required",
        }),
        { status: HTTP_STATUS.BAD_REQUEST }
      );
    }

    const db = getDatabase();
    const redis = await getRedisClient();
    const redisService = new RedisService(redis);

    // Check if user already exists
    const existingUser = db
      .prepare("SELECT id FROM users WHERE email = ?")
      .get(email) as any;

    if (existingUser) {
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: "User with this email already exists",
        }),
        { status: HTTP_STATUS.BAD_REQUEST }
      );
    }

    // Create user (without password for demo purposes)
    const userId = `user_${Date.now()}`;
    const now = new Date().toISOString();

    db.prepare(
      "INSERT INTO users (id, email, name, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).run(userId, email, name, "", now, now);

    // Clear users cache
    await redisService.clearCache("users:*");

    const newUser = {
      id: userId,
      email,
      name,
      created_at: now,
      updated_at: now,
    };

    return NextResponse.json(
      apiResponseSchema.parse({
        success: true,
        message: "User created successfully",
        data: newUser,
      }),
      { status: HTTP_STATUS.CREATED }
    );
  } catch (error) {
    console.error("Create user error:", error);
    return NextResponse.json(
      apiResponseSchema.parse({
        success: false,
        message: "Internal server error",
      }),
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
