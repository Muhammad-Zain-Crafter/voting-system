import dotenv from 'dotenv';
dotenv.config();

import app from '../app.js';
import db_connect from '../db/database.js';

const PORT = process.env.PORT || 8000;

db_connect()
  .then(() => {
    // If running locally (development), start normal Express server
    if (process.env.NODE_ENV === 'development') {
      app.listen(PORT, () => {
        console.log(`Server running locally on port ${PORT}`);
      });
    } else {
      // If running on Vercel (production), export app for serverless
      console.log("MongoDB connected (Serverless mode on Vercel)");
    }
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

// Export Express app for Vercel
export default app;
