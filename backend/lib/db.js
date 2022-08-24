import { MongoClient } from "mongodb";
import "dotenv/config";

export async function dbConnect() {
  const client = new MongoClient(process.env.MONGO_URL);
  try {
    console.log("Connected mongodb");
    return await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    return await client.close();
  }
}
