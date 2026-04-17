import { NextResponse } from "next/server";
import { dbQueries } from "@/lib/db";

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
        dbQueries.incrementVisitors.run();
      }
      dbQueries.incrementPageViews.run();
    }

    const stats = dbQueries.getStats.get() as { visitors: number; page_views: number };

    return NextResponse.json(
      {
        visitors: stats.visitors,
        pageViews: stats.page_views,
        lastUpdated: new Date().toISOString()
      },
      { status: 200 }
    );
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
    const { event } = body;

    if (event === "page_view") {
      dbQueries.incrementPageViews.run();
    }

    const stats = dbQueries.getStats.get() as { visitors: number; page_views: number };

    return NextResponse.json(
      {
        success: true,
        stats: {
          visitors: stats.visitors,
          pageViews: stats.page_views,
          lastUpdated: new Date().toISOString()
        }
      },
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
