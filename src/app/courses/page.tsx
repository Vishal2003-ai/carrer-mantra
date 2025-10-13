"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Users,
  Award,
  Star,
  BookOpen,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  const certificationCourses = [
    {
      title: "Course on Computer Concepts (CCC)",
      duration: "3 Months",
      level: "Beginner",
      price: "₹3,500",
      description:
        "Essential digital skills including computer fundamentals, MS Office, internet usage, and online safety. Perfect for government exam aspirants.",
      features: [
        "Computer Fundamentals",
        "MS Office Suite",
        "Internet & Email",
        "Online Safety",
      ],
      icon: BookOpen,
      color: "blue",
    },
    {
      title: "O Level Computer Course (NIELIT)",
      duration: "1 Year",
      level: "Intermediate",
      price: "₹8,500",
      description:
        "Professional IT course covering Python programming, database management, web design, and networking. Ideal for software and IT careers.",
      features: [
        "Python Programming",
        "Database Management",
        "Web Design",
        "Networking",
      ],
      icon: Code,
      color: "green",
    },
    {
      title: "Advanced Diploma in Computer Applications (ADCA)",
      duration: "1 Year",
      level: "Advanced",
      price: "₹7,500",
      description:
        "Comprehensive diploma covering Tally with GST, DTP, web designing, and office automation. Perfect for admin and accounting roles.",
      features: [
        "Tally with GST",
        "Desktop Publishing",
        "Web Designing",
        "Office Automation",
      ],
      icon: Award,
      color: "purple",
    },
  ];

  const professionalCourses = [
    {
      title: "Python Programming Masterclass",
      duration: "4 Months",
      level: "Beginner to Advanced",
      price: "₹5,500",
      description:
        "Master Python from basics to advanced concepts including data structures, OOP, Django framework, and automation.",
      features: [
        "Python Basics",
        "Data Structures",
        "OOP Concepts",
        "Django Framework",
        "Automation",
      ],
      icon: Code,
      color: "blue",
      image: "/python.webp",
    },
    {
      title: "Full-Stack Web Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹12,000",
      description:
        "Complete web development course covering HTML, CSS, JavaScript, React, Node.js, and database integration.",
      features: [
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "React.js",
        "Node.js",
        "MongoDB",
      ],
      icon: Globe,
      color: "green",
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    },
    {
      title: "Mobile App Development",
      duration: "5 Months",
      level: "Intermediate",
      price: "₹9,500",
      description:
        "Learn to build mobile applications using React Native and Flutter. Create cross-platform apps for iOS and Android.",
      features: [
        "React Native",
        "Flutter",
        "API Integration",
        "App Store Deployment",
        "UI/UX Design",
      ],
      icon: Smartphone,
      color: "purple",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      title: "Data Science & Analytics",
      duration: "5 Months",
      level: "Intermediate",
      price: "₹10,500",
      description:
        "Comprehensive data science course covering Python, statistics, machine learning, and data visualization.",
      features: [
        "Python for Data Science",
        "Statistics",
        "Machine Learning",
        "Data Visualization",
        "SQL",
      ],
      icon: Database,
      color: "orange",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      title: "UI/UX Design",
      duration: "4 Months",
      level: "Beginner",
      price: "₹6,500",
      description:
        "Learn modern design principles, user research, prototyping, and tools like Figma and Adobe XD.",
      features: [
        "Design Principles",
        "User Research",
        "Prototyping",
        "Figma",
        "Adobe XD",
      ],
      icon: Palette,
      color: "pink",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    },
    {
      title: "Digital Marketing",
      duration: "3 Months",
      level: "Beginner",
      price: "₹4,500",
      description:
        "Master digital marketing strategies including SEO, social media marketing, content creation, and analytics.",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Creation",
        "Google Analytics",
        "Email Marketing",
      ],
      icon: TrendingUp,
      color: "red",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "Cybersecurity Fundamentals",
      duration: "4 Months",
      level: "Intermediate",
      price: "₹8,500",
      description:
        "Learn cybersecurity concepts, ethical hacking, network security, and protection strategies.",
      features: [
        "Network Security",
        "Ethical Hacking",
        "Penetration Testing",
        "Security Tools",
        "Incident Response",
      ],
      icon: Shield,
      color: "gray",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
      title: "AI & Machine Learning",
      duration: "5 Months",
      level: "Advanced",
      price: "₹11,500",
      description:
        "Explore artificial intelligence, machine learning algorithms, deep learning, and AI applications.",
      features: [
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
        "AI Tools",
        "ChatGPT APIs",
      ],
      icon: Zap,
      color: "yellow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      red: "bg-red-100 text-red-600",
      gray: "bg-gray-100 text-gray-600",
      yellow: "bg-yellow-100 text-yellow-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of computer courses designed
              to boost your career. From beginner-friendly certifications to
              advanced professional programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification Courses */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Government Recognized Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These courses are recognized by government bodies and perfect for
              career advancement and job applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificationCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(
                        course.color
                      )}`}
                    >
                      <course.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Course Features:
                    </p>
                    <ul className="space-y-1">
                      {course.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Level</p>
                      <p className="font-semibold">{course.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </p>
                    </div>
                  </div>

                  <Link href="/join-now">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Courses */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Development Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced courses designed for professionals looking to upskill and
              stay current with industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(
                          course.color
                        )}`}
                      >
                        <course.icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-semibold text-sm">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Key Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        {course.features.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{course.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Level</p>
                        <p className="font-semibold text-sm">{course.level}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-xl font-bold text-blue-600">
                          {course.price}
                        </p>
                      </div>
                    </div>

                    <Link href="/join-now">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with industry-relevant
              curriculum and expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of real-world
                experience.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Practical Learning
              </h3>
              <p className="text-gray-600">
                Hands-on projects and real-world applications to enhance your
                skills.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certified Programs
              </h3>
              <p className="text-gray-600">
                Get recognized certificates that boost your career prospects.
              </p>
            </motion.div>
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of successful learners and transform your
              career with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join-now">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Enroll Now
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
