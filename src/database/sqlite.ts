import Database from "better-sqlite3";
import { ENV } from "@/constants";

let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(ENV.DATABASE_URL.replace("sqlite:", ""));

    // Enable foreign keys
    db.pragma("foreign_keys = ON");

    // Create tables if they don't exist
    initializeTables(db);
  }

  return db;
}

function initializeTables(database: Database.Database) {
  // Users table
  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Sessions table
  database.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at DATETIME NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);

  // Create indexes
  database.exec(`
    CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
    CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions (token);
    CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions (user_id);
  `);
}

export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}

// Graceful shutdown
process.on("SIGINT", closeDatabase);
process.on("SIGTERM", closeDatabase);
