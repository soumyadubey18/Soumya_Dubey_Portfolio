import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const experience = [
    {
      id: 3,
      role: "Full Stack Engineer",
      company: "Indpro AB",
      duration: "May 2022 - February 2023",
      points: [
        "Architected and implemented responsive frontend modules using React.js and modern state management.",
        "Engineered robust Node.js backend services with integrated data validation and security protocols.",
        "Streamlined development workflows by managing complex issue tracking and sprint progress via JIRA.",
        "Optimized application performance through rigorous code reviews and collaborative technical leadership.",
      ],
    },
    {
      id: 4,
      role: "React Specialist Training",
      company: "Nordic Academy",
      duration: "February 2022 - April 2022",
      points: [
        "Mastered advanced React concepts including Hooks, Context API, and performance optimization techniques.",
        "Developed production-ready interfaces following industry-standard design patterns and accessibility guidelines.",
      ],
    },
    {
      id: 5,
      role: "Frontend Engineer",
      company: "Mechodal Technology",
      duration: "January 2022 - February 2022",
      points: [
        "Translated high-fidelity UI/UX designs into pixel-perfect, responsive React components.",
        "Collaborated with backend teams to ensure seamless API integration and data flow consistency.",
      ],
    },
    {
      id: 6,
      role: "Web Developer",
      company: "XpertReview Software Solution",
      duration: "November 2021 - January 2022",
      points: [
        "Built and maintained websites using modern web technologies.",
        "Collaborated with the design team to improve site usability.",
      ],
    },
    {
      id: 7,
      role: "Blogger Internship",
      company: "Business Vala",
      duration: "September 2021 - October 2021",
      points: [
        "Studied basic and advanced knowledge of Blogger.",
        "Applied HTML and CSS knowledge to manage and handle websites.",
        "Created technical and professional content for the platform.",
      ],
    },
    {
      id: 8,
      role: "Graphic Designer & Social Media Marketing",
      company: "pepr",
      duration: "July 2021 - September 2021",
      points: [
        "Designed visual assets and managed social media campaigns.",
        "Collaborated on marketing strategies for international clients.",
      ],
    },
    {
      id: 9,
      role: "Graphic Design Intern",
      company: "SarkariSchool.in",
      duration: "June 2021 - August 2021",
      points: [
        "Created graphics for educational and social awareness programs.",
        "Worked with the design team to maintain brand consistency.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className={`w-full min-h-screen ${isDarkMode ? "bg-[#1a1a1a] text-[#c5b9b9] border-[#333]" : "bg-[#FAF9F6] text-[#3E2723] border-[#EADBC8]"} py-16 border-t transition-colors duration-300`}
    >
      <div
        className={`max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ${isDarkMode ? "text-[#c5b9b9]" : "text-[#3E2723]"}`}
      >
        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline rounded-sm">Career</p>
          <p
            className={`py-8 text-lg max-w-2xl ${isDarkMode ? "text-gray-400" : "text-[#5D4037]"}`}
          >
            My career journey and professional contributions in the software
            industry.
          </p>
        </div>

        <div className="w-full mb-20">
          {experience.map(({ id, role, company, duration, points }) => (
            <div
              key={id}
              className={`p-8 rounded-3xl ${isDarkMode ? "bg-[#2d2d2d] border-[#444]" : "bg-white border-[#EADBC8]"} border shadow-sm hover:shadow-xl transition-all duration-500 mb-8`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3
                    className={`text-2xl font-black ${isDarkMode ? "text-[#C5A059]" : "text-[#3E2723]"}`}
                  >
                    {role}
                  </h3>
                  <p className="text-lg font-bold text-[#C5A059]">{company}</p>
                </div>
                <span
                  className={`mt-2 md:mt-0 px-4 py-2 ${isDarkMode ? "bg-[#2d2d2d] text-[#c5b9b9] border-[#444]" : "bg-[#FAF3E0] text-[#3E2723] border-[#EADBC8]"} font-bold rounded-full text-sm border`}
                >
                  {duration}
                </span>
              </div>
              <ul
                className={`list-disc list-inside space-y-3 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-[#5D4037]"}`}
              >
                {points.map((point, index) => (
                  <li key={index} className="pl-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
