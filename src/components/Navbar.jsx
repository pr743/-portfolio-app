import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import API from "../api/api";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { user, loading, setUser } = useAuth();
    const navigate = useNavigate();
    const dropdownRef = useRef();

    const links = [
        { name: "Projects", id: "projects" },
        { name: "AI", id: "ai" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" }
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    const handleLogout = async () => {
        try {

            await API.post("/auth/logout");


            await signOut(auth);


            setUser(null);

            navigate("/login");

        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

            <div className="flex justify-between items-center px-6 md:px-10 py-4">


                <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollTo("home")}>
                    <span className="text-white">Prince</span>
                    <span className="text-purple-400">.dev</span>
                </h1>


                <div className="hidden md:flex items-center gap-8">

                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-gray-300 hover:text-white transition"
                        >
                            {link.name}
                        </button>
                    ))}

                    {!loading && (
                        <>
                            {user ? (
                                <div className="relative" ref={dropdownRef}>


                                    <div
                                        onClick={() => setDropdown(!dropdown)}
                                        className="w-9 h-9 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center text-sm font-bold text-white cursor-pointer border border-gray-600 hover:scale-110 transition"
                                    >
                                        {user.photo ? (
                                            <img
                                                src={user.photo}
                                                alt="profile"
                                                referrerPolicy="no-referrer"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            user.name?.charAt(0)?.toUpperCase()
                                        )}
                                    </div>


                                    {dropdown && (
                                        <div className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden">

                                            <div className="px-4 py-3 border-b border-gray-800">
                                                <p className="text-sm text-white">{user.name}</p>
                                                <p className="text-xs text-gray-400">{user.email}</p>
                                            </div>

                                            <button
                                                onClick={() => navigate("/")}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-800 text-sm"
                                            >
                                                Home
                                            </button>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 hover:bg-red-500/20 text-red-400 text-sm"
                                            >
                                                Logout
                                            </button>

                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => navigate("/login")}
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-semibold hover:scale-105 transition"
                                >
                                    Login
                                </button>
                            )}
                        </>
                    )}
                </div>


                <div className="md:hidden">
                    {open ? (
                        <X onClick={() => setOpen(false)} className="cursor-pointer" />
                    ) : (
                        <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
                    )}
                </div>
            </div>


            {open && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90 border-t border-gray-800">

                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-gray-300 text-lg"
                        >
                            {link.name}
                        </button>
                    ))}

                    {!loading && (
                        user ? (
                            <>
                                <span className="text-gray-300">{user.email}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 px-6 py-2 rounded"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-purple-500 px-6 py-2 rounded"
                            >
                                Login
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;