import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import Myimage from "../assets/myimage.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useDarkMode } from "../context/DarkModeContext";

const Home = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useDarkMode();

  const handleViewWork = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div
      ref={ref}
      name="home"
      className={`w-full min-h-screen bg-gradient-to-b ${isDarkMode ? "from-[#1a1a1a] to-[#2d2d2d]" : "from-[#FAF9F6] to-[#F5F5DC]"} py-20 transition-colors duration-300`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-10 ${isVisible ? "fade-in" : "opacity-0"}`}
      >
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2
            className={`text-5xl sm:text-8xl font-black ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"} leading-tight`}
          >
            Software <span className="text-[#C5A059]">Developer</span>
          </h2>
          <p
            className={`py-6 max-w-md ${isDarkMode ? "text-[#B0B0B0]" : "text-[#5D4037]"} text-lg leading-relaxed`}
          >
            I am a full-stack engineer with 1+ years of experience crafting
            high-performance web solutions. Passionate about building seamless
            digital experiences using React, Node.js, and modern cloud
            architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="project" smooth duration={500}>
              <button
                onClick={handleViewWork}
                className="group text-white w-fit px-8 py-4 my-2 flex items-center gap-2 rounded-full bg-[#3E2723] cursor-pointer hover:scale-105 duration-300 shadow-xl shadow-[#3E2723]/20 disabled:opacity-70"
                disabled={loading}
              >
                {loading && <div className="spinner"></div>}
                {!loading && "View Work"}
                {!loading && (
                  <span className="group-hover:translate-x-2 duration-300">
                    →
                  </span>
                )}
              </button>
            </Link>
            <button
              className="text-white font-bold px-8 py-4 my-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#8B6F47] cursor-pointer hover:scale-105 duration-300 shadow-xl shadow-[#C5A059]/30 transition-all group"
              title="Download Resume"
              onClick={() => {
                const fileId = "1PSer_lOFSLe99zHEYgvO2-1jczQT52PA";
                const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.download = "Soumya_Dubey_Resume.pdf";
                link.click();
              }}
            >
              <FaDownload size={18} />
              Resume
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-[#3E2723] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={Myimage}
            alt="my profile"
            className="relative rounded-3xl mx-auto w-2/3 md:w-80 shadow-2xl transition-transform duration-500 hover:scale-[1.02] border-2 border-[#EADBC8]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
