import { motion } from "framer-motion";

const projects = [
    {
        title: "Multi-Tenant SaaS App",
        desc: "Real-time MERN app with multi-user system and scalable backend architecture.",
        tech: ["MongoDB", "Express", "React", "Node"],
        image: "https://images.openai.com/static-rsc-4/_bVlwHwhgJgqboei6S5JlrRJmI-m71y7aXlAd1jwvbp53ZsvIECWfbrv6ZBeEypAIGSN9qV2AEg9Cqafid7nU7ZhSCbMXil8DO-Rj3b1GF4KWTHzZoQkO5oX1CI0OmsbhugSmK3qoMAVZSCHRwXrAFVOKXBA0bze96HK0zd-HiAyOCywZf4_NMdyIe6-uetB?purpose=fullsize",

        github: "https://github.com/pr743/task-app",
        backend: "https://github.com/pr743/full-stack-project-3-using-backend-muti-task",

        live: "https://task-app-lac-one.vercel.app/",
    },
    {
        title: "Movie App",
        desc: "MERN app with API integration, YouTube trailers & dynamic UI.",
        tech: ["React", "API", "Cloudinary"],
        image: "https://images.openai.com/static-rsc-4/XQBUkMLfXKPw2b1yR6NwpCA2uSU4b90iRmcJgdUCWvLFDNNi-fxj2rOGj3PAqBNM9gffsXsi3YOmiijws9Y_QfFoclSK6VP-e27uw8p8t0vHS8fgSvXmopmWADuEZqQ2UuQJabaaOElmyoeosA2ceeurHcWgX27ypj3ffcx5zDQDgeIQxmFqK56JC15wf7AT?purpose=fullsize",
        github: "https://github.com/pr743/movie-app",
        backend: "https://github.com/pr743/full-stack-project-4-using-backend-movie-app",

        live: "https://movie-app-teal-tau.vercel.app/login",
    },
    {
        title: "E-commerce Backend",
        desc: "Product, order & auth system with EJS and Node.js.",
        tech: ["Node", "Express", "MongoDB"],
        image: "https://images.openai.com/static-rsc-4/RCyun8SE9pUcUR6WizFtw6Tk0eXd8jAdD-JB3i466bj_4jHRMNpGsrBEqlt4Tca_RV4rePVLH8-a_FL0IDFC4NnzIPglOKKUxTUADYa3ShKwJsRouFnSV0Tl1j16uUw4irOvcR0l0H1OM8xqeFX0K0lzXSBjPhKah2BisomCgpRgHZP9jyzbFfC7AJ126OaV?purpose=fullsize",
        github: "https://github.com/pr743/red-and-white-file-in-backend-7",
        live: "https://red-and-white-file-in-backend-7.onrender.com/",
    },
    {
        title: "Starbucks Clone",
        desc: "Responsive UI clone with modern frontend design.",
        tech: ["React", "Tailwind"],
        image: "https://images.openai.com/static-rsc-4/oshHDmCkiaJLgGvDihXRQCcXRJ56vFe1JvWVML0YCthc1mGkMQG7LhJgnknFFFnf85VvVzfORWUiaChLBc1KwVQTkEdgxkMhqV_nJoz7WDLeYLJ8_xglj9-jXsfQM1jB4NK414lbQeZf881IAo2qJ44yEf-2xyCwiCWSQAPeQ6W_h5ehMz3n7xiLemW7xuDY?purpose=fullsize",
        github: "https://github.com/pr743/red-and-white-using-project-4",
        live: "https://red-and-white-using-project-4.vercel.app/",
    },

    {
        title: "Quiz App",
        desc: "Interactive quiz application with score tracking and dynamic questions.",
        tech: ["React", "State Management"],
        image: "https://images.openai.com/static-rsc-4/gqvRyq7bH_5c9b_uV4NZ-xG-SXtJIkHCaytk5INu2Dln3WJDJXqpjM3_p-QyzVXLnkQOm48jD776kC1W81S_hyl-zDnsEQ1UiKYL9g9S2Wty4BK0XLJeVEA0NWI2v12-xEMNMFSagh1KprziwCz7cCtPs9ScQhkDkZ4SoV_wjs13wtRt67YmHdQY5SrPNWOW?purpose=fullsize",
        github: "https://github.com/pr743/red-and-white-using-project-7",
        live: "https://red-and-white-using-project-7.vercel.app",
    },

    {
        title: "Blog API",
        desc: "Backend blog system with CRUD operations and server-side rendering using EJS.",
        tech: ["Node", "Express", "EJS", "MongoDB"],
        image: "https://images.openai.com/static-rsc-4/PNHlZQHaZw0pXU4e3_oN_GWqhIkrEQpCfaRX-FRt5i_QiI2iwd9V38JDUcm5z5Jmf9YTLFn_BbV1I0TLVjNNfmSvxTdSJlGkN5npje5efVt0v59yM87z1FwitQSa8mwlFGvsUcTtXv-NqhhOA8PxotWcgXcM4cy1w5YsCj9rZpdEA8D-ne6uDp1ZBThMYOW-?purpose=fullsize",
        github: "https://github.com/pr743/red-and-white-file-in-backend-4",
        live: "https://red-and-white-file-in-backend-4.onrender.com",
    },


];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 70, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 14,
        },
    },
};

export default function Projects() {
    return (
        <div className="relative py-28 px-6 bg-black text-white overflow-hidden">


            <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-black to-[#000814]" />
            <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
            <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />


            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center mb-6 relative z-10"
            >
                Featured Projects
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-center mb-16 max-w-xl mx-auto relative z-10"
            >
                Real-world MERN applications with scalable architecture & UI focus.
            </motion.p>


            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10"
            >
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{
                            y: -15,
                            rotateX: 6,
                            rotateY: -6,
                            scale: 1.03,
                        }}
                        className="group relative perspective-[1000px]"
                    >


                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition" />


                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transform-gpu">


                            <div className="relative overflow-hidden">

                                <motion.img
                                    src={p.image}
                                    className="w-full h-64 object-cover"
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.6 }}
                                />


                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000" />

                            </div>


                            <div className="p-6">

                                <h3 className="text-xl font-semibold mb-2">
                                    {p.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4">
                                    {p.desc}
                                </p>


                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-white/10 px-2 py-1 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>


                                <div className="flex gap-3 flex-wrap">

                                    <a
                                        href={p.github}
                                        className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                                    >
                                        Code
                                    </a>

                                    {p.live && (
                                        <a
                                            href={p.live}
                                            className="text-sm bg-purple-600 px-3 py-1 rounded hover:scale-105 transition"
                                        >
                                            Live
                                        </a>
                                    )}

                                </div>

                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}