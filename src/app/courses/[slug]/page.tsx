import React from "react";
import courseData from "@/data/music_courses.json";
import { PAGE_REGISTRY, PageName } from "@/utils/navigation";
import { notFound } from "next/navigation";
import { CourseCard } from "@/components/CourseCard";
import { Metadata } from 'next';
import CourseDetailClient from "@/components/CourseDetailClient";

// Helper to find page config by slug
const getPageBySlug = (slug: string) => {
    // Exact match path or lookup logic
    // We assume the slug provided maps to the end of a registry path
    // e.g. "basic" -> "/courses/basic"
    const entry = Object.entries(PAGE_REGISTRY).find(([key, config]) => {
        const registrySlug = config.path.split('/').pop();
        return registrySlug === slug;
    });
    return entry ? { name: entry[0] as PageName, config: entry[1] } : null;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    // 1. Check if it's a specific course first (Hybrid Routing)
    const course = courseData.courses.find((c) => c.slug === params.slug);
    if (course) {
        return {
            title: `${course.title} | Music Mastery Academy`,
            description: course.description,
        };
    }

    // 2. Fallback to Category Page logic
    const pageData = getPageBySlug(params.slug);
    if (!pageData) return { title: "Course Category" };

    return {
        title: `${pageData.config.title} | Music Mastery Academy`,
        description: `Explore ${pageData.config.title} at Music Mastery Academy. ${pageData.config.description}`,
    };
}

export default function CourseCategoryPage({ params }: { params: { slug: string } }) {
    // 1. Check if the slug matches a specific COURSE
    // This allows /courses/advanced-composition-techniques to behave like a detail page
    const course = courseData.courses.find((c) => c.slug === params.slug);

    if (course) {
        return <CourseDetailClient courseSlug={params.slug} />;
    }

    // 2. If not a course, check if it fits a CATEGORY
    const pageData = getPageBySlug(params.slug);

    if (!pageData) {
        return notFound();
    }

    const { name, config } = pageData;

    // Filter courses where category matches the Page Name
    const filteredCourses = courseData.courses.filter(
        (course) => course.category === name
    );

    return (
        <div className="min-h-screen bg-black py-12 pt-36 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] z-0 pointer-events-none" />
            <div className="relative z-10 text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {config.title}
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
                    {config.description}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-xl text-neutral-400">Coming Soon</h2>
                        <p className="text-neutral-500 mt-2">New courses for {name} are being produced.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
