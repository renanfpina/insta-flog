import express from "express";
import { listPosts } from "../controllers/postsControler.js";

// Define the routes
const routes = (app) => {
  // Parse JSON bodies (as sent by API clients)
  app.use(express.json());

  // This is the route that will return all posts
  app.get("/posts", listPosts);    
}

export default routes;