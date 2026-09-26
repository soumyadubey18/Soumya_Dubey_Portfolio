import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          className="fixed bottom-6 right-6 p-3.5 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 z-40 bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/20"
          title="Scroll back to top"
          aria-label="Back to top"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
