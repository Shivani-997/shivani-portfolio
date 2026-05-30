import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import weatherImg from "../assets/weather-image.jpg";
import hospitalImg from "../assets/Hospital-management.avif";
import portfolioImg from "../assets/Portfolio-website.webp";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio website",
      category: "Web",
      image: portfolioImg,
      tech: ["MERN"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather App",
      category: "Web",
      image: weatherImg,
      tech: ["React", "API"],
      github: "https://github.com/Shivani-997/react-weather-app",
      live: "#",
    },
    {
      title: "Hospital Management Backend System",
      category: "Web",
      image: hospitalImg,
      tech: ["MERN"],
      github: "https://github.com/Shivani-997/hospital-backend",
      live: "#",
    },
  ];

  const categories = ["All", "Web", "Design"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-white text-black dark:bg-black dark:text-white px-4 sm:px-6 md:px-10 lg:px-20 py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My Projects
        </h2>

        {/* 🔘 Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm md:text-base rounded-full border transition ${
                filter === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border-gray-500 text-gray-500 dark:text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🧩 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.04,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-xl p-4 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg flex flex-col"
            >
              {/* 📸 Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 h-40 sm:h-44 w-full object-cover"
              />

              {/* 🏷️ Title */}
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>

              {/* 💡 Tech badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔗 Links */}
              <div className="flex gap-4 mt-4 text-lg">
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-blue-500"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="hover:text-green-500"
                >
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
