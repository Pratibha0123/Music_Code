"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const DiscoverSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Check if section is in view
    const isInView = useInView(sectionRef, {
        amount: 0.3, // Trigger when 30% visible
        margin: "0px 0px -20% 0px"
    });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]); // Parallax
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3"); // Cinematic Ambient
            audioRef.current.loop = true;
            audioRef.current.volume = 0.2;
        }

        const handleAudio = async () => {
            if (isInView && !isMuted) {
                try {
                    await audioRef.current?.play();
                    setIsPlaying(true);
                    // Fade in
                    const fadeInterval = setInterval(() => {
                        if (audioRef.current && audioRef.current.volume < 0.5) {
                            audioRef.current.volume += 0.05;
                        } else {
                            clearInterval(fadeInterval);
                        }
                    }, 200);
                } catch (e) {
                    console.error("Autoplay prevented:", e);
                }
            } else {
                // Fade out
                const fadeInterval = setInterval(() => {
                    if (audioRef.current && audioRef.current.volume > 0.1) {
                        audioRef.current.volume -= 0.05;
                    } else {
                        audioRef.current?.pause();
                        setIsPlaying(false);
                        clearInterval(fadeInterval);
                    }
                }, 200);
            }
        };

        handleAudio();

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.volume = 0.2;
            }
        };
    }, [isInView, isMuted]);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-950 py-20"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-black to-black opacity-60 z-0" />

            {/* Floating Elements (Notes/Particles) */}
            <FloatingParticles />

            {/* Content Container */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 text-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-teal-600 mb-6 tracking-tight"
                >
                    Discover Your Sound with Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    A Personal Journey in Music Mastery. Embark on a path that is uniquely yours.
                    Where your aspirations meet our dedicated mentorship.
                </motion.p>

                {/* Simulated Audio Visualizer */}
                <div className="mt-12 h-24 flex items-center justify-center gap-2">
                    {isPlaying && !isMuted ? (
                        <WaveformActive />
                    ) : (
                        <WaveformStatic />
                    )}
                </div>

                <div className="mt-8 text-sm text-neutral-500 uppercase tracking-widest">
                    {isPlaying ? "Now Playing: Ambient Journey" : "Scroll to Play"}
                </div>

            </motion.div>

            {/* Controls */}
            <button
                onClick={toggleMute}
                className="absolute bottom-10 right-10 z-20 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110"
                aria-label="Toggle Sound"
            >
                {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                )}
            </button>
        </section>
    );
};

// Sub-components for visual effects

const FloatingParticles = () => {
    // Generate random positions for particles
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-20 blur-sm"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                        scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const WaveformActive = () => {
    return (
        <div className="flex items-center gap-1 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1.5 bg-teal-400 rounded-full"
                    animate={{
                        height: ["20%", "80%", "30%"],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                    style={{ height: "40%" }}
                />
            ))}
        </div>
    );
}

const WaveformStatic = () => {
    return (
        <div className="flex items-center gap-1 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="w-1.5 bg-neutral-700 rounded-full"
                    style={{ height: "20%" }}
                />
            ))}
        </div>
    );
}

export default DiscoverSection;
