// const services = [
//     {
//         title: "Full Stack Web Apps",
//         desc: "Scalable MERN applications with authentication, APIs, and database design."
//     },
//     {
//         title: "AI Integration",
//         desc: "AI-powered features like chat assistants and automation systems."
//     },
//     {
//         title: "Frontend UI/UX",
//         desc: "Modern, responsive UI with smooth animations and clean design."
//     }
// ];

// const Services = () => {
//     return (
//         <div className="py-24 px-6 bg-black text-white text-center">

//             <h2 className="text-4xl font-bold mb-12">What I Build</h2>

//             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//                 {services.map((item, i) => (
//                     <div
//                         key={i}
//                         className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500 transition"
//                     >
//                         <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//                         <p className="text-gray-400 text-sm">{item.desc}</p>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     );
// };

// export default Services;


















import { motion } from "framer-motion";

const services = [
    {
        title: "Full Stack Web Apps",
        desc: "Scalable MERN applications with authentication, APIs, and database design."
    },
    {
        title: "AI Integration",
        desc: "AI-powered features like chat assistants and automation systems."
    },
    {
        title: "Frontend UI/UX",
        desc: "Modern, responsive UI with smooth animations and clean design."
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

const Services = () => {
    return (
        <div className="relative py-28 px-6 text-white text-center overflow-hidden">


            <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-black to-[#000a1a]" />


            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />


            <div className="absolute top-[-160px] left-[-120px] w-[600px] h-[600px] bg-purple-600/25 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-160px] right-[-120px] w-[600px] h-[600px] bg-blue-600/25 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full animate-pulse" />


            <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />


            <div className="absolute inset-0">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/10 rounded-full animate-pulse"
                        style={{
                            // eslint-disable-next-line react-hooks/purity
                            top: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
                            left: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
                            animationDuration: `${2 + Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>


            <div className="relative z-10">


                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-14"
                >
                    What I Build
                </motion.h2>


                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >

                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{
                                scale: 1.05,
                                y: -12,
                            }}
                            transition={{ type: "spring", stiffness: 150 }}
                            className="relative group"
                        >


                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition" />


                            <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">

                                <h3 className="text-xl font-semibold mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </motion.div>

            </div>

        </div>
    );
};

export default Services;