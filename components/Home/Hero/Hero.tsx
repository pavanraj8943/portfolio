"use client";
import Image from "next/image";
import React from "react";

import Typewriter from "typewriter-effect";
import ParticleBackground from "../Particle/ParticleBackground"; // Updated import path

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
            <ParticleBackground />

            <div className="relative z-10 flex flex-col items-center mt-15">
                <div className="absolute z-[-10] top-8 w-screen h-70 bg-amber-50/5"></div>
                <div className="rounded-full border-8 border-[#0c0c48aa] overflow-hidden">
                    <Image
                        src="/images/pavan.png"
                        alt="heroImage"
                        width={250}
                        height={250}
                        className="object-cover"
                        data-aos="fade-up"
                    />
                </div>

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
                >
                    Creating web products,
                    <br />
                    brands,
                    <span className="text-cyan-200"> and experiences.</span>
                </h1>
                <h2
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
                >
                    Hi! I'm Pavan Raj - A Passionate
                    <span className="text-cyan-200 font-bold ml-2">
                        <Typewriter
                            options={{
                                strings: [
                                    " Frontend Developer",
                                    " Backend Developer",
                                    " Web Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                wrapperClassName: "pl-2",
                            }}
                        />
                    </span>
                </h2>



            </div>
        </div>
    );
};

export default Hero;
