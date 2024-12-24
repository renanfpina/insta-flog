import dotenv from "dotenv";
import dbConnect from "../config/dbConfig.js";

// Load environment variables
dotenv.config();

// Connect to the database
const dbConnection = await dbConnect(process.env.MONGODB_CONNECTION_STRING);

// Get all posts
export async function getPosts() {
  // Get the database and collection
  const db = dbConnection.db("insta_flog_db");
  const collection = db.collection("posts");

  // Get all posts from the collection
  const posts = await collection.find({}).toArray();
  return posts;
}
