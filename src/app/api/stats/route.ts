import { NextResponse } from "next/server";

interface Stats {
  visitors: number;
  pageViews: number;
  lastUpdated: string;
}

let statsCache: Stats = {
  visitors: 1234,
  pageViews: 5678,
  lastUpdated: new Date().toISOString(),
};

const visitorSet = new Set<string>();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  try {
    if (action === "track") {
      const ip = request.headers.get("x-forwarded-for") || "unknown";
      const userAgent = request.headers.get("user-agent") || "unknown";
      const visitorId = `${ip}-${userAgent}`;

      if (!visitorSet.has(visitorId)) {
        visitorSet.add(visitorId);
        statsCache.visitors++;
      }
      statsCache.pageViews++;
      statsCache.lastUpdated = new Date().toISOString();

      return NextResponse.json(
        { success: true, stats: statsCache },
        { status: 200 }
      );
    }

    return NextResponse.json(statsCache, { status: 200 });
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event, data } = body;

    if (event === "page_view") {
      statsCache.pageViews++;
      statsCache.lastUpdated = new Date().toISOString();
    }

    return NextResponse.json(
      { success: true, stats: statsCache },
      { status: 200 }
    );
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { error: "Failed to track event" },
      { status: 500 }
    );
  }
}
