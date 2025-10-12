"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Monitor } from "lucide-react";
import Link from "next/link";

export default function CareerMantra() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* 🟢 Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Welcome to <span className="text-yellow-400">Career Mantra</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl"
          >
            Career Mantra is a premier computer coaching center offering courses like CCC, O Level, DCA, ADCA, and more.
            We focus on building technical skills and empowering students for a successful digital career.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <Link href="/courses">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
                Explore Courses
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🟣 Our Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            To provide quality computer education and training that helps students develop technical skills, confidence, and career opportunities in the IT and digital industry.
          </p>
        </div>
      </section>

      {/* 🔵 Why Choose Us */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Career Mantra?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex items-center gap-3">
                <Users className="w-8 h-8 text-indigo-600" />
                <CardTitle>Expert Trainers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our instructors are certified professionals with years of teaching and industry experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-indigo-600" />
                <CardTitle>Comprehensive Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Courses are structured to cover theoretical and practical knowledge for real-world applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="flex items-center gap-3">
                <Monitor className="w-8 h-8 text-indigo-600" />
                <CardTitle>Modern Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  State-of-the-art computer labs with the latest software and hardware for hands-on learning.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🟢 Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
            <p className="text-gray-700 mt-2">Students Trained</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">50+</h3>
            <p className="text-gray-700 mt-2">Certified Courses</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">100%</h3>
            <p className="text-gray-700 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* 🔵 Call To Action */}
      <section className="py-20 px-6 bg-indigo-600 text-white text-center rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl font-bold mb-4">Join Career Mantra Today!</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Get the best computer education and start your career journey with us.
        </p>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
          Get Started
        </Button>
      </section>
    </main>
  );
}
