import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Create an instance of express
const app = express();

// Register the routes with the express application
routes(app);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
