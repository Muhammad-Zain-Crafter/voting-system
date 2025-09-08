import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import db_connect from './db/database.js';

const app = express();


db_connect() // return a promise (async function)
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log("server is running on port", process.env.PORT || 8000);
  })
})
.catch((err) => {
  console.log("Mongo db connection failed", err);
})