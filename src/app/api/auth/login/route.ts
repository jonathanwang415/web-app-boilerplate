import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { getDatabase } from "@/database/sqlite";
import { getRedisClient, RedisService } from "@/database/redis";
import { loginSchema, apiResponseSchema } from "@/lib/validations";
import { ENV, HTTP_STATUS } from "@/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    const db = getDatabase();
    const redis = await getRedisClient();
    const redisService = new RedisService(redis);

    // Find user by email
    const user = db
      .prepare("SELECT * FROM users WHERE email = ?")
      .get(validatedData.email) as any;

    if (!user) {
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: "Invalid credentials",
        }),
        { status: HTTP_STATUS.UNAUTHORIZED }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(
      validatedData.password,
      user.password_hash
    );
    if (!isValidPassword) {
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: "Invalid credentials",
        }),
        { status: HTTP_STATUS.UNAUTHORIZED }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      ENV.JWT_SECRET,
      { expiresIn: ENV.JWT_EXPIRES_IN }
    );

    // Create session in Redis
    const sessionId = nanoid();
    await redisService.setSession(sessionId, user.id, 7 * 24 * 60 * 60); // 7 days

    // Store session in database
    db.prepare(
      "INSERT INTO sessions (id, user_id, token, expires_at) VALUES (?, ?, ?, ?)"
    ).run(
      sessionId,
      user.id,
      token,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    );

    return NextResponse.json(
      apiResponseSchema.parse({
        success: true,
        message: "Login successful",
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
          },
          token,
          sessionId,
        },
      }),
      { status: HTTP_STATUS.OK }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      apiResponseSchema.parse({
        success: false,
        message: "Internal server error",
      }),
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
    );
  }
}
