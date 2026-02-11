"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY <= 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div
            className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md " : "fixed"} duration-200 h-[12vh] z-[100] fixed w-full`}
        >
            <div className="flex items-center justify-between w-[90%] h-full mx-auto">
                {/* logo */}
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl hidden sm:block md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 font-bold">
                            Pavan Raj
                        </h1>
                    </div>
                </Link>
                {/* navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {NavLinks.map((link) => {
                        return (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="text-base hover:text-cyan-300 text-white
                font-medium transition-all duration-200"
                            >
                                <p>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>
                {/* buttons */}
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    {/* view resume in new tab */}
                    <a
                        href="/Resume/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3.5 cursor-pointer rounded-lg border border-blue-500 text-blue-300 hover:bg-blue-900/40 transition-all duration-300">
                            View Resume
                        </span>
                    </a>

                    {/* download cv button */}
                    <a href="/Resume/Resume.pdf" download>
                        <span className="px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:px-8 lg:py-3.5 cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
                            <BiDownload className="w-5 h-5" />
                            <span>Download CV</span>
                        </span>
                    </a>

                    {/* Burger menu */}
                    <HiBars3BottomRight
                        onClick={openNav}
                        className="w-8 h-8 cursor-pointer text-white lg:hidden"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
