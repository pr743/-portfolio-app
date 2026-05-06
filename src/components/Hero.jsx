import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiOpenai } from "react-icons/si";

const roles = ["MERN Developer", "Full Stack Engineer"];

export default function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [char, setChar] = useState(0);
    const [deleting, setDeleting] = useState(false);


    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-300, 300], [10, -10]);
    const rotateY = useTransform(x, [-300, 300], [-10, 10]);

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX - window.innerWidth / 2);
            y.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);


    useEffect(() => {
        const current = roles[index];
        let timeout;

        if (!deleting && char < current.length) {
            timeout = setTimeout(() => {
                setText((p) => p + current[char]);
                setChar(char + 1);
            }, 60);
        } else if (!deleting && char === current.length) {
            timeout = setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && char > 0) {
            timeout = setTimeout(() => {
                setText((p) => p.slice(0, -1));
                setChar(char - 1);
            }, 30);
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDeleting(false);
            setIndex((p) => (p + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [char, deleting, index]);

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">


            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0014] via-black to-[#001022]" />


            <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full animate-pulse" />


            <motion.div
                className="absolute w-[350px] h-[350px] bg-purple-500/20 blur-3xl rounded-full"
                style={{
                    x,
                    y,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />


            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-20 left-10 text-blue-400 text-4xl"
                >
                    <FaReact />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 25, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute bottom-32 left-20 text-green-500 text-4xl"
                >
                    <FaNodeJs />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute top-1/3 right-16 text-green-400 text-4xl"
                >
                    <SiMongodb />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5 }}
                    className="absolute bottom-20 right-20 text-purple-400 text-4xl"
                >
                    <SiOpenai />
                </motion.div>
            </div>


            <motion.div
                style={{ rotateX, rotateY }}
                whileHover={{ scale: 1.03 }}
                className="relative z-10 w-full max-w-2xl text-center
                bg-white/5 backdrop-blur-xl border border-white/10
                rounded-2xl p-10 shadow-[0_0_100px_rgba(168,85,247,0.15)]"
            >


                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 relative">
                    <span className="relative z-10">Prince Mungra</span>


                    <span className="absolute inset-0 blur-2xl text-purple-500 opacity-60 animate-pulse">
                        Prince Mungra
                    </span>
                </h1>


                <h2 className="text-xl md:text-2xl text-purple-400 h-[40px]">
                    {text}
                    <span className="animate-pulse">|</span>
                </h2>

                <p className="text-gray-300 mt-4 mb-8">
                    I build real-world MERN applications with AI features.
                    Focused on performance, scalability, and UX.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

                    <a
                        href="#projects"
                        className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
                    >
                        🚀 View Projects
                    </a>

                </div>


                <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300">

                    {["React", "Node.js", "MongoDB", "AI"].map((t, i) => (
                        <span
                            key={i}
                            className="bg-white/10 px-3 py-1 rounded-full border border-white/10"
                        >
                            {t}
                        </span>
                    ))}

                </div>

            </motion.div>

        </div>
    );
}