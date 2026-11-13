import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "imago-growth-os",
    databaseConfigured: Boolean(process.env.DATABASE_URL),
    ghlWebhookConfigured: Boolean(process.env.GHL_WEBHOOK_URL)
  });
}
