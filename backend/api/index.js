import app from "../app.js";
import db_connect from "../db/database.js";

// ensure db connection before handling requests
let isConnected = false;

export default async function handler(req, res) {
  if (!isConnected) {
    try {
      await db_connect();
      isConnected = true;
      console.log("✅ MongoDB connected (Vercel)");
    } catch (err) {
      console.error("❌ MongoDB connection failed", err);
    }
  }

  return app(req, res); // pass request to Express
}
