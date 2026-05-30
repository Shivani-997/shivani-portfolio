import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");

  return (
    <section
      id="contact"
      className="
      bg-white text-gray-900 
      dark:bg-black dark:text-white 
      py-20 px-6 transition-colors duration-300
    "
    >
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <form
          action="https://formspree.io/f/xojbbkwz"
          method="POST"
          onSubmit={() => setStatus("Message sent successfully ✅")}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
            w-full p-3 rounded 
            bg-gray-100 dark:bg-gray-900 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
            w-full p-3 rounded 
            bg-gray-100 dark:bg-gray-900 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="
            w-full p-3 rounded 
            bg-gray-100 dark:bg-gray-900 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="
            w-full p-3 rounded 
            bg-gray-100 dark:bg-gray-900 
            border border-gray-300 dark:border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          ></textarea>

          <button
            type="submit"
            className="
            bg-blue-500 hover:bg-blue-600 
            px-6 py-2 rounded text-white 
            transition shadow-md hover:shadow-lg
          "
          >
            Send Message
          </button>

          {/* ✅ Status */}
          {status && (
            <p className="text-sm text-green-600 dark:text-green-400">
              {status}
            </p>
          )}
        </form>

        {/* 🌐 Social Links */}
        <div className="flex flex-col justify-center items-center gap-6">
          <a
            href="https://github.com/Shivani-997"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-2xl text-gray-600 dark:text-gray-300 
            hover:text-black dark:hover:text-white 
            hover:scale-110 transition duration-300
          "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shivani-sharma-aaa798342"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-2xl text-blue-500 
            hover:scale-110 transition
          "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shivaniriyacrj947@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-2xl text-gray-600 dark:text-gray-300 
            hover:text-red-500 hover:scale-110 transition duration-300
          "
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
