import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const links = [
    {
      id: 1,
      name: "Home",
      link: "home",
    },
    {
      id: 2,
      name: "The Story",
      link: "about",
    },
    {
      id: 3,
      name: "Works",
      link: "project",
    },
    {
      id: 4,
      name: "Technical Skills",
      link: "skills",
    },
    {
      id: 5,
      name: "Career",
      link: "experience",
    },
    {
      id: 6,
      name: "Contact",
      link: "contact",
    },
    {
      id: 7,
      name: "Footer",
      link: "footer",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-[#C5A059] ${isDarkMode ? "bg-[#1a1a1a] border-b border-[#333]" : "bg-[#FAF9F6] border-b border-[#EADBC8]"} fixed z-50 transition-colors duration-300`}
    >
      <div>
        <h1
          className={`body-font font-name text-5xl ml-2 font-bold ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"}`}
        >
          Soumya Dubey
        </h1>
      </div>

      <ul className="hidden md:flex items-center gap-2">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium ${isDarkMode ? "text-[#B0B0B0] hover:text-[#C5A059]" : "text-[#5D4037] hover:text-[#C5A059]"} hover:scale-105 duration-200`}
          >
            <Link to={link} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
        <button
          onClick={toggleDarkMode}
          className={`ml-4 p-2 rounded-full ${isDarkMode ? "bg-[#333] text-yellow-400" : "bg-[#E0E0E0] text-gray-700"} hover:scale-110 transition-transform duration-200`}
          title="Toggle dark mode"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </ul>

      <div className="flex items-center gap-4 md:hidden">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${isDarkMode ? "bg-[#333] text-yellow-400" : "bg-[#E0E0E0] text-gray-700"} hover:scale-110 transition-transform duration-200`}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <div
          onClick={() => setNav(!nav)}
          className={`cursor-pointer pr-4 z-10 ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"}`}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul
          className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${isDarkMode ? "bg-[#1a1a1a] text-[#B0B0B0]" : "bg-[#FAF9F6] text-[#3E2723]"} animate-slideInLeft`}
        >
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${isDarkMode ? "hover:text-[#C5A059]" : "hover:text-[#C5A059]"} transition-colors duration-200`}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
