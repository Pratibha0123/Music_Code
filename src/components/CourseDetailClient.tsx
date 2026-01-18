"use client";

import React, { useState } from "react";
import courseData from "@/data/music_courses.json";
import { notFound } from "next/navigation";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";

// Defines the visual theme properties
interface Theme {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    titleGradient: string;
    buttonBg: string;
    buttonHover: string;
    buttonShadow: string;
    checkColor: string;
    instructorText: string;
}

const getTheme = (slug: string): Theme => {
    switch (slug) {
        case "advanced-composition-techniques":
        case "orchestration-styles":
            // Gold/Elite Theme
            return {
                badgeBg: "bg-yellow-500/20",
                badgeText: "text-amber-400",
                badgeBorder: "border-yellow-500/50",
                titleGradient: "from-amber-200 via-yellow-400 to-amber-700",
                buttonBg: "bg-amber-600",
                buttonHover: "hover:bg-amber-700",
                buttonShadow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
                checkColor: "text-amber-400",
                instructorText: "text-amber-400"
            };
        case "art-of-songwriting":
        case "lyricism-storytelling":
            // Warm/Rose Theme
            return {
                badgeBg: "bg-rose-500/20",
                badgeText: "text-rose-400",
                badgeBorder: "border-rose-500/50",
                titleGradient: "from-rose-200 via-rose-400 to-red-700",
                buttonBg: "bg-rose-600",
                buttonHover: "hover:bg-rose-700",
                buttonShadow: "shadow-[0_0_20px_rgba(225,29,72,0.4)]",
                checkColor: "text-rose-400",
                instructorText: "text-rose-400"
            };
        case "electronic-music-production":
        case "mixing-mastering-essentials":
            // Neon/Future Theme
            return {
                badgeBg: "bg-violet-500/20",
                badgeText: "text-violet-400",
                badgeBorder: "border-violet-500/50",
                titleGradient: "from-cyan-300 via-violet-400 to-fuchsia-600",
                buttonBg: "bg-violet-600",
                buttonHover: "hover:bg-violet-700",
                buttonShadow: "shadow-[0_0_20px_rgba(139,92,246,0.6)]",
                checkColor: "text-cyan-400",
                instructorText: "text-violet-400"
            };
        default:
            // Default Teal Theme (Basic/Beginner)
            return {
                badgeBg: "bg-teal-500/20",
                badgeText: "text-teal-400",
                badgeBorder: "border-teal-500/50",
                titleGradient: "from-teal-200 via-teal-400 to-emerald-700",
                buttonBg: "bg-teal-600",
                buttonHover: "hover:bg-teal-700",
                buttonShadow: "shadow-[0_0_20px_rgba(45,212,191,0.4)]",
                checkColor: "text-teal-400",
                instructorText: "text-teal-400"
            };
    }
};

export default function CourseDetailClient({ courseSlug }: { courseSlug: string }) {
    const course = courseData.courses.find((c) => c.slug === courseSlug);

    if (!course) {
        return notFound();
    }

    const theme = getTheme(course.slug);

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
            "@type": "Organization",
            "name": "Music Mastery Academy",
            "sameAs": "http://www.musicmasteryacademy.com"
        },
        "instructor": {
            "@type": "Person",
            "name": course.instructor,
            "description": course.instructorBio
        },
        "offers": {
            "@type": "Offer",
            "price": course.price,
            "priceCurrency": "INR",
            "category": "Paid"
        },
        "aggregateRating": course.rating ? {
            "@type": "AggregateRating",
            "ratingValue": course.rating,
            "reviewCount": course.reviews?.length || 0
        } : undefined
    };

    return (
        <div className="min-h-screen bg-black text-neutral-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover opacity-40 blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={`inline-block py-1 px-3 rounded-full ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border text-sm font-semibold mb-4 backdrop-blur-md`}>
                            {course.category} • {course.level}
                        </span>
                        <h1 className={`text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b ${theme.titleGradient} mb-6 tracking-tight text-balance pb-2`}>
                            {course.title}
                        </h1>
                        <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className={`px-8 py-4 rounded-full ${theme.buttonBg} ${theme.buttonHover} text-white font-bold text-lg ${theme.buttonShadow} transition-all hover:scale-105`}>
                                Enroll Now • ₹{course.price.toLocaleString('en-IN')}
                            </button>
                            <span className="text-neutral-400 text-sm">30-Day Money-Back Guarantee</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6">Course Overview</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-neutral-400">
                            <p>{course.longDescription || course.description}</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">What You'll Learn</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.curriculum?.slice(0, 2).map((item, idx) => ( // Placeholder: create 'highlights' or use curriculum
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className={`${theme.checkColor} mt-1`}>✓</span>
                                        <span>Master key concepts in {course.title}</span>
                                    </li>
                                ))}
                                <li className="flex items-start gap-2">
                                    <span className={`${theme.checkColor} mt-1`}>✓</span>
                                    <span>Practical, hands-on projects</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className={`${theme.checkColor} mt-1`}>✓</span>
                                    <span>Industry-standard workflow</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Curriculum */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8">Curriculum</h2>
                        <div className="space-y-4">
                            {course.curriculum?.map((module, idx) => (
                                <div key={idx} className="border border-neutral-800 rounded-xl bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors">
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 text-sm font-bold">
                                                {idx + 1}
                                            </span>
                                            <h3 className="text-lg font-semibold text-neutral-200">{module}</h3>
                                        </div>
                                        <span className="text-neutral-500 text-sm">~ 1.5 Hours</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Reviews */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-8">Student Reviews</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {course.reviews?.map((review, idx) => (
                                <div key={idx} className="bg-neutral-900/30 border border-neutral-800 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-sm ${i < review.rating ? "text-yellow-500" : "text-neutral-700"}`}>★</span>
                                        ))}
                                    </div>
                                    <p className="text-neutral-300 italic mb-4">"{review.comment}"</p>
                                    <p className="text-neutral-500 text-sm font-semibold">- {review.user}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Right Column: Instructor & Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Instructor Card */}
                    <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Your Instructor</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-neutral-700 overflow-hidden">
                                {/* Placeholder avatar if no image */}
                                <div className={`w-full h-full flex items-center justify-center text-xl font-bold bg-neutral-800 ${theme.instructorText}`}>
                                    {course.instructor.charAt(0)}
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">{course.instructor}</div>
                                <div className={`text-sm ${theme.instructorText}`}>Expert Educator</div>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            {course.instructorBio || "An experienced musician passionate about sharing knowledge."}
                        </p>

                        <div className="space-y-4 pt-6 border-t border-neutral-800">
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Duration</span>
                                <span className="text-white">{course.duration}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Skill Level</span>
                                <span className="text-white">{course.level}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Language</span>
                                <span className="text-white">English</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-neutral-500">Certificate</span>
                                <span className="text-white">Yes, upon completion</span>
                            </div>
                        </div>

                        <button className={`w-full mt-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors`}>
                            Subscribe for ₹{course.price.toLocaleString('en-IN')}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
