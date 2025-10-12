import { NextRequest, NextResponse } from "next/server";
import { courses } from "../data";

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(course, { status: 200 });
}
