import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJira,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaSearchPlus,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiFirebase,
  SiSwagger,
} from "react-icons/si";

const TechnicalSkills = () => {
  const { isDarkMode } = useDarkMode();
  const [ref, isVisible] = useScrollAnimation();
  const techs = [
    {
      id: 1,
      icon: <FaReact className="text-cyan-400" size={50} />,
      title: "React",
      style: "shadow-cyan-400/20",
      description: "Frontend Architect",
    },
    {
      id: 2,
      icon: <SiNextdotjs className="text-black" size={50} />,
      title: "Next.js",
      style: "shadow-black/20",
      description: "SSR & Performance",
    },
    {
      id: 3,
      icon: <FaNodeJs className="text-green-500" size={50} />,
      title: "Node JS",
      style: "shadow-green-500/20",
      description: "Scalable Backends",
    },
    {
      id: 4,
      icon: <SiTypescript className="text-blue-500" size={50} />,
      title: "TypeScript",
      style: "shadow-blue-500/20",
      description: "Type-Safe Code",
    },
    {
      id: 5,
      icon: <SiPostgresql className="text-blue-400" size={50} />,
      title: "PostgreSQL",
      style: "shadow-blue-400/20",
      description: "Data Engineering",
    },
    {
      id: 6,
      icon: <SiSwagger className="text-green-600" size={50} />,
      title: "Swagger API",
      style: "shadow-green-600/20",
      description: "API Documentation",
    },
    {
      id: 7,
      icon: <SiTailwindcss className="text-sky-400" size={50} />,
      title: "Tailwind",
      style: "shadow-sky-400/20",
      description: "Modern Styling",
    },
    {
      id: 8,
      icon: <SiFirebase className="text-orange-500" size={50} />,
      title: "Firebase",
      style: "shadow-orange-500/20",
      description: "Cloud Services",
    },
    {
      id: 9,
      icon: <FaGitAlt className="text-red-500" size={50} />,
      title: "Git",
      style: "shadow-red-500/20",
      description: "Collaboration",
    },
    {
      id: 10,
      icon: <FaJira className="text-blue-600" size={50} />,
      title: "JIRA",
      style: "shadow-blue-600/20",
      description: "Project Management",
    },
  ];

  const softSkills = [
    {
      id: 1,
      icon: <FaUsers className="text-pink-600" size={40} />,
      title: "Leadership",
      description: "Team guidance & quality",
    },
    {
      id: 2,
      icon: <FaLightbulb className="text-pink-600" size={40} />,
      title: "Decision Making",
      description: "Strategic choices",
    },
    {
      id: 3,
      icon: <FaClock className="text-pink-600" size={40} />,
      title: "Multi-tasking",
      description: "Efficient management",
    },
    {
      id: 4,
      icon: <FaSearchPlus className="text-pink-600" size={40} />,
      title: "Observation",
      description: "Attention to detail",
    },
  ];

  return (
    <div
      name="skills"
      ref={ref}
      className={`w-full min-h-screen ${isDarkMode ? "bg-[#1a1a1a] text-[#c5b9b9] border-[#333]" : "bg-[#FAF9F6] text-[#3E2723] border-[#EADBC8]"} py-16 border-t transition-colors duration-300`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p
            className={`text-5xl font-extrabold inline ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"} rounded-sm`}
          >
            Technical Skills
          </p>
          <p className="py-8 text-lg text-[#5D4037] max-w-2xl">
            A specialized toolkit optimized for modern web engineering and
            scalable system design.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center px-4 sm:px-0 mb-20">
          {techs.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl ${isDarkMode ? "bg-[#2d2d2d] border-[#444]" : "bg-white border-[#EADBC8]"} hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "fade-in" : ""}`}
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {icon}
              </div>
              <p
                className={`font-bold text-xl ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"}`}
              >
                {title}
              </p>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] ${isDarkMode ? "text-[#B0B0B0]" : "text-[#8D6E63]"} mt-3 font-black`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        <div id="soft-skills" className="pb-12 text-center md:text-left">
          <p
            className={`text-5xl font-extrabold inline ${
              isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"
            } rounded-sm`}
          >
            Soft Skills
          </p>
          <p
            className={`py-8 text-lg max-w-2xl ${isDarkMode ? "text-gray-400" : "text-[#5D4037]"}`}
          >
            Interpersonal and management capabilities developed through
            professional experience.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center px-4 sm:px-0">
          {softSkills.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl ${isDarkMode ? "bg-[#2d2d2d] border-[#444]" : "bg-[#FAF3E0] border-[#EADBC8]"} hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "fade-in" : ""}`}
            >
              <div className="mb-4">
                {React.cloneElement(icon, {
                  className: "text-[#C5A059]",
                  size: 40,
                })}
              </div>
              <p
                className={`font-bold text-xl ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"}`}
              >
                {title}
              </p>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] ${isDarkMode ? "text-[#B0B0B0]" : "text-[#8D6E63]"} mt-3 font-black`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
