import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../assets/profile image.jpeg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef();
  const statsRef = useRef([]);

  useEffect(() => {
    const el = aboutRef.current;

    // 🔥 Section animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      },
    );

    // 🔢 Counter animation
    statsRef.current.forEach((stat) => {
      let target = +stat.getAttribute("data-value");

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  statsRef.current = [];

  const stats = [
    { label: "Projects", value: 3 },
    { label: "Technologies", value: 10 },
    { label: "Experience", value: 0 },
    { label: "Certifications", value: 3 },
  ];

  return (
    <section
      ref={aboutRef}
      id="about"
      className="bg-white text-black dark:bg-black dark:text-white px-4 sm:px-6 md:px-10 lg:px-20 py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="profile"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover object-center border-4 border-gray-300 dark:border-gray-700"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">
            I'm a 4th year Computer Science student passionate about building
            scalable web applications using the MERN stack. I enjoy solving
            real-world problems and creating clean user interfaces.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg text-center"
              >
                <h3
                  ref={(el) => el && statsRef.current.push(el)}
                  data-value={stat.value}
                  className="text-2xl font-bold text-blue-500"
                >
                  0
                </h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="/Shivani_Sharma_resume.pdf"
            download
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
