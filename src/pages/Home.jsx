// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";
// import AIChat from "../components/AIChat";
// import Footer from "../components/Footer";

// const Home = () => {
//     return (
//         <div className="bg-black text-white min-h-screen">


//             <Navbar />


//             <section id="home">
//                 <Hero />
//             </section>


//             <section id="about" className="py-20">
//                 <About />
//             </section>


//             <section className="py-20 bg-gray-950">
//                 <Services />
//             </section>


//             <section id="skills" className="py-20">
//                 <Skills />
//             </section>


//             <section id="projects" className="py-20 bg-gray-950">
//                 <Projects />
//             </section>


//             <section id="ai" className="py-20">
//                 <AIChat />
//             </section>


//             <section id="contact">
//                 <Footer />
//             </section>

//         </div>
//     );
// };

// export default Home;















import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AIChat from "../components/AIChat";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Section = ({ children, className = "" }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default function Home() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <div className="relative min-h-screen text-white overflow-x-hidden">

            {/* 🔥 SCROLL BAR */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[999]
                bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
            />

            {/* 🌌 BACKGROUND */}
            <div className="fixed inset-0 -z-10 bg-[#05010a]" />
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-purple-600/25 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-blue-600/25 blur-[160px] rounded-full animate-pulse" />
            </div>

            <Navbar />


            <Section>
                <Hero />
            </Section>


            <Section className="py-20 bg-black/40">
                <About />
            </Section>


            <Section className="py-20 bg-black/60">
                <Services />
            </Section>


            <Section className="py-20 bg-black">
                <Skills />
            </Section>


            <Section className="py-16 bg-black/60">
                <Projects />
            </Section>


            <Section className="py-20 bg-black/80">
                <AIChat />
            </Section>


            <Section className="py-16 bg-black/60">

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <Footer />
            </Section>

        </div>
    );
}