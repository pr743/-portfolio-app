import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="py-24 px-6 bg-black text-white">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    About Me
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                    I'm <span className="text-white font-semibold">Prince Mungra</span>,
                    a MERN Stack Developer focused on building real-world applications
                    with scalable backend systems and modern UI.

                    I specialize in creating full-stack products, integrating AI,
                    and solving real business problems through code.
                </p>

                <p className="text-gray-500 mt-6">
                    My goal is simple — build products that are fast, useful, and impactful.
                </p>
            </motion.div>

        </div>
    );
};

export default About;