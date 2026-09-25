import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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
      className="fixed top-20 left-0 h-0.5 bg-gradient-to-r from-sky-500 via-sky-400 to-amber-500 transition-all duration-150 z-50 pointer-events-none"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
