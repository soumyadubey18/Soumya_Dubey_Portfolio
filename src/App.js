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
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div>
        <ScrollProgressBar />
        <NavBar />
        <Home />
        <About />
        <Project />
        <TechnicalSkills />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </DarkModeProvider>
  );
}

export default App;
