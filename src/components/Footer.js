import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = ({ onOpenResume }) => {
  const { isDarkMode } = useDarkMode();

  const links = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "project" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer
      className={`border-t py-12 transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#05080E] border-slate-800 text-slate-400"
          : "bg-slate-900 border-slate-800 text-slate-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                Soumya Dubey
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Associate Cloud Engineer & Junior DevOps Engineer · Bengaluru, India
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onOpenResume}
              className="hover:text-sky-400 flex items-center gap-1 transition-colors"
            >
              <FaFileDownload size={11} />
              <span>Resume</span>
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.www.linkedin.com/in/soumya-dubey-752aa818"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 hover:text-white transition-colors text-slate-300"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href="https://github.com/soumyadubey18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 hover:text-white transition-colors text-slate-300"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="mailto:dubeysoumya18@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 hover:text-white transition-colors text-slate-300"
            >
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Soumya Dubey. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>AWS Cloud · Linux · Docker · Terraform · React · Node.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
