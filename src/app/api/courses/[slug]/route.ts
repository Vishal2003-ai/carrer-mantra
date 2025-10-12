import { NextResponse } from "next/server";
import { courses } from "../data";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug);

  if (!course) return NextResponse.json({ message: "Course not found" }, { status: 404 });

  return NextResponse.json(course);
}
