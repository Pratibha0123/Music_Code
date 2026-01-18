"use client";

import React from "react";
import courseData from "@/data/music_courses.json";
import { PAGE_REGISTRY } from "@/utils/navigation";
import { CourseCard } from "@/components/CourseCard";

function CoursesPage() {
    const courses = courseData.courses;

    return (
        <div className="min-h-screen bg-black py-12 pt-36 relative">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {PAGE_REGISTRY["All Courses"].title}
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
                    {PAGE_REGISTRY["All Courses"].description}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoursesPage;
