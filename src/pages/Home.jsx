import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AIChat from "../components/AIChat";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Section = ({ id, children, className = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative w-full ${className}`}
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
    });

    return (
        <div className="relative text-white overflow-x-hidden">


            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[999]
                bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
            />


            <div className="fixed inset-0 -z-10 bg-[#05010a]" />

            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-purple-600/20 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full animate-pulse" />
            </div>

            <Navbar />


            <Section id="home">
                <Hero />
            </Section>


            <Section id="about" className="py-24">
                <About />
            </Section>


            <Section id="services" className="py-24 bg-white/5 backdrop-blur-sm">
                <Services />
            </Section>


            <Section id="skills" className="py-24">
                <Skills />
            </Section>


            <Section id="projects" className="py-24">
                <Projects />
            </Section>


            <Section id="ai" className="py-24">
                <AIChat />
            </Section>


            <Section id="contact" className="py-24">
                <Footer />
            </Section>

        </div>
    );
}


