import { motion } from "framer-motion";

function Experience() {
  const experiences = [];

  return (
    <section
      id="experience"
      className="
      bg-white text-gray-900 
      dark:bg-black dark:text-white 
      py-20 px-6 transition-colors duration-300
    "
    >
      {/* 🔹 Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Experience
      </h2>

      {/* 🟡 No Experience CTA */}
      {experiences.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 💬 Message */}
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Actively seeking MERN Stack Developer opportunities 🚀
          </p>

          {/* 📄 Resume Button */}
          <motion.a
            href="/Shivani_Sharma_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="
            inline-block 
            bg-gradient-to-r from-blue-500 to-indigo-500 
            px-6 py-3 rounded-full text-white font-medium 
            shadow-lg hover:shadow-blue-500/30
          "
          >
            Download CV
          </motion.a>

          {/* 📞 Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="
            ml-4 inline-block 
            border border-blue-500 
            px-6 py-3 rounded-full 
            text-blue-500 dark:text-blue-400 
            hover:bg-blue-500 hover:text-white 
            transition
          "
          >
            Contact Me
          </motion.a>
        </motion.div>
      )}
    </section>
  );
}

export default Experience;