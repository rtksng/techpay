export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const headers = {
  "Cache-Control": "no-store, max-age=0",
};

export function GET() {
  return Response.json({ status: "ok" }, { headers });
}

export function HEAD() {
  return new Response(null, { status: 200, headers });
}
