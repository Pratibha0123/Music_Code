"use client";

import React, { FormEvent, useState } from "react";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", { email, message });
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-neutral-300"
                required
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-neutral-300 h-32"
                required
            />
            <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300"
            >
                {submitted ? "Message Sent!" : "Send Message"}
            </button>
        </form>
    );
}
