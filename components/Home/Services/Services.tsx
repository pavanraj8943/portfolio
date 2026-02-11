"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import { FaCode, FaServer, FaLaptopCode, FaDatabase } from "react-icons/fa";

const Services = () => {
    return (
        <div id="services" className="pt-20 pb-20 bg-[#0d0d1f] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-cyan-400">Services</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                        I build high-performance, scalable, and user-centric digital solutions tailored to your needs.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    <div>
                        <ServiceCard
                            icon={<FaCode />}
                            name="MERN Stack Dev"
                            description="Full-stack web applications using MongoDB, Express.js, React.js, and Node.js with a focus on performance and scalability."
                        />
                    </div>
                    <div>
                        <ServiceCard
                            icon={<FaServer />}
                            name="Backend API"
                            description="Robust RESTful API development, server-side logic, and secure authentication systems to power your applications."
                        />
                    </div>
                    <div>
                        <ServiceCard
                            icon={<FaLaptopCode />}
                            name="Frontend Dev"
                            description="Pixel-perfect, responsive, and interactive user interfaces using React.js, Next.js, and modern CSS frameworks like Tailwind."
                        />
                    </div>
                    <div>
                        <ServiceCard
                            icon={<FaDatabase />}
                            name="Database Design"
                            description="Efficient database schema design, optimization, and management using MongoDB and SQL databases for data integrity."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
