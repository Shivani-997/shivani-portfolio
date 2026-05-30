import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaExternalLinkAlt } from "react-icons/fa";
import oexCert from "../assets/oex-tech.jpg";

function Achievements() {
  const achievements = [
    {
      title: "AI Tools Training",
      issuer: "OEX Tech Solution",
      date: "2025",
      description: "Effectively used advanced AI tools.",
      link: oexCert,
      icon: <FaMedal />,
    },
    {
      title: "Web Development",
      issuer: "Apna College",
      date: "2024",
      description: "Learn MERN Stack.",
      link: "",
      icon: <FaTrophy />,
    },
    {
      title: "Gen AI Powered Data Analytics Job Simulation",
      issuer: "Tata Consultancy Services",
      date: "2024",
      description: "Mastered core JavaScript concepts and async programming.",
      link: "",
      icon: <FaMedal />,
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="achievements"
      className="
      bg-white text-gray-900 
      dark:bg-black dark:text-white 
      py-20 px-6 transition-colors duration-300
    "
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Achievements
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            transition={{ duration: 0.5 }}
            className="
            bg-gray-100 dark:bg-gray-900 
            border border-yellow-500/30 
            p-6 rounded-xl shadow-lg 
            hover:scale-105 transition duration-300
          "
          >
            {/* 🏆 Icon */}
            <div className="text-yellow-500 dark:text-yellow-400 text-3xl mb-4">
              {item.icon}
            </div>

            {/* 📌 Title */}
            <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
              {item.title}
            </h3>

            {/* 🏢 Issuer */}
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.issuer}
            </p>

            {/* 📅 Date */}
            <p className="text-gray-500 dark:text-gray-500 text-xs mb-3">
              {item.date}
            </p>

            {/* 📝 Description */}
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {item.description}
            </p>

            {/* 🔗 Verify Link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-yellow-600 dark:text-yellow-400 
                text-sm flex items-center gap-2 
                hover:underline
              "
              >
                Verify <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Achievements;