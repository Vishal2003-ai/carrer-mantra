import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB connection string from env
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (!uri) throw new Error("Please add your MongoDB URI to .env");

if (process.env.NODE_ENV === "development") {
  // In development, use global variable to prevent multiple connections
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, it's fine to create new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
