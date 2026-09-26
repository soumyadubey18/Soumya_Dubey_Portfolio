import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAws,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaChevronDown,
  FaChevronUp,
  FaLayerGroup,
  FaBriefcase,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const TIMELINE_EXPERIENCES = [
  {
    id: "besant",
    category: "cloud",
    role: "AWS & DevOps Trainee",
    organization: "Besant Technologies",
    location: "Bengaluru, Karnataka",
    period: "Jul 2026 – Present",
    isCurrent: true,
    statusText: "Active Immersion",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    nodeColor: "bg-amber-500 text-white border-amber-400 ring-4 ring-amber-500/20",
    icon: <FaAws size={20} />,
    headline:
      "Enterprise AWS cloud architecture, Linux server administration, Docker containerization, Terraform IaC, and automated CI/CD pipelines.",
    overview:
      "Intensive practical program designing production-grade cloud environments on Amazon Web Services. Hands-on configuration of virtual networks, compute instances, block storage, and reproducible infrastructure code.",
    keyHighlights: [
      "AWS Cloud Architecture: Deep hands-on provisioning of EC2, S3 bucket storage, EBS volume lifecycle, IAM least-privilege policies, and custom VPC networking.",
      "Infrastructure as Code (IaC): Authored modular Terraform blueprints automating resource deployment with deterministic state management.",
      "Containerization & CI/CD: Built multi-stage Docker images, orchestrated automated testing with GitHub Actions, and established deployment pipelines to AWS ECR and EC2.",
      "Linux Systems Administration: Shell scripting (Bash), systemd daemon management, permissions, and network troubleshooting.",
    ],
    categories: {
      cloud: ["AWS EC2", "AWS S3", "AWS EBS", "AWS VPC", "AWS IAM", "Security Groups"],
      devops: ["Terraform", "Docker", "GitHub Actions CI/CD", "AWS ECR", "Bash Scripting"],
      os: ["Linux CLI", "systemd", "SSH Key Management", "Disk Partitioning (ext4)"],
    },
    metrics: [
      { label: "Cloud Platform", val: "AWS ap-south-1" },
      { label: "IaC Tool", val: "Terraform 1.x" },
      { label: "Workload Runtime", val: "Docker Containers" },
    ],
  },
  {
    id: "paathshala",
    category: "web",
    role: "Freelance Web Developer",
    organization: "Paathshala Ascension",
    location: "Remote / Hybrid",
    period: "Mar 2023 – May 2023",
    isCurrent: false,
    statusText: "Client Contract",
    statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    nodeColor: "bg-sky-500 text-white border-sky-400 ring-4 ring-sky-500/20",
    icon: <FaLaptopCode size={18} />,
    headline:
      "Developed responsive client-facing web application features, resolved UI layout defects, and enhanced cross-browser performance.",
    overview:
      "Partnered with project stakeholders to deliver high-priority responsive UI modules, conduct cross-browser compatibility assessments, and implement rapid bug fixes across diverse device viewports.",
    keyHighlights: [
      "Engineered dynamic web components using semantic HTML5, modern CSS3 styling, and vanilla JavaScript.",
      "Diagnosed and patched layout rendering anomalies, achieving seamless responsiveness across mobile, tablet, and desktop viewports.",
      "Conducted defect triage and implemented cross-browser compatibility patches for Chrome, Firefox, and Safari.",
    ],
    categories: {
      frontend: ["JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Layouts"],
      quality: ["Cross-Browser QA", "Defect Triage", "Performance Tuning"],
    },
    metrics: [
      { label: "Delivery Model", val: "Agile Deliverables" },
      { label: "Testing Scope", val: "Multi-device QA" },
    ],
  },
  {
    id: "indpro",
    category: "software",
    role: "Software Developer / Trainee Engineer",
    organization: "Indpro AB",
    location: "Bengaluru, Karnataka",
    period: "May 2022 – Feb 2023",
    isCurrent: false,
    statusText: "Full-Time Production",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    nodeColor: "bg-emerald-500 text-white border-emerald-400 ring-4 ring-emerald-500/20",
    icon: <FaCode size={18} />,
    headline:
      "Full-stack software engineering delivering React.js frontends, TypeScript modules, Node.js REST APIs, and Agile team delivery.",
    overview:
      "Contributed to production enterprise applications within an international software consulting firm. Designed modular React user interfaces, engineered REST endpoints with Express.js, and validated backend services using Postman and Swagger.",
    keyHighlights: [
      "Built and maintained reactive single-page application features utilizing React.js, TypeScript, and state management hooks.",
      "Developed secure RESTful backend endpoints in Node.js/Express and integrated relational database queries.",
      "Automated API contract validation using Postman collections and OpenAPI/Swagger documentation.",
      "Tracked and triaged software defects in JIRA, participating in two-week Agile/Scrum sprint cycles and peer code reviews.",
      "Collaborated closely with cross-functional European clients and senior architects to ensure rigorous quality standards.",
    ],
    categories: {
      frontend: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "Component Architecture"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "JSON", "Prisma/SQL"],
      tooling: ["Postman", "Swagger / OpenAPI", "JIRA", "Git / GitHub", "Scrum / Agile"],
    },
    metrics: [
      { label: "Methodology", val: "Agile / Scrum" },
      { label: "API Testing", val: "Postman & Swagger" },
      { label: "Team Scope", val: "Enterprise Consulting" },
    ],
  },
  {
    id: "education",
    category: "academic",
    role: "B.E. in Information Science & Engineering",
    organization: "Dayananda Sagar College of Engineering",
    location: "Bengaluru, Karnataka",
    period: "Aug 2018 – Jul 2022",
    isCurrent: false,
    statusText: "Degree Conferred · 8.5 CGPA",
    statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    nodeColor: "bg-purple-600 text-white border-purple-400 ring-4 ring-purple-500/20",
    icon: <FaGraduationCap size={18} />,
    headline:
      "Foundational undergraduate computer engineering coursework emphasizing operating systems, networks, data structures, and database design.",
    overview:
      "Graduated with First Class Distinction (8.5 / 10 CGPA). Built solid engineering foundations in system architecture, distributed networking, algorithms, and practical software laboratory projects.",
    keyHighlights: [
      "Comprehensive coursework: Operating Systems (Linux/Unix), Computer Networks (TCP/IP, Routing, Subnetting), Database Management Systems (SQL), and Data Structures & Algorithms.",
      "Led capstone engineering project combining embedded systems and network telemetry.",
      "Active participant in technical symposiums, Linux workshops, and coding hackathons.",
    ],
    categories: {
      theory: ["Operating Systems", "Computer Networks", "Database Systems (DBMS)", "Data Structures"],
      academic: ["CGPA: 8.5 / 10.0", "First Class Distinction", "VTU Affiliated"],
    },
    metrics: [
      { label: "Grade", val: "8.5 / 10 CGPA" },
      { label: "Standing", val: "First Class Distinction" },
      { label: "Duration", val: "4-Year Bachelor's" },
    ],
  },
];

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const [filterType, setFilterType] = useState("all");
  // Default: first item (active role) is expanded initially for high-impact visibility
  const [expandedIds, setExpandedIds] = useState(new Set(["besant"]));

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(TIMELINE_EXPERIENCES.map((e) => e.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const filtered =
    filterType === "all"
      ? TIMELINE_EXPERIENCES
      : TIMELINE_EXPERIENCES.filter((e) => e.category === filterType);

  const areAllExpanded = filtered.every((e) => expandedIds.has(e.id));

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              Professional Career Track & Milestones
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Engineering Career Timeline
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Interactive vertical timeline illustrating hands-on AWS & DevOps engineering immersion, production enterprise software development at Indpro AB, and undergraduate computer science foundation.
            </p>
          </div>

          {/* Global Expand / Collapse Control */}
          <div className="flex items-center gap-3">
            <button
              onClick={areAllExpanded ? collapseAll : expandAll}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all shadow-sm ${
                isDarkMode
                  ? "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <FaLayerGroup size={11} className="text-sky-500" />
              <span>{areAllExpanded ? "Collapse All Details" : "Expand All Details"}</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200 dark:border-slate-800">
          {[
            { id: "all", label: `All Milestones (${TIMELINE_EXPERIENCES.length})` },
            { id: "cloud", label: "AWS & DevOps" },
            { id: "software", label: "Full-Stack Software" },
            { id: "web", label: "Web Development" },
            { id: "academic", label: "Education" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                filterType === tab.id
                  ? "bg-sky-500 text-white border-sky-400 shadow-sm shadow-sky-500/25"
                  : isDarkMode
                  ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Vertical Spine with subtle gradient */}
          <div className="absolute top-6 bottom-6 left-6 md:left-8 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-700/50" />

          {/* Timeline Items Stream */}
          <div className="space-y-10">
            {filtered.map((item, idx) => {
              const isExpanded = expandedIds.has(item.id);

              return (
                <div key={item.id} className="relative pl-14 md:pl-20 group">
                  {/* Timeline Milestone Node Icon */}
                  <div
                    className={`absolute left-1.5 md:left-3 top-5 w-10 h-10 rounded-2xl border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10 ${item.nodeColor}`}
                  >
                    {item.icon}
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`rounded-3xl border transition-all duration-300 shadow-md ${
                      item.isCurrent
                        ? isDarkMode
                          ? "bg-slate-900/90 border-sky-500/40 shadow-sky-500/10 ring-1 ring-sky-500/20"
                          : "bg-white border-sky-300 shadow-lg ring-1 ring-sky-300/40"
                        : isDarkMode
                        ? "bg-[#0B0F19]/90 border-slate-800 hover:border-slate-700"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Clickable Header Bar (Expands / Collapses Entry) */}
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="p-6 sm:p-7 cursor-pointer select-none"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-sky-500 uppercase tracking-wider flex items-center gap-1.5">
                              <FaBriefcase size={11} />
                              {item.organization}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                              <FaMapMarkerAlt size={10} className="text-amber-500" />
                              {item.location}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            {item.role}
                          </h3>
                        </div>

                        {/* Status & Period Badge */}
                        <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                          <span
                            className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border ${item.statusColor}`}
                          >
                            {item.statusText}
                          </span>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
                            <FaCalendarAlt size={11} className="text-sky-500" />
                            {item.period}
                          </span>
                        </div>
                      </div>

                      {/* Brief Headline */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {item.headline}
                      </p>

                      {/* Key Metric Chips Row */}
                      {item.metrics && (
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {item.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1"
                            >
                              <span className="text-slate-400">{m.label}:</span>
                              <span className="font-semibold text-slate-900 dark:text-white">
                                {m.val}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Expand / Collapse Action Trigger Bar */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-sky-500 hover:text-sky-400 transition-colors">
                        <span className="flex items-center gap-1.5">
                          <span>{isExpanded ? "Collapse full breakdown" : "Expand full responsibilities & tech stack"}</span>
                        </span>
                        <div className="p-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-500">
                          {isExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Detailed Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-7 sm:px-7 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
                            {/* Detailed Overview */}
                            <div className="pt-5 mb-5">
                              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2">
                                Role Overview & Objectives
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                {item.overview}
                              </p>
                            </div>

                            {/* Responsibilities & Achievements */}
                            <div className="mb-6">
                              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-3">
                                Key Contributions & Architectures
                              </h4>
                              <ul className="space-y-2.5">
                                {item.keyHighlights.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                    <FaCheckCircle className="text-sky-500 mt-1 shrink-0" size={13} />
                                    <span className="leading-relaxed">{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Categorized Tech Competencies */}
                            {item.categories && (
                              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-3">
                                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                                  Technologies & Tools Leveraged
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                  {Object.entries(item.categories).map(([group, skills]) => (
                                    <div
                                      key={group}
                                      className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
                                    >
                                      <span className="text-[10px] font-mono uppercase font-bold text-sky-500 block mb-1.5">
                                        {group}
                                      </span>
                                      <div className="flex flex-wrap gap-1">
                                        {skills.map((s, sIdx) => (
                                          <span
                                            key={sIdx}
                                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                                          >
                                            {s}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
