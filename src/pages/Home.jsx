import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Qualification from "../components/Qualification";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    // <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
          <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 space-y-16 md:space-y-24">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Experience />
        <Achievements />
        <Contact />
        {/* <Footer /> */}
      </main>
      <Footer />

    </div>
  );
}

export default Home;