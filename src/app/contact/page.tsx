import React from "react";
import ContactForm from "@/components/ContactForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Music Mastery Academy | Get in Touch",
    description: "Contact Music Mastery Academy for inquiries about our music courses, programs, and mentorship. We are here to help you achieve your musical goals.",
};

function ContactPage() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36 relative">
            <div className="max-w-2xl mx-auto px-4 relative z-10">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
                    Contact Us
                </h1>
                <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center mb-12">
                    We're here to help you on your musical journey. Reach out with any questions about our courses or programs.
                </p>

                <ContactForm />
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
    );
}

export default ContactPage;
