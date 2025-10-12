"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Monitor } from "lucide-react";
import Link from "next/link";

// 🖥️ Computer Courses Data
const computerCourses = [
  { title: "CCC", slug: "ccc", desc: "Course on Computer Concepts – Government certified basic computer course.", icon: BookOpen },
  { title: "O Level", slug: "o-level", desc: "NIELIT certified foundational IT course for professional skills.", icon: BookOpen },
  { title: "DCA", slug: "dca", desc: "Diploma in Computer Applications – ideal for office & data management skills.", icon: BookOpen },
  { title: "ADCA", slug: "adca", desc: "Advanced Diploma in Computer Applications – professional-level computer education.", icon: BookOpen },
  { title: "MDCA", slug: "mdca", desc: "Master Diploma in Computer Applications – complete IT training course.", icon: BookOpen },
  { title: "PGDCA", slug: "pgdca", desc: "Post Graduate Diploma in Computer Applications – advanced IT qualification.", icon: BookOpen },
  { title: "Basic Computer", slug: "basic-computer", desc: "Fundamentals of computer, MS Office, Internet, and Typing.", icon: BookOpen },
  { title: "Advance Excel", slug: "advance-excel", desc: "Master Excel functions, formulas, and data analysis tools.", icon: BookOpen },
];

// 💻 Programming Courses Data
const programmingCourses = [
  { title: "Web Development", slug: "web-development", desc: "Frontend + Backend web development for modern websites.", icon: Code },
  { title: "Python Programming", slug: "python-programming", desc: "Learn Python from basics to advanced for automation and AI.", icon: Code },
  { title: "Full Stack Development", slug: "full-stack-development", desc: "Complete MERN stack (MongoDB, Express, React, Node.js).", icon: Monitor },
  { title: "HTML", slug: "html", desc: "Structure web pages using HTML5.", icon: Code },
  { title: "CSS", slug: "css", desc: "Style and design web layouts using CSS3.", icon: Code },
  { title: "JavaScript", slug: "javascript", desc: "Add interactivity and logic to websites.", icon: Code },
  { title: "Tailwind CSS", slug: "tailwind-css", desc: "Rapid modern UI design using Tailwind CSS.", icon: Code },
  { title: "Bootstrap", slug: "bootstrap", desc: "Responsive website layouts with Bootstrap 5.", icon: Code },
  { title: "Node.js", slug: "nodejs", desc: "Backend JavaScript for building APIs and servers.", icon: Code },
  { title: "MongoDB", slug: "mongodb", desc: "Learn NoSQL database for modern web apps.", icon: Code },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      {/* 🌟 Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Explore Our <span className="text-blue-600">Courses</span>
      </motion.h1>

      {/* 🖥️ Computer Courses Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-blue-600 pl-3">
          Computer Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {computerCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="text-blue-600" />
                      <CardTitle>{course.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {course.desc}
                    </CardDescription>
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        View Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 💻 Programming & Development Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-green-600 pl-3">
          Programming & Development Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmingCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="text-green-600" />
                      <CardTitle>{course.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {course.desc}
                    </CardDescription>
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        View Course
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
