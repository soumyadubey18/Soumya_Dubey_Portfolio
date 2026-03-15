import { useDarkMode } from "../context/DarkModeContext";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SpirriDB from "../assets/project/spirri-db.png";
import HomeAuto from "../assets/project/home-automation.png";
import Internship from "../assets/project/internship.png";
import OvenApp from "../assets/project/oven-app.png";
import CalculatorApp from "../assets/project/calculator-app.png";
import CatApp from "../assets/project/cat-app.png";

const Portfolio = () => {
  const { isDarkMode } = useDarkMode();
  const [ref, isVisible] = useScrollAnimation();
  const portfolios = [
    {
      id: 1,
      src: OvenApp,
      title: "10Oven",
      description:
        "A modern web application for oven control and recipe management, built with JavaScript.",
      github: "https://github.com/soumyadubey18/10Oven",
      demo: "https://soumyadubey18.github.io/10Oven",
    },
    {
      id: 2,
      src: SpirriDB,
      title: "Spirri DB Project",
      description:
        "Developed robust backend modules and conducted thorough validations for seamless system integration.",
      github: "https://github.com/soumyadubey18/SpirriDB",
      demo: null, // Backend project, no live demo
    },
    {
      id: 3,
      src: HomeAuto,
      title: "Home Automation & Security",
      description:
        "Created an Arduino-based system for appliance control and security using GSM and Bluetooth modules.",
      github: "https://github.com/soumyadubey18/HomeAutomation",
      demo: null, // Hardware project, no live demo
    },
    {
      id: 4,
      src: CalculatorApp,
      title: "Calculator App",
      description:
        "A sleek, responsive calculator application with modern UI/UX design principles.",
      github: "https://github.com/soumyadubey18/Calculator",
      demo: "https://soumyadubey18.github.io/Calculator",
    },
    {
      id: 5,
      src: CatApp,
      title: "Cat_js",
      description:
        "Interactive web application featuring playful cat-themed elements and dynamic interactions.",
      github: "https://github.com/soumyadubey18/Cat_js",
      demo: "https://soumyadubey18.github.io/Cat_js",
    },
    {
      id: 6,
      src: Internship,
      title: "Web Development Internship",
      description:
        "Built responsive web features using HTML, CSS, JavaScript, and PHP at XpertReview Software Solution.",
      github: "https://github.com/soumyadubey18/BootstrapWebsite",
      demo: "https://soumyadubey18.github.io/BootstrapWebsite",
    },
  ];

  return (
    <div
      name="project"
      ref={ref}
      className={`w-full min-h-screen ${isDarkMode ? "bg-[#1a1a1a] text-[#B0B0B0] border-[#333]" : "bg-[#F5F5DC]/30 text-[#3E2723] border-[#EADBC8]"} py-16 border-t transition-colors duration-300`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p
            className={`text-5xl font-extrabold inline ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"} rounded-sm`}
          >
            Works
          </p>
          <p
            className={`py-8 text-lg ${isDarkMode ? "text-[#B0B0B0]" : "text-[#5D4037]"} max-w-2xl`}
          >
            A collection of engineering solutions ranging from backend
            architectures to responsive interactive frontends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, description, github, demo }) => (
            <div
              key={id}
              className={`group relative ${isDarkMode ? "bg-[#2d2d2d] border-[#444]" : "bg-white border-[#EADBC8]"} rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border ${isVisible ? "fade-in" : ""}`}
            >
              <div
                className="relative overflow-hidden aspect-video cursor-pointer"
                onClick={() =>
                  demo
                    ? window.open(demo, "_blank")
                    : window.open(github, "_blank")
                }
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${isDarkMode ? "bg-[#C5A059]/10" : "bg-[#3E2723]/10"} group-hover:bg-transparent transition-colors duration-500`}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`font-bold text-xl ${isDarkMode ? "text-white group-hover:text-[#C5A059]" : "text-[#3E2723] group-hover:text-[#C5A059]"} transition-colors`}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className={`text-sm ${isDarkMode ? "text-[#B0B0B0]" : "text-[#8D6E63]"} leading-relaxed font-medium mb-6`}
                >
                  {description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 text-center py-2 px-4 rounded-lg border transition-all duration-300 ${isDarkMode ? "border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black" : "border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white"}`}
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 text-center py-2 px-4 rounded-lg border transition-all duration-300 ${isDarkMode ? "border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black" : "border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white"}`}
                    >
                      <FaExternalLinkAlt size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
