import React from "react";
import courseData from "@/data/music_courses.json";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import CourseDetailClient from "@/components/CourseDetailClient";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const course = courseData.courses.find((c) => c.slug === params.slug);
    if (!course) return { title: "Course Not Found" };

    return {
        title: `${course.title} | Music Mastery Academy`,
        description: course.description,
    };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
    const course = courseData.courses.find((c) => c.slug === params.slug);

    if (!course) {
        return notFound();
    }

    return <CourseDetailClient courseSlug={params.slug} />;
}
