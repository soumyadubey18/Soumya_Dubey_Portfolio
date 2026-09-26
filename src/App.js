import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Home from "./components/Home";
import InteractiveArchitecture from "./components/InteractiveArchitecture";
import MotionPipelineGraphic from "./components/MotionPipelineGraphic";
import DevOpsWorkbench from "./components/DevOpsWorkbench";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import GitHubActivity from "./components/GitHubActivity";
import TechnicalSkills from "./components/TechnicalSkills";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ResumeModal from "./components/ResumeModal";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <DarkModeProvider>
      <div className="min-h-screen font-sans antialiased selection:bg-sky-500 selection:text-white bg-dot-pattern">
        <ScrollProgressBar />
        <NavBar onOpenResume={() => setResumeOpen(true)} />
        <main>
          <Home onOpenResume={() => setResumeOpen(true)} />
          <InteractiveArchitecture />
          <MotionPipelineGraphic />
          <DevOpsWorkbench />
          <TechnicalSkills />
          <Project />
          <GitHubActivity />
          <Experience />
          <About />
          <Education />
          <Contact />
        </main>
        <Footer onOpenResume={() => setResumeOpen(true)} />
        <BackToTop />
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </DarkModeProvider>
  );
}

export default App;
