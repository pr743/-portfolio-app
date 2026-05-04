import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["MERN Developer", "AI Builder", "Full Stack Engineer"];

const Hero = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(0);

    useEffect(() => {
        const current = roles[index];

        if (char < current.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + current[char]);
                setChar(char + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setText("");
                setChar(0);
                setIndex((prev) => (prev + 1) % roles.length);
            }, 1500);
            return () => clearTimeout(timeout);
        }
    }, [char, index]);

    return (
        <div
            id="home"
            className="relative flex flex-col justify-center items-center text-center min-h-screen px-6 overflow-hidden bg-black"
        >


            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 animate-pulse" />


            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />


            <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full bottom-[-100px]" />


            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-4 z-10"
            >
                Prince Mungra
            </motion.h1>

            <motion.h2
                className="text-2xl md:text-3xl text-purple-400 mb-4 h-[40px] z-10"
            >
                {text}
                <span className="animate-pulse">|</span>
            </motion.h2>

            <motion.p
                className="text-gray-400 max-w-xl mb-8 leading-relaxed z-10"
            >
                I build real-world MERN applications with AI features.
                Focused on performance, scalability, and user experience.
            </motion.p>


            <div className="flex gap-4 z-10">
                <a
                    href="#ai"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
                >
                    🤖 Talk to AI
                </a>

                <a
                    href="#projects"
                    className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    🚀 View Projects
                </a>
            </div>


            <div className="absolute bottom-10 flex gap-3 text-xs text-gray-400 z-10">
                <span className="bg-white/10 px-3 py-1 rounded backdrop-blur">React</span>
                <span className="bg-white/10 px-3 py-1 rounded backdrop-blur">Node.js</span>
                <span className="bg-white/10 px-3 py-1 rounded backdrop-blur">MongoDB</span>
                <span className="bg-white/10 px-3 py-1 rounded backdrop-blur">AI</span>
            </div>

        </div>
    );
};

export default Hero;
