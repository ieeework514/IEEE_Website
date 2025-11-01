import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const uri = process.env.MONGO_DB_URL;
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;
export default clientPromise;
 