import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: bar.dataset.level + "%",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  // reset refs
  barsRef.current = [];

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90, icon: <FaHtml5 /> },
        { name: "React", level: 80, icon: <FaReact /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs /> },
        { name: "MongoDB", level: 85, icon: <SiMongodb /> },
        { name: "Express.js", level: 80, icon: <SiExpress /> },
        { name: "MySQL", level: 70, icon: <SiMysql /> },
      ],
    },
    {
      title: "Styling",
      skills: [
        { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 80, icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white text-black dark:bg-black dark:text-white px-4 sm:px-6 md:px-10 lg:px-20 py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {skillGroups.map((group, i) => (
            <div key={i}>

              {/* Group Title */}
              <h3 className="text-xl font-semibold mb-6 text-blue-500">
                {group.title}
              </h3>

              {group.skills.map((skill, index) => (
                <div key={index} className="mb-6">

                  {/* Label */}
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-blue-500">
                        {skill.icon}
                      </span>
                      <span className="text-sm md:text-base">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
                    <div
                      ref={(el) => el && barsRef.current.push(el)}
                      data-level={skill.level}
                      className="h-2 rounded bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: "0%" }}
                    ></div>
                  </div>

                </div>
              ))}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;