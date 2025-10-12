import { NextRequest, NextResponse } from "next/server";
import { courses } from "../data";

interface RouteParams {
  slug: string;
}

export async function GET(
  request: NextRequest,
  context: { params: RouteParams } | { params: Promise<RouteParams> } // ✅ Support both cases
) {
  // ✅ Safely handle both Promise and object
  const params =
    "then" in context.params ? await context.params : context.params;

  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(course, { status: 200 });
}
