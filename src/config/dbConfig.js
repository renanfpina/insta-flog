import { MongoClient } from "mongodb";

// Define an asynchronous function to connect to the MongoDB database
export default async function dbConnect (connectionString) {
  let mongoClient;

  try {
    // Create a new instance of MongoClient with the provided connection string
    mongoClient = new MongoClient(connectionString);
    console.log("Connecting to the database cluster");

    // Attempt to connect to the MongoDB cluster
    await mongoClient.connect();
    console.log("Successfully connected to Atlas MongoDB!");

    // Return the connected MongoClient instance
    return mongoClient;
  } catch (error) {
    // Log any errors that occur during the connection attempt
    console.error("Error connecting to database.", error);

    // Exit the process with a failure code
    process.exit();
  }
}
