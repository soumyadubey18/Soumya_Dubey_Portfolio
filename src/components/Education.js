import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const Education = () => {
  const { isDarkMode } = useDarkMode();

  const academicDegrees = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics & Communication Engineering",
      institution: "Sarala Birla University",
      location: "Ranchi, Jharkhand",
      highlights: [
        "Core foundational studies in computer architecture, digital electronics, network protocols, and embedded systems.",
        "Graduated with hands-on technical project execution and practical laboratory coursework.",
      ],
    },
    {
      degree: "Diploma in Engineering",
      field: "Electronics & Communication Engineering",
      institution: "BITT Polytechnic",
      location: "Ranchi, Jharkhand",
      highlights: [
        "Comprehensive technical foundation in circuit theory, microprocessor systems, signal processing, and laboratory testing.",
        "Practical engineering training and problem-solving methodology.",
      ],
    },
  ];

  return (
    <section
      id="education"
      name="education"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#0B0F17] border-slate-800/80 text-slate-100"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Academic Foundation · Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Formal Education & Qualifications
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Rigorous engineering education grounding technical problem solving, systems architecture, and analytical reasoning.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {academicDegrees.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isDarkMode
                  ? "bg-slate-900/40 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-sky-500 block">
                    {item.degree}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.field}
                  </h3>
                </div>
              </div>

              <div className="pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <p className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <FaUniversity size={13} className="text-slate-400" />
                  {item.institution}
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {item.location}
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {item.highlights.map((hl, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">·</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
