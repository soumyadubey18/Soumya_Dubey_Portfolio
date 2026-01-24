import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
