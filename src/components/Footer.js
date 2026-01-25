import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { isDarkMode } = useDarkMode();

  const quickLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "project" },
    { name: "Skills", link: "skills" },
  ];

  return (
    <footer
      name="footer"
      className={`w-full ${isDarkMode ? "bg-[#0a0a0a] border-[#222]" : "bg-[#3E2723] border-[#2D1B18]"} text-white py-16 border-t transition-colors duration-300`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Connect */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#C5A059] inline-block pb-1">
              Let's Connect
            </h2>
            <p className="text-[#D7CCC8] max-w-sm mx-auto md:mx-0 leading-relaxed mb-6 text-sm">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/soumya-dubey-752aa8185/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/soumyadubey18"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#FAF9F6] text-[#3E2723] rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                title="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-[#C5A059]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    smooth
                    duration={500}
                    className="text-[#D7CCC8] hover:text-[#C5A059] transition-colors cursor-pointer text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <div
              className={`${isDarkMode ? "bg-[#1a1a1a] border-[#333]" : "bg-[#4E342E] border-[#5D4037]"} p-8 rounded-2xl border shadow-xl`}
            >
              <h3 className="text-xl font-bold mb-2 text-[#C5A059]">
                Based in
              </h3>
              <p className="text-[#D7CCC8] mb-4 font-medium">
                Ranchi, Jharkhand, India
              </p>
              <p className="text-sm opacity-80 italic text-[#BCAAA4]">
                "Turning ideas into scalable digital realities."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t ${isDarkMode ? "border-[#222]" : "border-[#4E342E]"} pt-8 text-center`}
        >
          <p className="text-[#8D6E63] text-sm font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#C5A059] font-bold tracking-wider uppercase">
              SOUMYA DUBEY
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-[#6D4C41] mt-2 font-light">
            Crafted with React, Tailwind CSS & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
