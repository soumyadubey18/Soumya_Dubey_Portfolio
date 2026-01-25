import { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-20 left-0 h-1 ${
        isDarkMode
          ? "bg-[#C5A059]"
          : "bg-gradient-to-r from-[#3E2723] to-[#C5A059]"
      } transition-all duration-300 z-50`}
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
