import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { getDatabase } from "@/database/sqlite";
import { getRedisClient, RedisService } from "@/database/redis";
import { registerSchema, apiResponseSchema } from "@/lib/validations";
import { ENV, HTTP_STATUS } from "@/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    const db = getDatabase();
    const redis = await getRedisClient();
    const redisService = new RedisService(redis);

    // Check if user already exists
    const existingUser = db
      .prepare("SELECT id FROM users WHERE email = ?")
      .get(validatedData.email) as any;

    if (existingUser) {
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: "User with this email already exists",
        }),
        { status: HTTP_STATUS.BAD_REQUEST }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(validatedData.password, 12);

    // Create user
    const userId = nanoid();
    const now = new Date().toISOString();

    db.prepare(
      "INSERT INTO users (id, email, name, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).run(
      userId,
      validatedData.email,
      validatedData.name,
      passwordHash,
      now,
      now
    );

    // Generate JWT token
    const token = jwt.sign(
      { userId, email: validatedData.email },
      ENV.JWT_SECRET,
      { expiresIn: ENV.JWT_EXPIRES_IN }
    );

    // Create session in Redis
    const sessionId = nanoid();
    await redisService.setSession(sessionId, userId, 7 * 24 * 60 * 60); // 7 days

    // Store session in database
    db.prepare(
      "INSERT INTO sessions (id, user_id, token, expires_at) VALUES (?, ?, ?, ?)"
    ).run(
      sessionId,
      userId,
      token,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    );

    return NextResponse.json(
      apiResponseSchema.parse({
        success: true,
        message: "User registered successfully",
        data: {
          user: {
            id: userId,
            email: validatedData.email,
            name: validatedData.name,
          },
          token,
          sessionId,
        },
      }),
      { status: HTTP_STATUS.CREATED }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      apiResponseSchema.parse({
        success: false,
        message: "Internal server error",
      }),
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
