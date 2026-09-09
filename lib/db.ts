import { MongoClient, type Db } from "mongodb";
import { env } from "@/lib/env";

const globalForMongo = globalThis as unknown as {
  mongoClient?: MongoClient;
  mongoDb?: Db;
};

export async function getMongoDb() {
  if (!globalForMongo.mongoDb) {
    globalForMongo.mongoClient ??= new MongoClient(env.databaseUrl);
    await globalForMongo.mongoClient.connect();
    globalForMongo.mongoDb = globalForMongo.mongoClient.db();
    await globalForMongo.mongoDb.collection("users").createIndex({ email: 1 }, { unique: true });
  }
  return globalForMongo.mongoDb;
}
