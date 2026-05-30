import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import gsap from "gsap";
import ThreeBackground from "./ThreeBackground";

function Hero() {
  const textRef = useRef();

  useEffect(() => {
    //  GSAP stagger animation
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden 
      bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >
      {/*  Three.js Background */}
      <ThreeBackground />

      {/*  Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {/* Name */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          Hi, I'm Shivani 👋
        </motion.h1>

        {/* Typing Role */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-red-500 mb-4">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1500,
              "Frontend Developer",
              1500,
              "React Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* Description */}
        <p className="text-gray-900 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
          I'm a 4th year Computer Science student passionate about building
          scalable web applications using the MERN stack. I enjoy solving
          real-world problems and creating clean user interfaces.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* View Projects */}
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.08 }}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            View Projects ↓
          </motion.button>

          {/* Download CV */}
          <a href="/Shivani_Sharma_resume.pdf" download>
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </motion.button>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;