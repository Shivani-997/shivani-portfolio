import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Qualifications() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  // reset refs before render
  itemsRef.current = [];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institute: "Hi-Tech Institute of Engineering and Technology Ghaziabad",
      year: "2022 - 2026",
      grade: "CGPA: 8.5",
      courses: "CSE",
    },
    {
      degree: "Class 12 (CBSE)",
      institute: "Sri Chaitanya (Andhra Pradesh)",
      year: "2021 - 2022",
      grade: "85%",
      courses: "Physics, Chemistry, Maths",
    },
    {
      degree: "Class 10 (CBSE)",
      institute: "Government Higher Secondary School Kamba (Arunachal Pradesh)",
      year: "2019 - 2020",
      grade: "90%",
      courses: "Science, Maths",
    },
  ];

  return (
    <section
      id="qualifications"
      className="
      bg-white text-gray-900 
      dark:bg-black dark:text-white 
      py-20 px-6 transition-colors duration-300
    "
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Qualifications
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div
          className="
          absolute left-1/2 top-0 w-1 h-full 
          bg-gray-300 dark:bg-gray-700 
          transform -translate-x-1/2
        "
        ></div>

        {education.map((edu, index) => (
          <div
            key={index}
            ref={(el) => el && itemsRef.current.push(el)}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* Card */}
            <div className="w-full md:w-1/2 px-4">
              <div
                className="
                bg-gray-100 dark:bg-gray-900 
                p-6 rounded-xl shadow-lg 
                border border-gray-300 dark:border-gray-700 
                hover:scale-105 transition duration-300
              "
              >
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                  {edu.degree}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {edu.institute}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.year}
                </p>

                <p className="text-green-600 dark:text-green-400 mt-2">
                  {edu.grade}
                </p>

                <p className="text-gray-600 dark:text-gray-500 text-sm mt-2">
                  {edu.courses}
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div
              className="
              absolute left-1/2 transform -translate-x-1/2 
              w-4 h-4 bg-blue-500 rounded-full 
              border-4 border-white dark:border-black
            "
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Qualifications;