"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Monitor } from "lucide-react";

type CourseType = {
  title: string;
  slug: string;
  desc: string;
  duration: string;
  icon: string;
  topics: string[];
};

export default function CourseDetailPage() {
  const params = useParams();
  const { slug } = params;

  const [course, setCourse] = useState<CourseType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`/api/courses/${slug}`);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [slug]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!course) return <div className="text-center mt-20">Course not found!</div>;

  const icons: Record<string, any> = { BookOpen, Code, Monitor };
  const Icon = icons[course.icon] || BookOpen;

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <Icon className="text-blue-600 w-10 h-10" />
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        </div>

        <p className="text-gray-700 mb-4">{course.desc}</p>
        <p className="text-gray-500 font-medium mb-4">Duration: {course.duration}</p>

        <h2 className="text-xl font-semibold mb-2">Topics Covered:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {course.topics.map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </ul>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
          Enroll Now
        </Button>
      </motion.div>
    </main>
  );
}
