"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Code, Menu, X } from "lucide-react";

import { NAV_LINKS, PERSONAL_INFO } from "../utils/constants";
import { useScrollSpy } from "../hooks/useScrollspy";
import { scrollToSection } from "../utils/scrollToSection";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.id), []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-3 text-zinc-100"
          onClick={() => handleNavClick("home")}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[--color-primary] to-lime-500 p-[2px] shadow-[0_0_18px_rgba(141,255,105,0.5)]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
              <Code size={18} className="text-[--color-primary]" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-sm font-semibold tracking-[0.18em] uppercase text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-200">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={`group relative cursor-pointer px-1 pb-1 text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-[--color-primary]"
                  : "text-zinc-300 hover:text-white"
              }`}
              onClick={() => handleNavClick(link.id)}
            >
              <span>{link.label}</span>
              <span
                className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-center rounded-full bg-[linear-gradient(90deg,#8DFF69,rgba(141,255,105,0.05))] transition-transform duration-200 ${
                  activeSection === link.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Hire Me button (desktop) */}
          <button className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:opacity-90">
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/70 backdrop-blur-xl">
          <ul className="flex flex-col gap-4 px-6 py-4 text-zinc-200">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`cursor-pointer ${
                activeSection === link.id ? "text-[--color-primary]" : ""
              }`}
            >
              {link.label}
            </li>
          ))}
          <button className="mt-2 w-full rounded-full bg-white px-5 py-2 text-sm font-medium text-black">
            Hire Me
          </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
