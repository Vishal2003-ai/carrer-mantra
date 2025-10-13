"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StudentQueryForm from "@/components/StudentQueryForm";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function JoinNowPage() {
  const benefits = [
    {
      icon: Award,
      title: "Industry-Recognized Certificates",
      description:
        "Get certified with government-recognized qualifications that employers value",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from experienced professionals with real-world industry experience",
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description:
        "Practical training with real projects and industry-standard tools",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Choose from morning, evening, or weekend batches to fit your schedule",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Get personalized career advice and placement assistance",
    },
    {
      icon: Zap,
      title: "Modern Facilities",
      description:
        "Learn in our state-of-the-art computer lab with latest software",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Submit Your Query",
      description:
        "Fill out our student query form with your details and interests",
    },
    {
      step: "02",
      title: "Get Consultation",
      description:
        "Our team will contact you within 24 hours for a free consultation",
    },
    {
      step: "03",
      title: "Choose Your Course",
      description:
        "Select the perfect course based on your goals and career aspirations",
    },
    {
      step: "04",
      title: "Start Learning",
      description:
        "Begin your learning journey with expert guidance and support",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Python Programming",
      rating: 5,
      comment:
        "Excellent teaching methods and practical approach. I got placed in a top IT company after completing the course!",
    },
    {
      name: "Rajesh Kumar",
      course: "Web Development",
      rating: 5,
      comment:
        "The instructors are very knowledgeable and supportive. The course curriculum is industry-relevant and up-to-date.",
    },
    {
      name: "Sneha Patel",
      course: "Data Science",
      rating: 5,
      comment:
        "Great learning environment with modern facilities. The placement assistance helped me land my dream job.",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our{" "}
                <span className="text-blue-600">Learning Community</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Ready to transform your career with in-demand skills? Join
                hundreds of successful students who have advanced their careers
                through our expert-led courses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="#join-form">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Join Now
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    View Courses
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">
                    Certificates Issued
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start Your Journey
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below to get started
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Free consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Expert guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Career support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Career Mantra?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with industry-relevant
              curriculum and expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is easy! Follow these simple steps to begin your
              learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Query Form */}
      <section id="join-form" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will contact you within 24
              hours to discuss your learning goals.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <StudentQueryForm />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who have transformed their
              careers with our courses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-blue-600">
                      {testimonial.course}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Don't Wait - Start Your Success Story Today!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of successful learners and take the first step
              towards your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#join-form">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
