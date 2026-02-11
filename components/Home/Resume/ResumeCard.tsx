"use client";
import React from "react";
import { IconType } from "react-icons";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";

type Props = {
    role: string;
    date?: string;
    description: string;
};

const getIconForRole = (role: string): IconType => {
    const lower = role.toLowerCase();

    if (
        lower.includes("diploma") ||
        lower.includes("higher secondary") ||
        lower.includes("course") ||
        lower.includes("education") ||
        lower.includes("college") ||
        lower.includes("school")
    ) {
        return FaGraduationCap;
    }

    if (lower.includes("mern")) {
        return FaCodepen;
    }

    if (lower.includes("full-stack") || lower.includes("developer")) {
        return FaReact;
    }

    return BiBadge;
};

const ResumeCard = ({ role, date, description }: Props) => {
    const Icon = getIconForRole(role);

    return (
        <div className="flex items-start space-x-3 bg-blue-950/30 hover:bg-blue-950/50 transition-all duration-300 p-3 sm:p-4 rounded-lg border border-cyan-900/30 hover:border-cyan-400/50">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
                {date && (
                    <span className="inline-block mb-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-medium">
                        {date}
                    </span>
                )}
                <h3 className="text-gray-100 text-sm sm:text-base font-semibold leading-tight">
                    {role}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm pt-1.5 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ResumeCard;
