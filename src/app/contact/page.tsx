"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setStatus("Please enter a valid 10-digit phone number.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Career Mantra Intro Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Welcome to <span className="text-blue-600">Career Mantra</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-700"
        >
          Career Mantra is dedicated to empowering students and professionals with the right skills and guidance 
          to excel in the IT and digital industry. Connect with us to get expert advice, courses, and personalized mentorship.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-3 border rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border rounded-lg"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Send Message
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </section>
    </main>
  );
}
