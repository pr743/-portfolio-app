import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [checked, setChecked] = useState(false);



    const { setUser } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!checked) {
            setMessage("Please verify you're not a robot 🤖");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("http://localhost:7000/api/auth/send-link", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            setMessage(data.message || "Check your email for login link 🚀");
        } catch {
            setMessage("Something went wrong");
        }

        setLoading(false);
    };



    const handleGoogleLogin = async () => {
        try {

            const result = await signInWithPopup(auth, googleProvider);


            setUser({
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL
            });

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }


    const handleGithubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);

            setUser({
                name: result.user.displayName || "Github User",
                email: result.user.email,
                photo: result.user.photoURL
            });
            navigate("/");

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">


            <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-100px] animate-pulse" />
            <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full bottom-[-100px] animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl"
            >


                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold mb-2 text-center"
                >
                    Welcome 👋
                </motion.h1>

                <p className="text-gray-400 text-center mb-6">
                    Login to your account
                </p>


                <div className="flex flex-col gap-3 mb-6">
                    <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-lg hover:bg-gray-800 transition">
                        <FaGoogle /> Continue with Google
                    </button>

                    <button onClick={handleGithubLogin} className="flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-lg hover:bg-gray-800 transition">
                        <FaGithub /> Continue with GitHub
                    </button>


                </div>


                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-gray-700"></div>
                    <span className="text-gray-500 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-700"></div>
                </div>


                <form onSubmit={handleSubmit} className="flex flex-col gap-4">


                    <div className="relative">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black border border-gray-700 px-4 pt-5 pb-2 rounded-lg outline-none focus:border-purple-500 peer"
                        />
                        <label className="absolute left-4 top-2 text-gray-400 text-xs peer-focus:text-purple-400 transition">
                            Email address
                        </label>
                    </div>


                    <div
                        onClick={() => setChecked(!checked)}
                        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
                        ${checked ? "border-green-500 bg-green-500/10" : "border-gray-700"}`}
                    >
                        <div className={`w-5 h-5 border rounded flex items-center justify-center
                            ${checked ? "bg-green-500 text-black" : "border-gray-500"}`}>
                            {checked && "✓"}
                        </div>
                        <span className="text-sm text-gray-300">
                            I'm not a robot
                        </span>
                    </div>


                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                        {loading ? "Sending..." : "Send verification email"}
                    </motion.button>

                </form>


                {message && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-gray-400 mt-4 text-center"
                    >
                        {message}
                    </motion.p>
                )}

            </motion.div>
        </div>
    );
};

export default Login;























