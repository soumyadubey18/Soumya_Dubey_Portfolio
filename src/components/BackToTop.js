import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useDarkMode();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40 animate-fadeIn ${
            isDarkMode
              ? "bg-[#C5A059] text-white hover:bg-[#8B6F47]"
              : "bg-[#3E2723] text-white hover:bg-[#5D4037]"
          }`}
          title="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
