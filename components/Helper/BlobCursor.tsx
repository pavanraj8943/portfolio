"use client";
import { useMotionValue, useSpring, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const BlobCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring config for smooth movement
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Center the cursor (32px / 2)
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        // Add listeners for hover effects on interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, .interactive");
        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Setup observer for dynamically added elements
        const observer = new MutationObserver((mutations) => {
            const newInteractiveElements = document.querySelectorAll("a, button, input, textarea, .interactive");
            newInteractiveElements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter); // clean up first
                el.removeEventListener("mouseleave", handleMouseLeave);
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });


        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                backgroundColor: "white", // Or any color that contrasts well
                scale: isHovering ? 2.5 : 1, // Scale up on hover
            }}
            transition={{
                scale: { duration: 0.2 } // Smooth scaling
            }}
        />
    );
};

export default BlobCursor;
