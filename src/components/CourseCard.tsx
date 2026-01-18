"use client";

import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

interface CourseProps {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
    category: string;
    level?: string;
    duration?: string;
    rating?: number;
}

export function CourseCard({ course }: { course: CourseProps }) {
    return (
        <div className="flex justify-center h-full">
            <Link href={`/course/${course.slug}`} className="block h-full w-full max-w-sm">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative h-48 w-full overflow-hidden group">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full border border-white/10">
                            {course.category}
                        </div>
                        {course.level && (
                            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full border border-white/10 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                                {course.level}
                            </div>
                        )}
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg sm:text-xl text-black dark:text-neutral-100 font-bold leading-tight line-clamp-2">
                                {course.title}
                            </h3>
                        </div>

                        <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mb-3 space-x-3">
                            {course.instructor && (
                                <div className="flex items-center">
                                    <span className="font-medium text-neutral-300">{course.instructor}</span>
                                </div>
                            )}
                            {course.rating && (
                                <div className="flex items-center text-yellow-500">
                                    ★ {course.rating}
                                </div>
                            )}
                            {course.duration && (
                                <div className="flex items-center">
                                    ⏳ {course.duration}
                                </div>
                            )}
                        </div>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-6 line-clamp-3">
                            {course.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-white">₹{course.price.toLocaleString('en-IN')}</span>
                            <span className="px-5 py-2 rounded-full bg-transparent hover:bg-neutral-800 text-white text-sm font-semibold transition-all border border-neutral-600 hover:border-teal-500 hover:text-teal-400">
                                Details
                            </span>
                        </div>
                    </div>
                </BackgroundGradient>
            </Link>
        </div>
    );
}
