import { MongoClient } from "mongodb";

const uri = "mongodb+srv://ieeework514_db_user:hLWHMUFdYYD6gLyu@cluster0.dgia4qf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;
export default clientPromise;
 