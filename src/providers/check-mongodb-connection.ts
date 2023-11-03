import "dotenv/config";
import { MongoClient } from "mongodb";

export async function checkMongoDBConnection() {
  const uri = process.env.DATABASE_URL;
  const client = new MongoClient(uri as string);

  try {
    await client.connect();
    console.log("MongoDB Atlas connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    await client.close();
  }
}
