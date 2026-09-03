import { z } from "zod";

const optionalUrl = z.string().url().optional();

export const env = {
  databaseUrl: process.env.DATABASE_URL,
  sessionSecret: process.env.SESSION_SECRET ?? "development-only-session-secret-change-me",
  sessionTtlDays: Number(process.env.SESSION_TTL_DAYS ?? 7),
  adminEmail: process.env.ADMIN_EMAIL?.toLowerCase(),
  adminPassword: process.env.ADMIN_PASSWORD,
  paymentProvider: z.enum(["razorpay", "stripe"]).catch("razorpay").parse(process.env.PAYMENT_PROVIDER),
  appUrl: optionalUrl.parse(process.env.NEXT_PUBLIC_APP_URL) ?? "http://localhost:3000",
  s3: {
    endpoint: optionalUrl.parse(process.env.S3_ENDPOINT),
    region: process.env.S3_REGION ?? "auto",
    bucket: process.env.S3_BUCKET,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    publicUrl: optionalUrl.parse(process.env.S3_PUBLIC_URL),
  },
};

export function isDatabaseConfigured() {
  return Boolean(env.databaseUrl);
}
