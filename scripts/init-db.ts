import { getDatabase } from "../src/database/sqlite";

console.log("Initializing database...");
try {
  getDatabase();
  console.log("✅ Database initialized successfully!");
  console.log("📁 Database file: ./database.sqlite");
  console.log("📊 Tables created: users, sessions");
} catch (error) {
  console.error("❌ Error initializing database:", error);
  process.exit(1);
}
