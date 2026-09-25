import React, { useState } from "react";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAws,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const [filterType, setFilterType] = useState("all");

  const experiences = [
    {
      id: "besant",
      category: "cloud",
      role: "AWS & DevOps Trainee",
      organization: "Besant Technologies",
      location: "Bengaluru, Karnataka",
      period: "Jul 2026 – Present",
      isCurrent: true,
      icon: <FaAws className="text-amber-500" size={18} />,
      accentColor: "border-amber-500/40 shadow-amber-500/5",
      badgeText: "Active Cloud Immersion",
      badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/30",
      summary:
        "Comprehensive hands-on immersion in AWS Cloud Architecture, Linux server administration, Docker containerization, Terraform Infrastructure as Code, and CI/CD automation pipelines.",
      bullets: [
        "AWS completed: Designed and provisioned EC2 instances, S3 storage with encryption, EBS block storage, IAM access governance, custom VPC networks, Subnets, and Security Groups.",
        "Linux and Python ongoing: Command-line server diagnostics, SSH key authentication, process management, storage volume ext4 formatting/mounting, and Bash automation scripts.",
        "DevOps training: Built hands-on infrastructure labs using Terraform (init, plan, apply, state tracking) and automated containerized CI/CD workflows using Git, Docker, and GitHub Actions.",
      ],
      skills: ["AWS EC2", "AWS S3", "AWS EBS", "AWS IAM", "AWS VPC", "Linux CLI", "Terraform", "Docker", "CI/CD"],
    },
    {
      id: "paathshala",
      category: "web",
      role: "Freelance Web Developer",
      organization: "Paathshala Ascension",
      location: "Remote / Hybrid",
      period: "Mar 2023 – May 2023",
      isCurrent: false,
      icon: <FaLaptopCode className="text-sky-400" size={18} />,
      accentColor: "border-sky-500/30 shadow-sky-500/5",
      badgeText: "Client Engineering",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
      summary:
        "Engineered client website features, optimized user interface performance, and resolved functional cross-browser defects.",
      bullets: [
        "Developed and updated client website functionality using HTML5, CSS3 and modern JavaScript.",
        "Investigated user interface rendering glitches and functional API issues, implementing verified production fixes.",
        "Improved page responsiveness and ensured seamless mobile navigation across multiple viewports.",
      ],
      skills: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Defect Triage", "Cross-Browser Testing"],
    },
    {
      id: "indpro",
      category: "software",
      role: "Software Developer / Trainee Engineer",
      organization: "Indpro AB",
      location: "Bengaluru, Karnataka",
      period: "May 2022 – Feb 2023",
      isCurrent: false,
      icon: <FaCode className="text-emerald-400" size={18} />,
      accentColor: "border-emerald-500/30 shadow-emerald-500/5",
      badgeText: "Full-Time Production",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      summary:
        "Full-lifecycle web software engineering delivering React.js, TypeScript, Node.js, and Express REST APIs within an Agile/Scrum product team.",
      bullets: [
        "Developed and maintained web application features using React.js, JavaScript/TypeScript, Node.js and Express.js.",
        "Developed and integrated REST APIs and investigated frontend, backend, and API integration issues during development and testing.",
        "Utilized Postman and Swagger to validate API endpoint contracts, response structures, and HTTP status code behaviors.",
        "Tracked defects in JIRA, reproduced reported issues, collaborated closely with senior engineers, and verified fixes across test environments.",
        "Participated in Agile/Scrum standups, sprint reviews, and executed browser-based troubleshooting.",
      ],
      skills: ["React.js", "TypeScript", "Node.js", "Express.js", "REST APIs", "Postman", "Swagger", "JIRA", "Agile/Scrum"],
    },
  ];

  const filtered =
    filterType === "all"
      ? experiences
      : experiences.filter((e) => e.category === filterType);

  return (
    <section
      id="experience"
      name="experience"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#090D16] border-slate-800/80 text-slate-100"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Professional Track · Experience & Hands-on Training
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Career Timeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A proven record of full-stack software development at Indpro AB, combined with advanced cloud architecture and DevOps automation training at Besant Technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filterType === "all"
                ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                : isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            All Tracks ({experiences.length})
          </button>
          <button
            onClick={() => setFilterType("cloud")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filterType === "cloud"
                ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                : isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            AWS & DevOps Training
          </button>
          <button
            onClick={() => setFilterType("software")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filterType === "software"
                ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                : isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            Full-Stack Software Engineer
          </button>
          <button
            onClick={() => setFilterType("web")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filterType === "web"
                ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                : isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            Freelance Web Development
          </button>
        </div>

        {/* Timeline Stream */}
        <div className="space-y-8 max-w-4xl relative before:absolute before:inset-0 before:left-5 md:before:left-8 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800/80 before:z-0">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative z-10 pl-12 md:pl-20 transition-all`}
            >
              {/* Timeline Node Icon Indicator */}
              <div
                className={`absolute left-0 md:left-3 top-6 w-10 h-10 rounded-2xl border flex items-center justify-center shadow-md ${
                  item.isCurrent
                    ? "bg-sky-500 text-white border-sky-400 ring-4 ring-sky-500/20"
                    : isDarkMode
                    ? "bg-slate-900 border-slate-700 text-slate-300"
                    : "bg-white border-slate-300 text-slate-700"
                }`}
              >
                {item.icon}
              </div>

              {/* Card Container */}
              <div
                className={`p-6 sm:p-8 rounded-3xl border transition-all hover:shadow-xl ${
                  item.isCurrent
                    ? isDarkMode
                      ? "bg-slate-900/80 border-sky-500/40 shadow-sky-500/5 ring-1 ring-sky-500/20"
                      : "bg-white border-sky-300 shadow-md ring-1 ring-sky-300/30"
                    : isDarkMode
                    ? "bg-slate-900/50 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">
                        {item.organization}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <FaMapMarkerAlt size={10} className="text-amber-500" />
                        {item.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-md border font-semibold ${item.badgeColor}`}
                    >
                      {item.badgeText}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <FaCalendarAlt size={11} className="text-sky-500" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Accomplishment Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-sky-500 mt-1 shrink-0" size={13} />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Chip Tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1">
                    Tech:
                  </span>
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
