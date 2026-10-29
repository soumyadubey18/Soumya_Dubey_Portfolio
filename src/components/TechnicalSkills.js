import React, { useState } from "react";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaNodeJs,
  FaReact,
  FaTerminal,
  FaNetworkWired,
  FaDatabase,
  FaTools,
  FaGlobeAmericas,
  FaThLarge,
} from "react-icons/fa";
import {
  SiTerraform,
  SiSqlite,
  SiPostman,
  SiTypescript,
  SiHtml5,
  SiJira,
  SiUbuntu,
} from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";
import InteractiveSkillCloud from "./InteractiveSkillCloud";

const SKILL_DOMAINS = [
  {
    id: "aws",
    title: "AWS Cloud Infrastructure",
    subtitle: "AWS training completed · Core cloud services and networking",
    icon: <FaAws className="text-amber-500" size={24} />,
    borderColor: "hover:border-amber-500/50",
    glowColor: "from-amber-500/10 via-amber-500/5 to-transparent",
    badge: "Training Completed",
    badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    skills: [
      { name: "Amazon EC2", detail: "Linux instance launch, SSH access, and web server deployment", icon: <FaAws className="text-amber-500" /> },
      { name: "Amazon S3 & EBS", detail: "Cloud storage and attached block storage; practiced volume management", icon: <FaDatabase className="text-amber-500" /> },
      { name: "IAM", detail: "Identity and access management fundamentals", icon: <FaAws className="text-amber-500" /> },
      { name: "VPC & Subnets", detail: "Virtual network, subnet, and CIDR fundamentals", icon: <FaNetworkWired className="text-sky-400" /> },
      { name: "Route Tables & Internet Gateway", detail: "AWS network routing and internet connectivity", icon: <FaNetworkWired className="text-sky-400" /> },
      { name: "Security Groups", detail: "Instance-level network access rules", icon: <FaAws className="text-amber-500" /> },
    ],
  },
  {
    id: "linux",
    title: "Linux Systems Administration",
    subtitle: "Linux administration, command line, and shell scripting",
    icon: <FaLinux className="text-yellow-400" size={24} />,
    borderColor: "hover:border-yellow-500/50",
    glowColor: "from-yellow-500/10 via-yellow-500/5 to-transparent",
    badge: "Training Ongoing",
    badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    skills: [
      { name: "Linux Administration", detail: "Server administration with Ubuntu and AWS Linux environments", icon: <SiUbuntu className="text-orange-500" /> },
      { name: "SSH & Networking", detail: "Secure server access and networking fundamentals", icon: <FaTerminal className="text-slate-400" /> },
      { name: "Files, Permissions & Processes", detail: "Command-line file management, permissions, and process operations", icon: <FaLinux className="text-yellow-400" /> },
      { name: "Storage & Mounting", detail: "Linux storage management and volume mounting", icon: <FaDatabase className="text-yellow-400" /> },
      { name: "Bash & Shell Scripting", detail: "Shell scripting fundamentals and command-line workflows", icon: <FaTerminal className="text-slate-400" /> },
    ],
  },
  {
    id: "devops",
    title: "DevOps, IaC & CI/CD",
    subtitle: "Build automation, version control, and infrastructure as code",
    icon: <FaDocker className="text-sky-400" size={24} />,
    borderColor: "hover:border-sky-500/50",
    glowColor: "from-sky-500/10 via-sky-500/5 to-transparent",
    badge: "Hands-on Projects",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "Jenkins", detail: "Jenkinsfile-based build and deployment pipeline project", icon: <FaTools className="text-red-400" /> },
      { name: "Java, Maven & Tomcat", detail: "Java web application builds and Tomcat deployment workflow", icon: <FaTools className="text-orange-400" /> },
      { name: "Git & GitHub", detail: "Version control and storing pipeline definitions in GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub Actions", detail: "Automated Docker image build and deployment workflows", icon: <FaTools className="text-sky-400" /> },
      { name: "Terraform", detail: "Infrastructure provisioning labs for AWS resources", icon: <SiTerraform className="text-purple-400" /> },
      { name: "Ansible & CI/CD", detail: "Configuration management and continuous integration/delivery fundamentals", icon: <FaTools className="text-rose-400" /> },
    ],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    subtitle: "Docker projects with introductory Kubernetes and Helm",
    icon: <FaDocker className="text-sky-400" size={24} />,
    borderColor: "hover:border-sky-500/50",
    glowColor: "from-sky-500/10 via-sky-500/5 to-transparent",
    badge: "Kubernetes · Basic",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "Docker", detail: "Containerized website and CI/CD project using AWS ECR and EC2", icon: <FaDocker className="text-sky-400" /> },
      { name: "Kubernetes", detail: "Basic container orchestration knowledge", icon: <FaTools className="text-blue-400" /> },
      { name: "Helm", detail: "Basic Helm knowledge for Kubernetes deployments", icon: <FaTools className="text-indigo-400" /> },
      { name: "Amazon ECR", detail: "Container registry used in the Dockerized website project", icon: <FaAws className="text-amber-500" /> },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring & Logging",
    subtitle: "Cloud monitoring and introductory observability tools",
    icon: <FaNetworkWired className="text-emerald-400" size={22} />,
    borderColor: "hover:border-emerald-500/50",
    glowColor: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    badge: "Grafana / Prometheus · Basic",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "AWS CloudWatch", detail: "AWS monitoring and logging service fundamentals", icon: <FaAws className="text-amber-500" /> },
      { name: "Prometheus", detail: "Basic monitoring and metrics knowledge", icon: <FaNetworkWired className="text-orange-400" /> },
      { name: "Grafana", detail: "Basic dashboard and visualization knowledge", icon: <FaNetworkWired className="text-orange-500" /> },
    ],
  },
  {
    id: "software",
    title: "Programming, Web & APIs",
    subtitle: "Software development experience, web applications, and REST APIs",
    icon: <FaReact className="text-sky-400" size={24} />,
    borderColor: "hover:border-sky-500/50",
    glowColor: "from-sky-500/10 via-sky-500/5 to-transparent",
    badge: "Development Experience",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "Python", detail: "Python fundamentals and system-state monitoring project work", icon: <FaPython className="text-yellow-400" /> },
      { name: "JavaScript & TypeScript", detail: "Programming languages used in professional web development", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React.js", detail: "Frontend application development experience", icon: <FaReact className="text-sky-400" /> },
      { name: "Node.js & Express.js", detail: "Backend development and REST API experience", icon: <FaNodeJs className="text-green-500" /> },
      { name: "REST APIs", detail: "API development, integration, and troubleshooting", icon: <SiPostman className="text-orange-400" /> },
      { name: "HTML5, CSS3 & Swagger", detail: "Web fundamentals and API documentation/testing tools", icon: <SiHtml5 className="text-orange-500" /> },
    ],
  },
  {
    id: "tools",
    title: "Databases & Productivity Tools",
    subtitle: "Relational databases, issue tracking, and development environments",
    icon: <FaDatabase className="text-emerald-400" size={22} />,
    borderColor: "hover:border-emerald-500/50",
    glowColor: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    badge: "Development Tools",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "SQLite & PostgreSQL", detail: "Relational database technologies used in project work", icon: <SiSqlite className="text-blue-400" /> },
      { name: "JIRA", detail: "Issue tracking and defect investigation in a development team", icon: <SiJira className="text-blue-500" /> },
      { name: "VS Code", detail: "Code editing and development workflow", icon: <FaTools className="text-blue-400" /> },
      { name: "Git Bash & WSL Ubuntu", detail: "Command-line tools and Ubuntu environment on Windows", icon: <FaTerminal className="text-slate-400" /> },
    ],
  },
  {
    id: "ai-tools",
    title: "AI-Assisted Development",
    subtitle: "Generative AI tools for coding and troubleshooting support",
    icon: <FaTools className="text-violet-400" size={22} />,
    borderColor: "hover:border-violet-500/50",
    glowColor: "from-violet-500/10 via-violet-500/5 to-transparent",
    badge: "AI Tools",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    skills: [
      { name: "ChatGPT & GitHub Copilot", detail: "Generative AI tools for AI-assisted coding and troubleshooting", icon: <FaTools className="text-violet-400" /> },
    ],
  },
];

const TechnicalSkills = () => {
  const { isDarkMode } = useDarkMode();
  const [activeDomainId, setActiveDomainId] = useState("all");
  const [viewMode, setViewMode] = useState("both"); // "cloud" | "matrix" | "both"

  const filteredDomains =
    activeDomainId === "all"
      ? SKILL_DOMAINS
      : SKILL_DOMAINS.filter((d) => d.id === activeDomainId);

  return (
    <section
      id="skills"
      name="skills"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#090D16] border-slate-800/80 text-slate-100"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
              Technical Capabilities · Resume Verified
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Cloud, DevOps & Engineering Competencies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Resume-aligned technical capabilities across AWS, Linux, DevOps, containers, monitoring, software development, and AI-assisted tooling.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode("cloud")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "cloud"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FaGlobeAmericas size={11} />
              <span>Skill Cloud</span>
            </button>

            <button
              onClick={() => setViewMode("matrix")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "matrix"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FaThLarge size={11} />
              <span>Domain Matrix</span>
            </button>

            <button
              onClick={() => setViewMode("both")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "both"
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Show All</span>
            </button>
          </div>
        </div>

        {/* Feature 1: Floating Interactive Skill Cloud */}
        {(viewMode === "cloud" || viewMode === "both") && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Interactive Orbital Skill Cloud (Hover icons to inspect proficiency)
              </span>
            </div>
            <InteractiveSkillCloud />
          </div>
        )}

        {/* Feature 2: Domain Cards Bento Grid */}
        {(viewMode === "matrix" || viewMode === "both") && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Categorized Domain Matrix Breakdown
              </span>

              {/* Filter Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveDomainId("all")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                    activeDomainId === "all"
                      ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                      : isDarkMode
                      ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All Domains
                </button>
                {SKILL_DOMAINS.map((domain) => (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomainId(domain.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      activeDomainId === domain.id
                        ? "bg-sky-500 text-white border-sky-400 shadow-sm"
                        : isDarkMode
                        ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                        : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>{domain.title.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Domain Cards Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDomains.map((domain, index) => {
                // If total filtered cards is odd and this is the last card (e.g. Databases & Productivity Tools in All Domains), span both columns
                const isOddSpan =
                  filteredDomains.length % 2 !== 0 &&
                  index === filteredDomains.length - 1;

                return (
                  <div
                    key={domain.id}
                    className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
                      isOddSpan ? "md:col-span-2" : ""
                    } ${domain.borderColor} ${
                      isDarkMode
                        ? "bg-slate-900/50 border-slate-800/90"
                        : "bg-slate-50/70 border-slate-200"
                    }`}
                  >
                    {/* Subtle top corner ambient glow */}
                    <div
                      className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${domain.glowColor} pointer-events-none rounded-bl-full`}
                    />

                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                          {domain.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {domain.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {domain.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border shrink-0 ${domain.badgeColor}`}
                      >
                        {domain.badge}
                      </span>
                    </div>

                    {/* Skills List */}
                    <div
                      className={`mt-6 relative z-10 ${
                        isOddSpan
                          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 space-y-0"
                          : "space-y-3.5"
                      }`}
                    >
                      {domain.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-xl border transition-colors ${
                            isDarkMode
                              ? "bg-[#05080E]/70 border-slate-800/80 hover:border-slate-700"
                              : "bg-white border-slate-200/90 hover:border-slate-300 shadow-sm"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="text-sm mt-0.5 shrink-0">{skill.icon}</div>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                                {skill.name}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                                {skill.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Full-width bottom capability footer if spanning both columns */}
                    {isOddSpan && (
                      <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          <span>
                            Storage & Tooling Integration: Relational database modeling, container volumes, and SSH cloud development CLI
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px] flex-wrap">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            PostgreSQL / SQLite
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            WSL2 Ubuntu
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            Atlassian JIRA
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnicalSkills;
