"use client";
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-[#050512]">
            <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center justify-center gap-4 py-6 text-sm text-white/60">
                <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-2 shadow-lg shadow-cyan-500/5 backdrop-blur">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                        Pavan Raj
                    </span>
                    <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
                    <span className="text-[11px] text-white/50">
                        MERN Stack Developer
                    </span>
                </div>

                <p className="mt-1 text-center text-[11px] text-white/35">
                    © {year} Pavan Raj. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
