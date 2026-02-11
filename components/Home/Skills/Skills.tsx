"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiGit,
    SiGithub,
    SiPostman,
    SiMysql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

/* ------------------ SKILLS DATA ------------------ */

const skills = [
    {
        name: "HTML",
        icon: <SiHtml5 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        color: "#E34F26",
    },
    {
        name: "CSS",
        icon: <SiCss3 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        color: "#1572B6",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/docs",
        color: "#38BDF8",
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        link: "https://getbootstrap.com/docs",
        color: "#7952B3",
    },
    {
        name: "React.js",
        icon: <SiReact />,
        link: "https://react.dev",
        color: "#61DAFB",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        link: "https://nextjs.org/docs",
        color: "#ffffff",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        color: "#F7DF1E",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        link: "https://www.typescriptlang.org/docs",
        color: "#3178C6",
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        link: "https://nodejs.org/en/docs",
        color: "#339933",
    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
        color: "#ffffff",
    },
    {
        name: "REST API Dev",
        icon: <TbApi />,
        link: "https://restfulapi.net/",
        color: "#FF6B6B",
    },
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/docs/",
        color: "#47A248",
    },
    {
        name: "MySQL",
        icon: <SiMysql />,
        link: "https://dev.mysql.com/doc/",
        color: "#4479A1",
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        link: "https://www.postgresql.org/docs/",
        color: "#336791",
    },
    {
        name: "Redux",
        icon: <SiRedux />,
        link: "https://redux.js.org/",
        color: "#764ABC",
    },
    {
        name: "Git",
        icon: <SiGit />,
        link: "https://git-scm.com/docs",
        color: "#F05032",
    },
    {
        name: "GitHub",
        icon: <SiGithub />,
        link: "https://docs.github.com/",
        color: "#ffffff",
    },
    {
        name: "Postman",
        icon: <SiPostman />,
        link: "https://learning.postman.com/",
        color: "#FF6C37",
    },
    {
        name: "VS Code",
        icon: <VscCode />,
        link: "https://code.visualstudio.com/docs",
        color: "#007ACC",
    },
];

/* ------------------ PYRAMID ROWS (DESKTOP) ------------------ */
const rows = [
    skills.slice(0, 6), // 6 items
    skills.slice(6, 12), // 6 items
    skills.slice(12, 17), // 5 items
    skills.slice(17), // 4 items
];

/* ------------------ SKILL CARD ------------------ */

type Skill = {
    name: string;
    icon: React.ReactNode;
    link: string;
    color: string;
};

const SkillCard = ({ skill }: { skill: Skill }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05}>
            <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center"
            >
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="bg-white/5 backdrop-blur-md border border-white/10
          w-[140px] xl:w-[160px] h-[190px]
          rounded-2xl flex flex-col items-center justify-center
          shadow-lg transition duration-300
          hover:scale-110 hover:-translate-y-3"
                    style={{
                        boxShadow: hovered
                            ? `0 0 25px ${skill.color}55`
                            : "0 10px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    <div
                        className="text-5xl mb-4 transition"
                        style={{ color: hovered ? skill.color : "#9ca3af" }}
                    >
                        {skill.icon}
                    </div>

                    <p
                        className="text-sm font-medium text-center transition"
                        style={{ color: hovered ? skill.color : "#c084fc" }}
                    >
                        {skill.name}
                    </p>
                </div>
            </a>
        </Tilt>
    );
};

/* ------------------ MAIN COMPONENT ------------------ */
const Skills = () => {
    return (
        <section id="skills" className="text-white pt-20 pb-24 bg-[#0d0d1f]">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-16">
                My <span className="text-cyan-300">Skills</span>
            </h1>

            <div className="flex justify-center">
                <div className="w-full max-w-6xl">
                    {/* GRID → Mobile & Tablet */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 xl:hidden px-4">
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>

                    {/* PYRAMID → Desktop Only */}
                    <div className="hidden xl:flex flex-col items-center gap-10">
                        {rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex justify-center gap-12 xl:gap-16"
                            >
                                {row.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
