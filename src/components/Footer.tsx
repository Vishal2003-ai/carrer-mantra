"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Career<span className="text-blue-500">Mantra</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Career Mantra provides quality computer and technical training including O Level, CCC, ADCA, DCA, and more — helping students excel in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/career-mantra" className="hover:text-blue-500">About</Link></li>
            <li><Link href="/courses" className="hover:text-blue-500">Courses</Link></li>
            <li><Link href="/projects" className="hover:text-blue-500">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> <span>info@careermantra.com</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500"><Facebook /></a>
            <a href="#" className="hover:text-pink-500"><Instagram /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Career Mantra — All Rights Reserved.
      </div>
    </footer>
  );
}
