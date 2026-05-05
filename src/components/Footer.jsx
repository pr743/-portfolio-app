import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import API from "../api/api";

export default function Footer() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            const res = await API.post("/contact/send", form);
            setSuccess(res.data?.message || "Message sent!");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setSuccess("Failed to send message");
        }

        setLoading(false);
    };

    return (
        <div className="relative bg-black text-white pt-28 pb-14 px-6 overflow-hidden">


            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,255,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(0,150,255,0.15),transparent_40%)]" />


            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-[200%] h-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12"
                    animate={{ x: ["-50%", "50%"] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />
            </div>


            <div className="absolute inset-0">
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/20 blur-sm"
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, -20, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            // eslint-disable-next-line react-hooks/purity
                            duration: 6 + Math.random() * 5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        style={{
                            // eslint-disable-next-line react-hooks/purity
                            top: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Let’s Build Something 🚀
                    </h2>

                    <p className="text-gray-400 mb-4">
                        MERN Stack Developer building scalable apps & AI systems.
                    </p>

                    <p className="text-gray-500 text-sm mb-6">
                        📍 India | 🟢 Available for Work
                    </p>


                    <div className="flex gap-5 text-2xl mb-6">
                        {[
                            { icon: <FaGithub />, link: "https://github.com/pr743" },
                            { icon: <FaLinkedin />, link: "#" },
                            { icon: <FaEnvelope />, link: "#" }
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="text-gray-300 hover:text-white transition"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold shadow-lg"
                    >
                        <FaDownload />
                        Download Resume
                    </motion.a>
                </motion.div>


                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                        opacity: { duration: 0.6 },
                        x: { duration: 0.6 }
                    }}
                    className="relative flex flex-col gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
                >

                    <input
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        className="bg-black/40 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    />

                    <input
                        name="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        className="bg-black/40 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message..."
                        rows="4"
                        onChange={handleChange}
                        className="bg-black/40 border border-white/10 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-lg font-semibold shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                    {success && (
                        <p className="text-sm text-green-400">{success}</p>
                    )}
                </motion.form>
            </div>


            <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                {["Home", "Projects", "Skills", "Contact"].map((item, i) => (
                    <motion.a
                        key={i}
                        href={`#${item.toLowerCase()}`}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="hover:text-white"
                    >
                        {item}
                    </motion.a>
                ))}
            </div>


            <div className="relative z-10 text-center text-gray-500 mt-10 text-sm">
                © {new Date().getFullYear()} Prince Mungra — Built with MERN 🚀
            </div>

        </div>
    );
}