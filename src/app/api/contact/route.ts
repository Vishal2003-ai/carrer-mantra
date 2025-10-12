import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body; // Add phone

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("careerMantraDB");
    const collection = db.collection("contacts");

    const result = await collection.insertOne({
      name,
      email,
      phone, // Store phone
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Message submitted successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
