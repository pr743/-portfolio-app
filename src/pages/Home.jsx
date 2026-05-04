import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AIChat from "../components/AIChat";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen">


            <Navbar />


            <section id="home">
                <Hero />
            </section>


            <section id="about" className="py-20">
                <About />
            </section>


            <section className="py-20 bg-gray-950">
                <Services />
            </section>


            <section id="skills" className="py-20">
                <Skills />
            </section>


            <section id="projects" className="py-20 bg-gray-950">
                <Projects />
            </section>


            <section id="ai" className="py-20">
                <AIChat />
            </section>


            <section id="contact">
                <Footer />
            </section>

        </div>
    );
};

export default Home;