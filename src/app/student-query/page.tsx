"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function StudentQueryPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/student-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, course, query }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Query submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setQuery("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
   <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4 gap-10">
  {/* Career Mantra Section */}
  <section className="text-center max-w-3xl">
    <img
      src="/career-mantra.png" // yahan aap image path set karein
      alt="Career Mantra"
      className="mx-auto mb-6 w-48 h-48 object-contain rounded-full shadow-lg"
    />
    <h2 className="text-4xl font-bold mb-2">Career Mantra</h2>
    <p className="text-gray-700 text-lg">
      Empowering students with the right guidance, tools, and opportunities to build a successful career. 
      Join us to explore your potential and achieve your professional dreams.
    </p>
  </section>

  {/* Student Query Card */}
  <Card className="w-full max-w-2xl shadow-xl rounded-2xl">
    <CardHeader className="text-center">
      <CardTitle className="text-3xl font-bold">Student Query</CardTitle>
      <CardDescription>
        Fill out the form below and we will get back to you soon.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Course Interested In"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          rows={5}
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
          Submit Query
        </Button>
      </form>
      {status && (
        <div
          className={`mt-4 text-center p-2 rounded-md ${
            status.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </div>
      )}
    </CardContent>
  </Card>
</main>

  );
}
