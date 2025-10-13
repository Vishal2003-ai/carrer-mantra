"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  BookOpen,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  educationLevel: string;
  courseInterest: string[];
  currentSkills: string;
  specificQuestions: string;
  preferredContactMethod: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  educationLevel?: string;
  courseInterest?: string;
  specificQuestions?: string;
  general?: string;
}

const educationLevels = [
  { value: "high-school", label: "High School" },
  { value: "undergraduate", label: "Undergraduate" },
  { value: "graduate", label: "Graduate" },
  { value: "working-professional", label: "Working Professional" },
  { value: "other", label: "Other" },
];

const courseOptions = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "data-science", label: "Data Science" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "devops", label: "DevOps" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "other", label: "Other" },
];

export default function StudentQueryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    educationLevel: "",
    courseInterest: [],
    currentSkills: "",
    specificQuestions: "",
    preferredContactMethod: "email",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formData.phone &&
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.educationLevel) {
      newErrors.educationLevel = "Education level is required";
    }

    if (formData.courseInterest.length === 0) {
      newErrors.courseInterest = "Please select at least one course interest";
    }

    if (!formData.specificQuestions.trim()) {
      newErrors.specificQuestions = "Specific questions are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/student-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          educationLevel: "",
          courseInterest: [],
          currentSkills: "",
          specificQuestions: "",
          preferredContactMethod: "email",
        });
      } else {
        setErrors({
          general: result.error || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      setErrors({
        general: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCourseInterestChange = (courseValue: string) => {
    const updatedInterest = formData.courseInterest.includes(courseValue)
      ? formData.courseInterest.filter((course) => course !== courseValue)
      : [...formData.courseInterest, courseValue];

    handleInputChange("courseInterest", updatedInterest);
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Query Submitted Successfully!
        </h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest! Our team will contact you within 24 hours
          to discuss your educational goals.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Query
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          Join Our Learning Community
        </h2>
        <p className="text-gray-600">
          Ready to start your learning journey? Tell us about your goals and
          we'll help you find the perfect course.
        </p>
      </div>

      {errors.general && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 text-sm">{errors.general}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone Number (Optional)
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Education Level */}
        <div className="space-y-2">
          <Label htmlFor="educationLevel" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education Level *
          </Label>
          <select
            id="educationLevel"
            value={formData.educationLevel}
            onChange={(e) =>
              handleInputChange("educationLevel", e.target.value)
            }
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.educationLevel ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select your education level</option>
            {educationLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
          {errors.educationLevel && (
            <p className="text-red-500 text-sm">{errors.educationLevel}</p>
          )}
        </div>

        {/* Course Interest */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Course Interests * (Select all that apply)
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {courseOptions.map((course) => (
              <label
                key={course.value}
                className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.courseInterest.includes(course.value)}
                  onChange={() => handleCourseInterestChange(course.value)}
                  className="rounded"
                />
                <span className="text-sm">{course.label}</span>
              </label>
            ))}
          </div>
          {errors.courseInterest && (
            <p className="text-red-500 text-sm">{errors.courseInterest}</p>
          )}
        </div>

        {/* Current Skills */}
        <div className="space-y-2">
          <Label htmlFor="currentSkills">Current Skills (Optional)</Label>
          <Textarea
            id="currentSkills"
            value={formData.currentSkills}
            onChange={(e) => handleInputChange("currentSkills", e.target.value)}
            placeholder="Tell us about your current technical skills and experience..."
            rows={3}
          />
        </div>

        {/* Specific Questions */}
        <div className="space-y-2">
          <Label
            htmlFor="specificQuestions"
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Specific Questions *
          </Label>
          <Textarea
            id="specificQuestions"
            value={formData.specificQuestions}
            onChange={(e) =>
              handleInputChange("specificQuestions", e.target.value)
            }
            placeholder="What specific questions do you have about our courses? What are your learning goals?"
            rows={4}
            className={errors.specificQuestions ? "border-red-500" : ""}
          />
          {errors.specificQuestions && (
            <p className="text-red-500 text-sm">{errors.specificQuestions}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <Label htmlFor="preferredContactMethod">
            Preferred Contact Method
          </Label>
          <select
            id="preferredContactMethod"
            value={formData.preferredContactMethod}
            onChange={(e) =>
              handleInputChange("preferredContactMethod", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="both">Both Email and Phone</option>
          </select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Query
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
