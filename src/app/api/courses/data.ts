// app/api/courses/data.ts

import { BookOpen, Code, Monitor } from "lucide-react";

export const courses = [
  // 💻 Computer Courses
  { 
    title: "CCC", slug: "ccc", desc: "Course on Computer Concepts – Government certified basic computer course.", 
    duration: "3 Months", icon: "BookOpen", topics: ["Basic Computer Concepts", "MS Office", "Internet", "Email Communication", "Online Safety"]
  },
  { 
    title: "O Level", slug: "o-level", desc: "NIELIT certified foundational IT course for professional skills.", 
    duration: "1 Year", icon: "BookOpen", topics: ["IT Tools & Business Systems", "Python Programming", "Web Development", "Project Work"]
  },
  { title: "DCA", slug: "dca", desc: "Diploma in Computer Applications – ideal for office & data management skills.", duration: "1 Year", icon: "BookOpen", topics: ["MS Office", "Tally", "DTP", "Web Designing"] },
  { title: "ADCA", slug: "adca", desc: "Advanced Diploma in Computer Applications – professional-level computer education.", duration: "1 Year", icon: "BookOpen", topics: ["Computer Fundamentals", "MS Office", "Tally GST", "DTP", "Web Designing", "Basic Programming"] },
  { title: "MDCA", slug: "mdca", desc: "Master Diploma in Computer Applications – complete IT training course.", duration: "1 Year", icon: "BookOpen", topics: ["Advanced IT Training", "Web Development", "Python", "Database Management"] },
  { title: "PGDCA", slug: "pgdca", desc: "Post Graduate Diploma in Computer Applications – advanced IT qualification.", duration: "1 Year", icon: "BookOpen", topics: ["Advanced Programming", "Project Work", "Database Management", "Office Tools"] },
  { title: "Basic Computer", slug: "basic-computer", desc: "Fundamentals of computer, MS Office, Internet, and Typing.", duration: "2 Months", icon: "BookOpen", topics: ["Computer Basics", "MS Word, Excel, PowerPoint", "Internet & Email", "Typing"] },
  { title: "Advance Excel", slug: "advance-excel", desc: "Master Excel functions, formulas, and data analysis tools.", duration: "1 Month", icon: "BookOpen", topics: ["Excel Formulas", "Charts", "Data Analysis", "Pivot Tables"] },

  // 💻 Programming Courses
  { title: "Web Development", slug: "web-development", desc: "Frontend + Backend web development for modern websites.", duration: "6 Months", icon: "Code", topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"] },
  { title: "Python Programming", slug: "python-programming", desc: "Learn Python from basics to advanced for automation and AI.", duration: "6 Months", icon: "Code", topics: ["Python Basics", "OOP", "Data Structures", "Django", "Automation Projects"] },
  { title: "Full Stack Development", slug: "full-stack-development", desc: "Complete MERN stack (MongoDB, Express, React, Node.js).", duration: "8 Months", icon: "Monitor", topics: ["MongoDB", "Express.js", "React", "Node.js", "Deployment"] },
  { title: "HTML", slug: "html", desc: "Structure web pages using HTML5.", duration: "1 Month", icon: "Code", topics: ["HTML Tags", "Forms", "Semantic HTML"] },
  { title: "CSS", slug: "css", desc: "Style and design web layouts using CSS3.", duration: "1 Month", icon: "Code", topics: ["Selectors", "Flexbox", "Grid", "Animations"] },
  { title: "JavaScript", slug: "javascript", desc: "Add interactivity and logic to websites.", duration: "2 Months", icon: "Code", topics: ["Variables", "Functions", "DOM Manipulation", "ES6+", "Events"] },
  { title: "Tailwind CSS", slug: "tailwind-css", desc: "Rapid modern UI design using Tailwind CSS.", duration: "1 Month", icon: "Code", topics: ["Utility Classes", "Responsive Design", "Components"] },
  { title: "Bootstrap", slug: "bootstrap", desc: "Responsive website layouts with Bootstrap 5.", duration: "1 Month", icon: "Code", topics: ["Grid System", "Components", "Responsive Utilities"] },
  { title: "Node.js", slug: "nodejs", desc: "Backend JavaScript for building APIs and servers.", duration: "2 Months", icon: "Code", topics: ["Express", "Routing", "Middleware", "APIs"] },
  { title: "MongoDB", slug: "mongodb", desc: "Learn NoSQL database for modern web apps.", duration: "2 Months", icon: "Code", topics: ["Collections", "Documents", "CRUD Operations", "Aggregation"] },
];
