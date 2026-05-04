import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import API from "../api/api";

const Footer = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

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

        } catch (err) {
            console.log("ERROR:", err.response?.data || err.message);

            setSuccess(
                err.response?.data?.message || "Failed to send message"
            );
        }

        setLoading(false);
    };

    return (
        <div className="bg-black text-white pt-24 pb-10 px-6 border-t border-gray-800">


            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


                <div>
                    <h2 className="text-4xl font-bold mb-4">
                        Let’s Build Something 🚀
                    </h2>

                    <p className="text-gray-400 mb-4">
                        MERN Stack Developer building scalable apps & AI-powered systems.
                    </p>

                    <p className="text-gray-500 text-sm mb-6">
                        📍 India | 🟢 Available for Work
                    </p>


                    <div className="flex gap-5 text-2xl mb-6">
                        <a href="https://github.com/pr743" target="_blank">
                            <FaGithub className="hover:text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <FaLinkedin className="hover:text-blue-400" />
                        </a>
                        <a href="#">
                            <FaEnvelope className="hover:text-purple-400" />
                        </a>
                    </div>


                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        <FaDownload />
                        Download Resume
                    </a>
                </div>


                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg outline-none focus:border-purple-500"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && (
                        <p className="text-sm text-green-400">{success}</p>
                    )}

                </form>

            </div>


            <div className="max-w-6xl mx-auto mt-16 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                <a href="#home" className="hover:text-white">Home</a>
                <a href="#projects" className="hover:text-white">Projects</a>
                <a href="#skills" className="hover:text-white">Skills</a>
                <a href="#contact" className="hover:text-white">Contact</a>
            </div>


            <div className="text-center text-gray-500 mt-10 text-sm">
                © {new Date().getFullYear()} Prince Mungra — Built with MERN 🚀
            </div>

        </div>
    );
};

export default Footer;