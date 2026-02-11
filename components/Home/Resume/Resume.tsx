"use client";
import React, { useEffect, useRef, useState } from "react";
import ResumeCard from "./ResumeCard";

const Resume = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const timelineTop = rect.top;
            const timelineHeight = rect.height;

            if (timelineTop < windowHeight && rect.bottom > 0) {
                const visibleStart = Math.max(0, windowHeight - timelineTop);
                const percentage = Math.min(100, (visibleStart / timelineHeight) * 100);
                setLineHeight(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const TimelineRow = ({
        leftCard,
        rightCard,
    }: {
        leftCard: React.ReactNode;
        rightCard: React.ReactNode;
    }) => (
        <div className="relative grid grid-cols-1 xl:grid-cols-[1fr_40px_1fr] gap-2 mb-3">
            <div className="pl-10 xl:pl-0 xl:pr-2">{leftCard}</div>
            <div className="hidden xl:flex items-center justify-center">
                <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.6)] z-10" />
            </div>
            <div className="pl-10 xl:pl-2">{rightCard}</div>
        </div>
    );

    const lineStyle: React.CSSProperties = {
        height: `${lineHeight}%`,
        background: "linear-gradient(to bottom, #22d3ee, #3b82f6, #22d3ee)",
        boxShadow:
            "0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)",
    };

    return (
        <div id="experience" className="pt-10 pb-16 bg-[#0d0d1f]">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    Career <span className="text-cyan-400">Overview</span>
                </h1>
                <p className="text-gray-400 mt-3 max-w-2xl mx-auto px-4 text-sm sm:text-base">
                    A timeline of my professional journey and educational background
                </p>
            </div>

            {/* Desktop Titles */}
            <div className="hidden xl:grid grid-cols-[1fr_40px_1fr] gap-2 w-[90%] lg:w-[80%] mx-auto mb-6">
                <div className="text-center">
                    <span className="text-cyan-400 font-semibold text-lg">
                        Technical Experience
                    </span>
                </div>
                <div />
                <div className="text-center">
                    <span className="text-cyan-400 font-semibold text-lg">
                        Academic Background
                    </span>
                </div>
            </div>

            <div className="w-[95%] lg:w-[80%] mx-auto">
                {/* ================= DESKTOP TIMELINE ================= */}
                <div ref={timelineRef} className="relative hidden xl:block">
                    {/* Center Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-cyan-900/30 rounded-full">
                        <div
                            className="w-full rounded-full transition-all duration-1000 ease-out"
                            style={lineStyle}
                        />
                    </div>

                    <TimelineRow
                        leftCard={
                            <ResumeCard
                                role="MERN Stack Developer Intern"
                                date="Jul 2025 - Present"
                                description="Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js."
                            />
                        }
                        rightCard={
                            <ResumeCard
                                role="ME(A)RN Stack Development Course "
                                date="Jul 2025 - Jan 2026"
                                description="Synnefo Solutions"
                            />
                        }
                    />

                    <TimelineRow
                        leftCard={
                            <ResumeCard
                                role="Full-Stack Developer Intern"
                                date="Apr 2024 - May 2024"
                                description="Built responsive user interfaces with React and TypeScript. Integrated RESTful APIs and worked on database optimization."
                            />
                        }
                        rightCard={
                            <ResumeCard
                                role="Diploma in Computer Engineering"
                                date="2022 - 2025"
                                description="Model Polytechnic College, Karunagappally"
                            />
                        }
                    />

                    <TimelineRow
                        leftCard={<div />}
                        rightCard={
                            <ResumeCard
                                role="Higher Secondary Education"
                                date="2020 - 2022"
                                description="DVNSSHSS Poovattoor"
                            />
                        }
                    />
                </div>

                {/* ================= MOBILE LAYOUT ================= */}
                <div className="xl:hidden space-y-10">
                    {/* Technical Experience */}
                    <div>
                        <h2 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-400 pl-3">
                            Technical Experience
                        </h2>

                        <div className="space-y-4">
                            <ResumeCard
                                role="MERN Stack Developer Intern"
                                date="Jul 2025 - Present"
                                description="Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js."
                            />

                            <ResumeCard
                                role="Full-Stack Developer Intern"
                                date="Apr 2024 - May 2024"
                                description="Built responsive user interfaces with React and TypeScript. Integrated RESTful APIs and worked on database optimization."
                            />
                        </div>
                    </div>

                    {/* Academic Background */}
                    <div>
                        <h2 className="text-xl font-bold text-cyan-400 mb-4 border-l-4 border-cyan-400 pl-3">
                            Academic Background
                        </h2>

                        <div className="space-y-4">
                            <ResumeCard
                                role="ME(A)RN Stack Development Course "
                                date="Jul 2025 - Jan 2026"
                                description="Synnefo Solutions"
                            />
                            <ResumeCard
                                role="Diploma in Computer Engineering"
                                date="2022 - 2025"
                                description="Model Polytechnic College, Karunagappally"
                            />

                            <ResumeCard
                                role="Higher Secondary Education"
                                date="2020 - 2022"
                                description="DVNSSHSS Poovattoor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
