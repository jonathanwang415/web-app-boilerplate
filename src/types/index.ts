// Re-export commonly used types
export type {
  User,
  CreateUser,
  UpdateUser,
  LoginData,
  RegisterData,
  ApiResponse,
} from "@/lib/validations";

// Additional common types
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username?: string;
  password?: string;
}

export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  db?: number;
}

export interface AppConfig {
  database: DatabaseConfig;
  redis: RedisConfig;
  jwt: {
    secret: string;
    expiresIn: string;
  };
  app: {
    port: number;
    env: "development" | "production" | "test";
  };
}
