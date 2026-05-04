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
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "React.js", icon: <SiReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-300" },

    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Git", icon: <SiGit />, color: "text-orange-500" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
    { name: "CSS", icon: <DiCss3 />, color: "text-blue-500" },
    { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
];

const Skills = () => {
    return (
        <div className="py-20 px-6 bg-black text-white text-center">


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
            >
                My Tech Stack
            </motion.h2>

            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                I work with modern technologies to build scalable, high-performance
                applications with clean UI and strong backend systems.
            </p>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition"
                    >
                        <div className={`text-4xl mb-3 ${skill.color}`}>
                            {skill.icon}
                        </div>

                        <p className="text-sm">{skill.name}</p>
                    </motion.div>
                ))}

            </div>
        </div>
    );
};

export default Skills;