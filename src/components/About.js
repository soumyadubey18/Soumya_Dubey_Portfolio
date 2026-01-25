import { useDarkMode } from "../context/DarkModeContext";

const About = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      name="about"
      className={`w-full min-h-screen ${isDarkMode ? "bg-[#1a1a1a] text-[#B0B0B0] border-[#333]" : "bg-[#FAF9F6] text-[#3E2723] border-[#EADBC8]"} py-24 border-t transition-colors duration-300`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p
            className={`text-5xl font-extrabold inline border-b-8 ${isDarkMode ? "border-[#C5A059]/20" : "border-[#C5A059]/10"} rounded-sm`}
          >
            The Story
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 text-lg ${isDarkMode ? "text-[#B0B0B0]" : "text-[#5D4037]"} leading-relaxed`}
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#C5A059] first-letter:mr-3 first-letter:float-left">
              I am a passionate Software Developer with a B.Tech in Electronics
              & Communication. With over a year of experience, I have developed
              expertise in both frontend and backend technologies. My toolkit
              includes ReactJS, NodeJS, TypeScript, and PostgreSQL.
            </p>
            <p>
              I thrive in agile environments and have a strong track record of
              collaborating with cross-functional teams to deliver high-quality
              software solutions. From translating complex designs into
              responsive interfaces to building robust APIs, I am dedicated to
              optimizing web performance and user experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-6 ${isDarkMode ? "bg-[#2d2d2d] border-[#444]" : "bg-[#FAF3E0] border-[#EADBC8]"} rounded-3xl text-center shadow-sm border transition-colors duration-300`}
            >
              <p className="text-4xl font-black text-[#C5A059] mb-2">1+</p>
              <p
                className={`text-sm font-bold ${isDarkMode ? "text-[#B0B0B0]" : "text-[#8D6E63]"} uppercase tracking-widest`}
              >
                Years Experience
              </p>
            </div>
            <div
              className={`p-6 ${isDarkMode ? "bg-[#2d2d2d] border-[#444]" : "bg-[#FAF3E0] border-[#EADBC8]"} rounded-3xl text-center shadow-sm border transition-colors duration-300`}
            >
              <p className="text-4xl font-black text-[#C5A059] mb-2">10+</p>
              <p
                className={`text-sm font-bold ${isDarkMode ? "text-[#B0B0B0]" : "text-[#8D6E63]"} uppercase tracking-widest`}
              >
                Projects Built
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
