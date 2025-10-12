"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const blogPosts = [
    {
      title: "Course on Computer Concepts (CCC)",
      category: "CCC",
      date: "3 Months Course",
      desc: "The CCC course is designed to equip learners with essential digital skills — including computer fundamentals, MS Office, internet usage, and online safety. Perfect for government exam aspirants and beginners.",
    },
    {
      title: "O Level Computer Course (NIELIT)",
      category: "O Level",
      date: "1 Year Course",
      desc: "A professional IT course by NIELIT that covers Python programming, database, web design, and networking. Ideal for those aiming for careers in software and IT support roles.",
    },
    {
      title: "Advanced Diploma in Computer Applications (ADCA)",
      category: "ADCA",
      date: "1 Year Course",
      desc: "Comprehensive diploma covering Tally with GST, DTP, web designing, and office automation tools. Ideal for jobs in admin, accounting, and design sectors.",
    },
  ];

  const courses = [
    {
      title: "Python Programming",
      img: "/python.webp",
      desc: "Master Python from basics to advanced — including data structures, OOP, Django, and automation with hands-on projects.",
    },
    {
      title: "Web Development (HTML, CSS, JavaScript)",
      img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
      desc: "Build modern, responsive websites using HTML5, CSS3, and JavaScript. Learn interactive UI design and front-end skills.",
    },
    {
      title: "Next.js Full-Stack Development",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      desc: "Create dynamic full-stack apps using Next.js, Tailwind, and TypeScript. Learn APIs, SSR, and cloud deployment.",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      desc: "Explore the future with AI tools, ML models, and ChatGPT APIs. Build intelligent systems and data-driven solutions.",
    },
    {
      title: "Video Editing & Content Creation",
      img: "/edting.png",
      desc: "Learn video editing with CapCut, Premiere Pro, and After Effects. Create YouTube and social media content like a pro.",
    },
    {
      title: "Canva Graphic Designing",
      img: "/grapic.jpg",
      desc: "Design stunning posters, social media posts, and branding materials using Canva. Great for entrepreneurs and creators.",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* 🟢 HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-900 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Welcome to{" "}
              <span className="text-indigo-600">
                Career Mantra Computer Coaching Center
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Learn government-recognized computer courses like{" "}
              <strong>CCC, O Level, DCA, ADCA</strong> and professional
              programming languages with expert trainers. Your digital career
              starts here!
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="/courses">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/log.webp"
              alt="Career Mantra Illustration"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 🟣 POPULAR COURSES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              Popular Certification Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized courses for students, job seekers, and professionals to
              enhance their computer skills and career growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Category:</strong> {post.category}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  <strong>Duration:</strong> {post.date}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {post.desc}
                </p>
                <Link
                  href="/courses"
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  View Course →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔵 ADVANCED COURSES SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Our Professional Courses
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Learn trending technologies and creative skills to boost your
              career in IT and digital media. Choose your path and start
              learning today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-xl hover:-translate-y-1 transition duration-300 rounded-2xl overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-semibold text-indigo-700">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-700 mt-2">
                      {course.desc}
                    </CardDescription>
                    <Link
                      href="/courses"
                      className="text-indigo-600 mt-4 inline-flex items-center font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
