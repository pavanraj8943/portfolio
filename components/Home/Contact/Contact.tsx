"use client";
import React, { useRef, useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const name = formData.get("from_name")?.toString().trim();
        const email = formData.get("from_email")?.toString().trim();
        const mobile = formData.get("mobile")?.toString().trim();
        const message = formData.get("message")?.toString().trim();

        if (!name || !email || !mobile || !message) {
            setStatus({ type: "error", message: "All fields are required." });
            return;
        }

        /* 
           NOTE: Providing a dummy service ID here as per reference code. 
           User needs to update this with their own EmailJS credentials.
        */
        sendForm(
            "service_o2yad8d",
            "template_bu8mcih",
            form.current,
            "Tfsh4B9WXJ5n-zj3N",
        )
            .then(() => {
                setStatus({ type: "success", message: "Message sent successfully." });
                form.current?.reset();
            })
            .catch((error: any) => {
                console.log(error);
                setStatus({
                    type: "error",
                    message: "Failed to send. Please try again.",
                });
            });
    };

    return (
        <div id="contact" className="pt-16 pb-16 bg-[#0d0d1f]">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* text content */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                        Schedule a call with me to see if I can help
                    </h1>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg">
                        Reach out to me today and let&apos;s discuss how I can help you achieve
                        your goals.
                    </p>
                    {/* info */}
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiPhone className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">+91 8943854587</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiEnvelope className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">
                                pavan.64j@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiMap className="w-9 h-9 text-cyan-300" />
                            <p className="text-xl font-bold text-gray-400">Kollam, Kerala</p>
                        </div>
                    </div>
                    {/* social icons */}
                    <div className="flex items-center mt-8 space-x-3">
                        <a
                            href="https://github.com/pavanraj8943"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-all duration-300"
                        >
                            <FaGithub className="text-white w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pavan-raj-831b99383/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-800 transition-all duration-300"
                        >
                            <FaLinkedinIn className="text-white w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/_pavan_._raj_?igsh=MWh1MnU3cWFnZ2VoOQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all duration-300"
                        >
                            <FaInstagram className="text-white w-6 h-6" />
                        </a>
                        <a
                            href="https://wa.me/8943854587"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-500 transition-all duration-300"
                        >
                            <FaWhatsapp className="text-white w-6 h-6" />
                        </a>
                    </div>
                </div>
                {/* form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="md:p-10 p-5 bg-[#131332] rounded-lg"
                >
                    {status && (
                        <div
                            className={`mb-4 px-4 py-2 rounded-md text-sm font-medium ${status.type === "success"
                                ? "text-emerald-300"
                                : "text-red-300 border"
                                }`}
                        >
                            {status.message}
                        </div>
                    )}
                    <input
                        name="from_name"
                        type="text"
                        placeholder="Name"
                        required
                        className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full focus:ring-2 focus:ring-cyan-500 transition-all"
                    />

                    <input
                        name="from_email"
                        type="email"
                        placeholder="Email Address"
                        required
                        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full focus:ring-2 focus:ring-cyan-500 transition-all"
                    />

                    <input
                        name="mobile"
                        type="text"
                        placeholder="Mobile Number"
                        required
                        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full focus:ring-2 focus:ring-cyan-500 transition-all"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full h-[10rem] focus:ring-2 focus:ring-cyan-500 transition-all"
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 text-white rounded-full w-full sm:w-auto"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
