import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API from "../api/api";

export default function AIChat() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "ai", text: "Hi 👋 I'm your AI assistant. Ask anything!" }
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 200);
    }, [open]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const text = input.trim();
        setMessages((p) => [...p, { role: "user", text }]);
        setInput("");
        setLoading(true);

        try {
            const res = await API.post("/ai/chat", { message: text });

            const reply =
                res.data?.reply || "AI is thinking... 🤖";

            setTimeout(() => {
                setMessages((p) => [...p, { role: "ai", text: reply }]);
                setLoading(false);
            }, 700);

        } catch {
            setMessages((p) => [
                ...p,
                { role: "ai", text: "⚠️ Server error" }
            ]);
            setLoading(false);
        }
    };

    return (
        <>

            <motion.button
                onClick={() => setOpen(!open)}
                animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                        "0px 0px 0px rgba(168,85,247,0.3)",
                        "0px 0px 25px rgba(168,85,247,0.6)",
                        "0px 0px 0px rgba(168,85,247,0.3)",
                    ]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="fixed bottom-6 right-6 
                bg-gradient-to-r from-purple-600 to-blue-600 
                text-white px-5 py-3 rounded-full z-50"
            >
                🤖
            </motion.button>

            {/* 🌌 BACKDROP */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                            onClick={() => setOpen(false)}
                        />

                        {/* 💎 CHAT PANEL */}
                        <motion.div
                            initial={{ opacity: 0, y: 80, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 80, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="fixed bottom-20 right-6 w-80 
                            bg-white/10 backdrop-blur-2xl 
                            border border-white/10 
                            rounded-2xl overflow-hidden z-50"
                        >

                            {/* HEADER */}
                            <div className="p-4 bg-black/30 text-sm font-semibold">
                                AI Assistant 🤖
                            </div>

                            {/* MESSAGES */}
                            <div className="h-80 overflow-y-auto p-3 space-y-3">
                                {messages.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: m.role === "user" ? 50 : -50, scale: 0.95 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`text-sm px-3 py-2 rounded-xl max-w-[80%]
                                        ${m.role === "user"
                                                ? "ml-auto bg-purple-600"
                                                : "bg-white/10"
                                            }`}
                                    >
                                        {m.text}
                                    </motion.div>
                                ))}

                                {loading && (
                                    <motion.div
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        className="text-xs text-gray-400"
                                    >
                                        AI typing...
                                    </motion.div>
                                )}

                                <div ref={bottomRef} />
                            </div>

                            {/* INPUT */}
                            <div className="p-3 border-t border-white/10 flex gap-2">
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                    className="flex-1 bg-black/40 text-white px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Ask anything..."
                                />

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={sendMessage}
                                    className="bg-purple-600 px-3 rounded-lg"
                                >
                                    ➤
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
