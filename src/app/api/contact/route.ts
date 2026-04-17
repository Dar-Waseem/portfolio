import { NextResponse } from "next/server";
import { dbQueries } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const result = dbQueries.addSubmission.run(name, email, message);

    const submission = {
      id: result.lastInsertRowid,
      name,
      email,
      message,
      created_at: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Message saved to database!",
        data: submission
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = dbQueries.getSubmissions.all();
    return NextResponse.json(
      {
        message: "Contact API",
        submissions: submissions,
        count: submissions.length
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
