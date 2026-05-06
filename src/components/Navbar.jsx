import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" }
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };



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
                </div>
            )}
        </div>
    );
};

export default Navbar;