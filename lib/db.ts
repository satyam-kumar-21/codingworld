import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { env } from "@/lib/env";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  if (!env.databaseUrl) {
    throw new Error("DATABASE_URL is required for database access.");
  }

  const adapter = new PrismaPg({ connectionString: env.databaseUrl });
  return new PrismaClient({ adapter });
}

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
