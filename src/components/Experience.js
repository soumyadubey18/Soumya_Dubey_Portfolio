import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJira,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaSearchPlus,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSwagger,
} from "react-icons/si";

const Experience = () => {
  const techs = [
    {
      id: 1,
      icon: <FaReact className="text-[#61DAFB]" size={50} />,
      title: "React",
      style: "shadow-cyan-400/20",
      description: "Frontend Architect",
    },
    {
      id: 2,
      icon: <SiNextdotjs className="text-black" size={50} />,
      title: "Next.js",
      style: "shadow-black/20",
      description: "SSR & Performance",
    },
    {
      id: 3,
      icon: <FaNodeJs className="text-[#339933]" size={50} />,
      title: "Node JS",
      style: "shadow-green-500/20",
      description: "Scalable Backends",
    },
    {
      id: 4,
      icon: <SiTypescript className="text-[#3178C6]" size={50} />,
      title: "TypeScript",
      style: "shadow-blue-500/20",
      description: "Type-Safe Code",
    },
    {
      id: 5,
      icon: <SiPostgresql className="text-[#4169E1]" size={50} />,
      title: "PostgreSQL",
      style: "shadow-blue-400/20",
      description: "Data Engineering",
    },
    {
      id: 6,
      icon: <SiSwagger className="text-[#85EA2D]" size={50} />,
      title: "Swagger API",
      style: "shadow-green-600/20",
      description: "API Documentation",
    },
    {
      id: 7,
      icon: <SiTailwindcss className="text-[#06B6D4]" size={50} />,
      title: "Tailwind",
      style: "shadow-sky-400/20",
      description: "Modern Styling",
    },
    {
      id: 8,
      icon: <SiFirebase className="text-[#FFCA28]" size={50} />,
      title: "Firebase",
      style: "shadow-orange-500/20",
      description: "Cloud Services",
    },
    {
      id: 9,
      icon: <FaGitAlt className="text-[#F05032]" size={50} />,
      title: "Git",
      style: "shadow-red-500/20",
      description: "Collaboration",
    },
    {
      id: 10,
      icon: <FaJira className="text-[#0052CC]" size={50} />,
      title: "JIRA",
      style: "shadow-blue-600/20",
      description: "Project Management",
    },
    {
      id: 11,
      icon: <FaHtml5 className="text-[#E34F26]" size={50} />,
      title: "HTML5",
      style: "shadow-[#E34F26]/20",
      description: "Semantic Web",
    },
    {
      id: 12,
      icon: <FaCss3Alt className="text-[#1572B6]" size={50} />,
      title: "CSS3",
      style: "shadow-[#1572B6]/20",
      description: "Advanced Styling",
    },
    {
      id: 13,
      icon: <SiMongodb className="text-[#47A248]" size={50} />,
      title: "MongoDB",
      style: "shadow-[#47A248]/20",
      description: "NoSQL Databases",
    },
    {
      id: 14,
      icon: <SiExpress className="text-black" size={50} />,
      title: "Express",
      style: "shadow-black/20",
      description: "API Framework",
    },
  ];

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

  const softSkills = [
    {
      id: 1,
      icon: <FaUsers size={40} />,
      title: "Leadership",
      description: "Team guidance & quality",
    },
    {
      id: 2,
      icon: <FaLightbulb size={40} />,
      title: "Decision Making",
      description: "Strategic choices",
    },
    {
      id: 3,
      icon: <FaClock size={40} />,
      title: "Multi-tasking",
      description: "Efficient management",
    },
    {
      id: 4,
      icon: <FaSearchPlus size={40} />,
      title: "Observation",
      description: "Attention to detail",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-[#FAF9F6] text-[#3E2723] py-24 border-t border-[#EADBC8]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-[#3E2723]">
        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-8 border-[#C5A059]/10 rounded-sm">
            Professional Experience
          </p>
          <p className="py-8 text-lg text-[#5D4037] max-w-2xl">
            My career journey and professional contributions in the software
            industry.
          </p>
        </div>

        <div className="w-full mb-20">
          {experience.map(({ id, role, company, duration, points }) => (
            <div
              key={id}
              className="p-8 rounded-3xl bg-white border border-[#EADBC8] shadow-sm hover:shadow-xl transition-all duration-500 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-black text-[#3E2723]">{role}</h3>
                  <p className="text-lg font-bold text-[#C5A059]">{company}</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-2 bg-[#FAF3E0] text-[#3E2723] font-bold rounded-full text-sm border border-[#EADBC8]">
                  {duration}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-3 text-[#5D4037] leading-relaxed">
                {points.map((point, index) => (
                  <li key={index} className="pl-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-8 border-[#C5A059]/10 rounded-sm">
            Technical Skills
          </p>
          <p className="py-8 text-lg text-[#5D4037] max-w-2xl">
            A specialized toolkit optimized for modern web engineering and
            scalable system design.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center px-4 sm:px-0 mb-20">
          {techs.map(({ id, icon, title, style, description }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-[#EADBC8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {icon}
              </div>
              <p className="font-bold text-xl text-[#3E2723]">{title}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8D6E63] mt-3 font-black">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="pb-12 text-center md:text-left">
          <p className="text-5xl font-extrabold inline border-b-8 border-[#C5A059]/10 rounded-sm">
            Soft Skills
          </p>
          <p className="py-8 text-lg text-[#5D4037] max-w-2xl">
            Interpersonal and management capabilities developed through
            professional experience.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center px-4 sm:px-0">
          {softSkills.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-[#FAF3E0] border border-[#EADBC8] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                {React.cloneElement(icon, {
                  className: "text-[#C5A059]",
                  size: 40,
                })}
              </div>
              <p className="font-bold text-xl text-[#3E2723]">{title}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8D6E63] mt-3 font-black">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
