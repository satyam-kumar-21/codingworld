import { NextResponse } from "next/server";
import { getDashboardData } from "@/lib/admin-data";

export async function GET() {
  const payload = await getDashboardData();
  return NextResponse.json(payload);
}
