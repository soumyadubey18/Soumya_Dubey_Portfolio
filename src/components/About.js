const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#FAF9F6] text-[#3E2723] py-24 border-t border-[#EADBC8]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-8 border-[#C5A059]/10 rounded-sm">
            The Story
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-[#5D4037] leading-relaxed">
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
            <div className="p-6 bg-[#FAF3E0] rounded-3xl text-center shadow-sm border border-[#EADBC8]">
              <p className="text-4xl font-black text-[#C5A059] mb-2">1+</p>
              <p className="text-sm font-bold text-[#8D6E63] uppercase tracking-widest">
                Years Experience
              </p>
            </div>
            <div className="p-6 bg-[#FAF3E0] rounded-3xl text-center shadow-sm border border-[#EADBC8]">
              <p className="text-4xl font-black text-[#C5A059] mb-2">10+</p>
              <p className="text-sm font-bold text-[#8D6E63] uppercase tracking-widest">
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
