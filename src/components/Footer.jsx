import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <>
      {/* 🔻 Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
        bg-white text-gray-900 
        dark:bg-black dark:text-white 
        py-10 px-6 
        border-t border-gray-300 dark:border-gray-800 
        transition-colors duration-300
      "
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          {/* 🧑 Name */}
          <h2 className="text-xl font-bold text-blue-500 dark:text-blue-400">
            Shivani Portfolio
          </h2>

          {/* 🔗 Nav Links */}
          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          {/* 📧 Email */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            matrucareai@gmail.com
          </p>

        </div>

        {/* © Copyright */}
        <div className="text-center text-gray-500 dark:text-gray-500 text-sm mt-6">
          © {year} Shivani. All rights reserved.
        </div>
      </motion.footer>

      {/* 🔝 Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="
          fixed bottom-6 right-6 
          bg-blue-500 hover:bg-blue-600 
          text-white p-3 rounded-full 
          shadow-lg hover:shadow-xl 
          transition duration-300
        "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Footer;