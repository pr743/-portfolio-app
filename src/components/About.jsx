import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const About = () => {
    return (
        <div className="relative py-28 px-6 bg-black text-white overflow-hidden">




            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-black to-[#000814]" />


            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />


            <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-600/30 blur-[140px] rounded-full animate-pulse" />
            <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />


            <div className="absolute inset-0">
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full animate-pulse"
                        style={{
                            // eslint-disable-next-line react-hooks/purity
                            top: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
                            left: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>


            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative z-10 max-w-4xl mx-auto text-center"
            >


                <motion.h2
                    variants={item}
                    className="text-4xl md:text-5xl font-bold mb-10"
                >
                    About Me
                </motion.h2>


                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="relative bg-white/5 backdrop-blur-xl border border-white/10 
                    rounded-2xl p-8 md:p-10 shadow-2xl"
                >


                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-40" />

                    <div className="relative z-10">


                        <motion.p
                            variants={item}
                            className="text-gray-300 text-lg leading-relaxed"
                        >
                            I'm{" "}
                            <span className="text-white font-semibold">
                                Prince Mungra
                            </span>, a MERN Stack Developer focused on building
                            real-world applications with scalable backend systems and modern UI.
                        </motion.p>


                        <motion.p
                            variants={item}
                            className="text-gray-400 mt-6 leading-relaxed"
                        >
                            I specialize in creating full-stack products, integrating AI,
                            and solving real business problems through code.
                        </motion.p>


                        <motion.div
                            variants={item}
                            className="mt-8 text-purple-300 font-medium"
                        >
                            My goal is simple — build products that are fast, useful, and impactful.
                        </motion.div>


                        <motion.div
                            variants={item}
                            className="flex flex-wrap justify-center gap-2 mt-8 text-xs text-gray-300"
                        >
                            {["React", "Node.js", "MongoDB", "AI"].map((t, i) => (
                                <span
                                    key={i}
                                    className="bg-white/10 px-3 py-1 rounded-full border border-white/10"
                                >
                                    {t}
                                </span>
                            ))}
                        </motion.div>

                    </div>

                </motion.div>

            </motion.div>

        </div>
    );
};

export default About;