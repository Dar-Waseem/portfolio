import { NextResponse } from "next/server";

const submissions: Array<{
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}> = [];

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

    const submission = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(submission);

    console.log("Contact form submission:", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
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
  return NextResponse.json(
    {
      message: "Contact API",
      submissions: submissions,
      count: submissions.length
    },
    { status: 200 }
  );
}
