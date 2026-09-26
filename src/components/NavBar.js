import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";

const NavBar = ({ onOpenResume }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Architecture", to: "cloud-architecture" },
    { name: "Live Engine", to: "pipeline-motion" },
    { name: "Workbench", to: "devops-workbench" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "project" },
    { name: "Timeline", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 pb-2`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 h-16 flex items-center justify-between border ${
          scrolled
            ? isDarkMode
              ? "bg-[#090D16]/85 backdrop-blur-xl border-slate-700/60 shadow-2xl shadow-black/40"
              : "bg-white/85 backdrop-blur-xl border-slate-200/90 shadow-lg shadow-slate-200/50"
            : isDarkMode
            ? "bg-[#090D16]/60 backdrop-blur-md border-slate-800/80"
            : "bg-white/70 backdrop-blur-md border-slate-200/70"
        }`}
      >
        {/* Brand Wordmark with Live Pulsing Green Dot */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-500 flex items-center justify-center text-white font-black text-xs shadow-md shadow-sky-500/20">
            SD
          </div>
          <div className="flex flex-col">
            <span
              className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors ${
                isDarkMode
                  ? "text-white group-hover:text-sky-400"
                  : "text-slate-900 group-hover:text-sky-600"
              }`}
            >
              Soumya Dubey
            </span>
            <span className="text-[10px] text-slate-400 font-mono -mt-1 hidden sm:block">
              Cloud & DevOps
            </span>
          </div>
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1"
            title="Available for roles"
          ></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="!text-sky-500 font-semibold"
              className={`text-xs lg:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap hover:text-sky-500 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Icons & Resume Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/soumyadubey18"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className={`p-2 rounded-xl border transition-colors ${
              isDarkMode
                ? "border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/60"
                : "border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-slate-50"
            }`}
          >
            <FaGithub size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/soumya-dubey-752aa8185"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-2 rounded-xl border transition-colors ${
              isDarkMode
                ? "border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/60"
                : "border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-slate-50"
            }`}
          >
            <FaLinkedin size={14} />
          </a>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-xl border transition-colors ${
              isDarkMode
                ? "border-slate-800 text-amber-400 hover:bg-slate-800/80 bg-slate-900/60"
                : "border-slate-200 text-slate-700 hover:bg-slate-100 bg-slate-50"
            }`}
          >
            {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-sky-500 hover:bg-sky-400 text-white transition-all shadow-md shadow-sky-500/25 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
          >
            <FaFileDownload size={11} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-lg border ${
              isDarkMode
                ? "border-slate-800 text-amber-400 bg-slate-900"
                : "border-slate-200 text-slate-700 bg-slate-50"
            }`}
          >
            {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            onClick={() => setNav(!nav)}
            aria-label="Toggle navigation menu"
            className={`p-2 rounded-lg border ${
              isDarkMode
                ? "border-slate-800 text-slate-200 bg-slate-900"
                : "border-slate-200 text-slate-800 bg-slate-50"
            }`}
          >
            {nav ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {nav && (
        <div
          className={`sm:hidden fixed inset-x-4 top-20 rounded-2xl border p-5 transition-all shadow-2xl z-50 ${
            isDarkMode
              ? "bg-[#090D16]/95 border-slate-700 text-white backdrop-blur-2xl"
              : "bg-white/95 border-slate-200 text-slate-900 backdrop-blur-2xl"
          }`}
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setNav(false)}
                  className={`block py-1.5 text-sm font-semibold transition-colors hover:text-sky-500 ${
                    isDarkMode ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-slate-800/40 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setNav(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 text-white text-xs font-bold"
              >
                <FaFileDownload size={13} />
                <span>View Full Resume</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
