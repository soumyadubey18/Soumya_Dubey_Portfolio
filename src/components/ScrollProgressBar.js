import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateScrollProgress = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        scrollHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100))
          : 0;

      setScrollProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScrollProgress);
        ticking = true;
      }
    };

    // Initialize progress on mount (e.g. if reloaded mid-page)
    calculateScrollProgress();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] w-full bg-slate-200/20 dark:bg-slate-800/30 backdrop-blur-xs pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-amber-400 transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(56,189,248,0.7)] relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Subtle luminous glow bead at current scroll position */}
        {scrollProgress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9),0_0_12px_rgba(56,189,248,0.9)] opacity-90" />
        )}
      </div>
    </div>
  );
};

export default ScrollProgressBar;

