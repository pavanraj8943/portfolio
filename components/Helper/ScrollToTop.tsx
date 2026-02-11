"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-4 right-4 animate-bounce z-[50]">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none hover:bg-blue-700 transition-colors duration-300 shadow-lg glow"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
