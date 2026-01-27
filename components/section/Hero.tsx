"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

import { PERSONAL_INFO } from "../utils/constants";
import { useScrollReveal } from "../hooks/useScrollReveal";
import FadeIn from "../FadeIn";

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen overflow-hidden bg-black px-6 pt-24 pb-10 text-white"
    >
      {/* green glow blobs */}
      <div className="pointer-events-none absolute -left-48 -top-52 h-[520px] w-[520px] rounded-full bg-[--color-primary]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-20 top-10 h-[520px] w-[520px] rounded-full bg-[--color-primary]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-[--color-primary]/10 blur-3xl" />

      {/* big soft ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-60" />

      <div
        className={`mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Left */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[--color-primary]/30 bg-[--color-primary]/10 px-4 py-2 text-xs font-medium text-zinc-100">
            <Star size={14} className="text-[--color-primary]" />
            <span className="text-zinc-200">
              {PERSONAL_INFO.role} &amp; UI/UX Enthusiast | {PERSONAL_INFO.location}
            </span>
          </div>

          <h1 className="text-4xl font-light leading-tight md:text-6xl">
            React.js Developer
            <br />
            Portfolio
          </h1>

          <p className="max-w-xl text-sm text-zinc-300 md:text-base">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:opacity-90">
              Get in Touch
            </button>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-y-6 text-left md:mx-0 md:grid-cols-4">
            <div className="border-white/10 md:border-r md:pr-6">
              <p className="text-lg font-semibold text-[--color-primary]">3+</p>
              <p className="text-xs text-zinc-400">Years Experience</p>
            </div>
            <div className="border-white/10 md:border-r md:px-6">
              <p className="text-lg font-semibold text-[--color-primary]">50+</p>
              <p className="text-xs text-zinc-400">Projects Completed</p>
            </div>
            <div className="border-white/10 md:border-r md:px-6">
              <p className="text-lg font-semibold text-[--color-primary]">15+</p>
              <p className="text-xs text-zinc-400">Technologies</p>
            </div>
            <div className="md:pl-6">
              <p className="text-lg font-semibold text-[--color-primary]">98%</p>
              <p className="text-xs text-zinc-400">Client Satisfaction</p>
            </div>
          </div>
        </div>

     
        {/* Right Column - Developer Image */}
        <div className="flex-1">
          <FadeIn delay={200}>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_120px_rgba(141,255,105,0.18)]" style={{ minHeight: 420 }}>
              {/* Animated Gradient Border Background */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-[--color-primary]/20 via-[--color-primary]/10 to-[--color-primary] animate-spin-slow rounded-2xl" />
              </div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden m-[1px] h-[360px] bg-black/40 backdrop-blur-sm">
                <img src="/developer-portrait.png" alt="Developer at work" className="w-full h-full object-cover" onError={(e) => {(e.target as HTMLImageElement).src = '/OIP.webp'}} />
              </div>

              {/* Technology Logos */}
              <div className="absolute bottom-6 left-6 z-20">
                <FadeIn delay={500}>
                  <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <SiReact className="w-full h-full text-[--color-primary]" />
                    </div>

                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <SiNextdotjs className="w-full h-full text-white" />
                    </div>

                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <SiNodedotjs className="w-full h-full text-green-500" />
                    </div>

                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <SiTailwindcss className="w-full h-full text-cyan-300" />
                    </div>

                    <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <SiMongodb className="w-full h-full text-green-400" />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[--color-primary] opacity-80">
        <ArrowDown size={22} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;

