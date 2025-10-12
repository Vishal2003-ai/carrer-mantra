import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // MongoDB connection helper

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, course, query } = body;

    if (!name || !email || !phone || !course || !query) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("career_mantra"); // DB name
    const collection = db.collection("student_queries");

    const result = await collection.insertOne({
      name,
      email,
      phone,
      course,
      query,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Query submitted successfully", id: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
