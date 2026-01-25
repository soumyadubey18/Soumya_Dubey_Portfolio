import SpirriDB from "../assets/project/spirri-db.png";
import HomeAuto from "../assets/project/home-automation.png";
import Internship from "../assets/project/internship.png";
import OvenApp from "../assets/project/oven-app.png";
import CalculatorApp from "../assets/project/calculator-app.png";
import CatApp from "../assets/project/cat-app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: OvenApp,
      title: "10Oven",
      description: "A modern web application for oven control and recipe management, built with JavaScript.",
      link: "https://github.com/soumyadubey18/10Oven"
    },
    {
      id: 2,
      src: SpirriDB,
      title: "Spirri DB Project",
      description: "Developed robust backend modules and conducted thorough validations for seamless system integration.",
      link: "https://github.com/soumyadubey18/SpirriDB"
    },
    {
      id: 3,
      src: HomeAuto,
      title: "Home Automation & Security",
      description: "Created an Arduino-based system for appliance control and security using GSM and Bluetooth modules.",
      link: "https://github.com/soumyadubey18/HomeAutomation"
    },
    {
      id: 4,
      src: CalculatorApp,
      title: "Calculator App",
      description: "A sleek, responsive calculator application with modern UI/UX design principles.",
      link: "https://github.com/soumyadubey18/Calculator"
    },
    {
      id: 5,
      src: CatApp,
      title: "Cat_js",
      description: "Interactive web application featuring playful cat-themed elements and dynamic interactions.",
      link: "https://github.com/soumyadubey18/Cat_js"
    },
    {
      id: 6,
      src: Internship,
      title: "Web Development Internship",
      description: "Built responsive web features using HTML, CSS, JavaScript, and PHP at XpertReview Software Solution.",
      link: "https://github.com/soumyadubey18/BootstrapWebsite"
    },
  ];

  return (
    <div name="project" className="w-full min-h-screen bg-[#F5F5DC]/30 text-[#3E2723] py-24 border-t border-[#EADBC8]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-8 border-[#C5A059]/10 rounded-sm">Featured Work</p>
          <p className="py-8 text-lg text-[#5D4037] max-w-2xl">
            A collection of engineering solutions ranging from backend architectures to responsive interactive frontends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, description, link }) => (
            <div key={id} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#EADBC8]">
              <a href={link} target="_blank" rel="noreferrer">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3E2723]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl group-hover:text-[#C5A059] transition-colors">{title}</h3>
                    <span className="text-[#3E2723]/30 group-hover:text-[#C5A059] transform group-hover:translate-x-1 transition-all">→</span>
                  </div>
                  <p className="text-sm text-[#8D6E63] leading-relaxed font-medium">
                    {description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
