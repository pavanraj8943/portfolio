"use client";

import React from "react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number; // milliseconds
  className?: string;
};

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
  const style: React.CSSProperties = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div style={style} className={`animate-fadeIn ${className}`}>
      {children}
    </div>
  );
};

export default FadeIn;
