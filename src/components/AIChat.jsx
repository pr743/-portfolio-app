import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API from "../api/api";

const AIChat = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "ai",
            text: "Hi 👋 I'm Prince's AI assistant. Ask me about my projects!"
        }
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const text = input.trim();

        setMessages(prev => [...prev, { role: "user", text }]);
        setInput("");
        setLoading(true);

        try {
            const res = await API.post("/ai/chat", {
                message: text
            });

            const reply =
                res.data?.reply ||
                res.data?.message ||
                "⚠️ AI did not respond properly";

            setMessages(prev => [
                ...prev,
                { role: "ai", text: reply }
            ]);

        } catch (err) {
            console.log("Frontend Error:", err);

            setMessages(prev => [
                ...prev,
                { role: "ai", text: "⚠️ Server error. Try again." }
            ]);
        }

        setLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 bg-purple-600 px-5 py-3 rounded-full shadow-lg z-50 hover:scale-110 transition"
            >
                🤖
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-20 right-6 w-80 bg-gray-900 border border-gray-800 rounded-2xl flex flex-col z-50"
                    >
                        <div className="p-4 border-b border-gray-800 font-semibold">
                            AI Assistant
                        </div>

                        <div className="flex-1 p-4 space-y-3 max-h-80 overflow-y-auto">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`text-sm px-3 py-2 rounded-lg max-w-[75%] ${msg.role === "user"
                                            ? "ml-auto bg-purple-600"
                                            : "bg-gray-800"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}

                            {loading && (
                                <p className="text-gray-400 text-xs">
                                    AI is typing...
                                </p>
                            )}

                            <div ref={bottomRef} />
                        </div>

                        <div className="p-3 border-t border-gray-800 flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") sendMessage();
                                }}
                                disabled={loading}
                                className="flex-1 bg-black border border-gray-700 rounded px-3 py-2 text-sm"
                                placeholder="Ask about projects..."
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className="bg-purple-600 px-3 rounded hover:bg-purple-700"
                            >
                                ➤
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChat;