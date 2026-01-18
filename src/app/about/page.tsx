
// About Page Component
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Music Mastery Academy | Our Mission & Team",
    description: "Learn about Music Mastery Academy's mission to democratize music education. Meet our expert instructors and discover our commitment to your musical journey.",
};

function AboutPage() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
                    About Us
                </h1>
                <div className="text-lg text-neutral-300 space-y-6 leading-relaxed">
                    <p>
                        Welcome to Music Mastery Academy, the premier destination for aspiring musicians
                        and seasoned professionals alike. Established in 2026, our mission is to
                        democratize world-class music education through technology and expert mentorship.
                    </p>
                    <p>
                        We believe that every individual has a unique sound waiting to be discovered.
                        Our curriculum combines traditional music theory with cutting-edge production
                        techniques, ensuring our students are prepared for the modern music industry.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border border-white/10 rounded-xl bg-neutral-900/50">
                        <h3 className="text-3xl font-bold text-teal-400 mb-2">5+</h3>
                        <p className="text-neutral-400">Years of Experience</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-xl bg-neutral-900/50">
                        <h3 className="text-3xl font-bold text-teal-400 mb-2">10k+</h3>
                        <p className="text-neutral-400">Students Worldwide</p>
                    </div>
                    <div className="p-6 border border-white/10 rounded-xl bg-neutral-900/50">
                        <h3 className="text-3xl font-bold text-teal-400 mb-2">50+</h3>
                        <p className="text-neutral-400">Expert Instructors</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
