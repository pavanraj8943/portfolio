"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
    icon: React.ReactNode;
    name: string;
    description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
    return (
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            className="h-full"
        >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group">

                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:from-cyan-500/30 group-hover:to-blue-600/30">
                    <div className="text-4xl text-cyan-400 group-hover:text-white transition-colors duration-300">
                        {icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                </p>

                {/* Decorative Line */}
                <div className="w-12 h-1 bg-cyan-500/30 rounded-full mt-6 group-hover:w-24 group-hover:bg-cyan-400 transition-all duration-300" />
            </div>
        </Tilt>
    );
};

export default ServiceCard;
