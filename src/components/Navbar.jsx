import { useContext, useState } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-white px-4 md:px-8 py-4 flex justify-between items-center shadow-md z-50 transition-colors duration-300">

      {/* Logo */}
      <h1
        className="text-xl md:text-2xl font-bold cursor-pointer"
        onClick={() => scrollTo("home")}
      >
        Shivani
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg items-center">

        <li onClick={() => scrollTo("home")} className="cursor-pointer hover:text-gray-500">
          Home
        </li>

        <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-gray-500">
          About
        </li>

        <li onClick={() => scrollTo("skills")} className="cursor-pointer hover:text-gray-500">
          Skills
        </li>

        <li onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-gray-500">
          Projects
        </li>

        <li onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-gray-500">
          Contact
        </li>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-5 py-6 md:hidden shadow-md">

          <p onClick={() => scrollTo("home")} className="cursor-pointer">Home</p>
          <p onClick={() => scrollTo("about")} className="cursor-pointer">About</p>
          <p onClick={() => scrollTo("skills")} className="cursor-pointer">Skills</p>
          <p onClick={() => scrollTo("projects")} className="cursor-pointer">Projects</p>
          <p onClick={() => scrollTo("contact")} className="cursor-pointer">Contact</p>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;