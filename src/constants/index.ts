// API Routes
export const API_ROUTES = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
  },
  USERS: {
    BASE: "/api/users",
    PROFILE: "/api/users/profile",
  },
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  THEME: "theme",
  LANGUAGE: "language",
} as const;

// Environment Variables
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL: process.env.DATABASE_URL || "sqlite:./database.sqlite",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
} as const;

// UI Constants
export const UI_CONSTANTS = {
  TOAST_DURATION: 5000,
  DEBOUNCE_DELAY: 300,
  PAGINATION_DEFAULT_LIMIT: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
} as const;
