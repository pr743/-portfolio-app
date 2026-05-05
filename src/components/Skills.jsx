import { motion } from "framer-motion";
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiTailwindcss,
    SiCloudinary,
    SiNextdotjs,
    SiGit,
    SiGithub,
    SiHtml5
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const skills = [
    {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-500"
    },
    {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-gray-300"
    },
    {
        name: "React.js",
        icon: <SiReact />,
        color: "text-blue-400"
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "text-green-400"
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "text-yellow-400"
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "text-cyan-400"
    },
    {
        name: "Cloudinary",
        icon: <SiCloudinary />,
        color: "text-blue-300"
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white"
    },
    {
        name: "Git",
        icon: <SiGit />,
        color: "text-orange-500"
    },
    {
        name: "GitHub",
        icon: <SiGithub />,
        color: "text-white"
    },
    {
        name: "CSS",
        icon: <DiCss3 />,
        color: "text-blue-500"
    },
    {
        name: "HTML",
        icon: <SiHtml5 />,
        color: "text-orange-500"
    },
];


const getTransform = (i, total) => {
    const angle = (360 / total) * i;
    return `rotateY(${angle}deg) translateZ(300px)`;
};

export default function Skills() {

    return (
        <div className="relative py-28 px-6 bg-black text-white text-center overflow-hidden">


            <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-black to-[#000814]" />
            <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-10 relative z-10"
            >
                My Tech Stack
            </motion.h2>


            <div className="relative flex justify-center items-center perspective-[1200px] h-[420px]">

                <motion.div
                    className="relative w-[220px] h-[220px]"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{ rotateY: 360 }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >

                    {skills.slice(0, 8).map((skill, i) => (
                        <div
                            key={i}
                            className="absolute w-[220px] h-[220px] flex flex-col items-center justify-center
                            bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
                            style={{
                                transform: getTransform(i, 8),
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <div className={`text-4xl mb-3 ${skill.color}`}>
                                {skill.icon}
                            </div>

                            <p className="text-sm text-white/80">
                                {skill.name}
                            </p>
                        </div>
                    ))}

                </motion.div>
            </div>


            <div className="mt-20">

                <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                    Switch between interactive 3D wall view and clean grid experience.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.12, y: -8 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-40 transition" />

                            <div className="relative flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">

                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className={`text-4xl mb-3 ${skill.color}`}
                                >
                                    {skill.icon}
                                </motion.div>

                                <p className="text-sm text-gray-200">
                                    {skill.name}
                                </p>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>

        </div>
    );
}