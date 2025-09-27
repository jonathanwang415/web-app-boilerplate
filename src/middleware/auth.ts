import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getRedisClient, RedisService } from "@/database/redis";
import { ENV } from "@/constants";

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    email: string;
  };
}

export async function authenticateToken(request: NextRequest): Promise<{
  user?: { userId: string; email: string };
  error?: NextResponse;
}> {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return {
        error: NextResponse.json(
          { success: false, message: "Access token required" },
          { status: 401 }
        ),
      };
    }

    // Verify JWT token
    const decoded = jwt.verify(token, ENV.JWT_SECRET) as any;

    // Check session in Redis
    const redis = await getRedisClient();
    const redisService = new RedisService(redis);
    const session = await redisService.getSession(decoded.sessionId);

    if (!session) {
      return {
        error: NextResponse.json(
          { success: false, message: "Invalid session" },
          { status: 401 }
        ),
      };
    }

    return {
      user: {
        userId: decoded.userId,
        email: decoded.email,
      },
    };
  } catch {
    return {
      error: NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      ),
    };
  }
}

export function withAuth(
  handler: (request: AuthenticatedRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const { user, error } = await authenticateToken(request);

    if (error) {
      return error;
    }

    const authenticatedRequest = request as AuthenticatedRequest;
    authenticatedRequest.user = user;

    return handler(authenticatedRequest);
  };
}
