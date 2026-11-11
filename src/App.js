import React, { useState } from "react";
import { MotionConfig } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import TechnicalSkills from "./components/TechnicalSkills";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ResumeModal from "./components/ResumeModal";
import UmamiAnalytics from "./components/UmamiAnalytics";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <DarkModeProvider>
      <MotionConfig reducedMotion="user">
        <UmamiAnalytics />
        <div className="min-h-screen font-sans antialiased selection:bg-sky-500 selection:text-white bg-dot-pattern">
          <ScrollProgressBar />
          <NavBar onOpenResume={() => setResumeOpen(true)} />
          <main>
            <Home onOpenResume={() => setResumeOpen(true)} />
            <About />
            <TechnicalSkills />
            <Experience />
            <Project />
            <Contact />
          </main>
          <Footer onOpenResume={() => setResumeOpen(true)} />
          <BackToTop />
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        </div>
      </MotionConfig>
    </DarkModeProvider>
  );
}

export default App;
