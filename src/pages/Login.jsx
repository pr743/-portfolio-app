import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

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
            const res = await API.post("/auth/send-link", { email });

            setMessage(res.data.message || "Check your email 🚀");
        } catch (err) {
            console.log(err);
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
    };

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
            setMessage("GitHub login failed");
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8"
            >

                <h1 className="text-2xl font-bold text-center mb-2">
                    Welcome 👋
                </h1>

                <p className="text-gray-400 text-center mb-6">
                    Login to your account
                </p>

                {/* Social login */}
                <div className="flex flex-col gap-3 mb-6">
                    <button onClick={handleGoogleLogin} className="border py-3 rounded">
                        <FaGoogle /> Continue with Google
                    </button>

                    <button onClick={handleGithubLogin} className="border py-3 rounded">
                        <FaGithub /> Continue with GitHub
                    </button>
                </div>

                {/* Email login */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black border px-4 py-3 rounded"
                        placeholder="Email address"
                    />

                    <div
                        onClick={() => setChecked(!checked)}
                        className={`p-3 border rounded cursor-pointer ${checked ? "border-green-500" : "border-gray-700"
                            }`}
                    >
                        {checked ? "✓ Verified" : "I'm not a robot"}
                    </div>

                    <button className="bg-purple-600 py-3 rounded">
                        {loading ? "Sending..." : "Send Magic Link"}
                    </button>

                </form>

                {message && (
                    <p className="text-sm text-center mt-4 text-gray-400">
                        {message}
                    </p>
                )}

            </motion.div>
        </div>
    );
};

export default Login;