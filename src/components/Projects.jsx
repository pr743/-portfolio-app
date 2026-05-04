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

const Projects = () => {
    return (
        <div className="py-24 px-6 bg-black text-white">


            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
                Featured Projects
            </motion.h2>

            <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
                A collection of real-world applications built with modern technologies.
            </p>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="relative group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-lg"
                    >


                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>


                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>


                        <div className="absolute bottom-0 p-6">

                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                                {project.desc}
                            </p>


                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-white/10 px-2 py-1 rounded backdrop-blur"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 flex-wrap">

                                <a href={project.github} target="_blank"
                                    className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black">
                                    Code
                                </a>


                                {project.backend && (
                                    <a href={project.backend} target="_blank"
                                        className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black">
                                        Backend
                                    </a>
                                )}


                                {project.live && (
                                    <a href={project.live} target="_blank"
                                        className="text-sm bg-purple-600 px-3 py-1 rounded">
                                        Live
                                    </a>
                                )}

                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
};


export default Projects;















