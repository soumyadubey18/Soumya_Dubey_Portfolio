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
  SiPostgresql,
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
    subtitle: "Compute, Storage, IAM Governance & VPC Networking",
    icon: <FaAws className="text-amber-500" size={24} />,
    borderColor: "hover:border-amber-500/50",
    glowColor: "from-amber-500/10 via-amber-500/5 to-transparent",
    badge: "AWS Verified",
    badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    skills: [
      { name: "AWS EC2", detail: "Instance provisioning, AMI config, SSH key management & web server setup", icon: <FaAws className="text-amber-500" /> },
      { name: "AWS S3", detail: "Bucket policy governance, static artifact hosting & data encryption", icon: <FaAws className="text-amber-500" /> },
      { name: "AWS EBS", detail: "Attaching, ext4 formatting (mkfs), mounting volumes & /etc/fstab persistence", icon: <FaDatabase className="text-amber-500" /> },
      { name: "AWS IAM", detail: "Roles, users, JSON policy design & least-privilege access enforcement", icon: <FaAws className="text-amber-500" /> },
      { name: "AWS VPC", detail: "Custom VPC architecture, public/private subnets & CIDR block design", icon: <FaNetworkWired className="text-sky-400" /> },
      { name: "Route Tables & IGW", detail: "Routing tables configuration & Internet Gateway egress/ingress", icon: <FaNetworkWired className="text-sky-400" /> },
      { name: "Security Groups", detail: "Stateful network firewall rules controlling HTTP (80) & SSH (22)", icon: <FaAws className="text-amber-500" /> },
    ],
  },
  {
    id: "linux",
    title: "Linux Systems Administration",
    subtitle: "CLI Mastery, System Diagnostics, Storage & Shell Scripting",
    icon: <FaLinux className="text-yellow-400" size={24} />,
    borderColor: "hover:border-yellow-500/50",
    glowColor: "from-yellow-500/10 via-yellow-500/5 to-transparent",
    badge: "Ubuntu / Amazon Linux",
    badgeColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    skills: [
      { name: "Linux Server Administration", detail: "Ubuntu & Amazon Linux package management, system updates, systemctl services", icon: <SiUbuntu className="text-orange-500" /> },
      { name: "SSH & Key Authentication", detail: "Passwordless SSH login, key generation (ssh-keygen) & bastion access", icon: <FaTerminal className="text-slate-400" /> },
      { name: "File Management & Permissions", detail: "chmod, chown, user groups, file hierarchies & secure access modes", icon: <FaLinux className="text-yellow-400" /> },
      { name: "Storage & Mounting", detail: "lsblk, fdisk, mkfs (ext4), persistent mount via /etc/fstab, df -hT", icon: <FaDatabase className="text-yellow-400" /> },
      { name: "Process & System Diagnostics", detail: "top, htop, ps aux, kill, systemctl status, journalctl log inspection", icon: <FaTerminal className="text-slate-400" /> },
      { name: "Bash & Shell Automation", detail: "Cron schedules, backup automation scripts, log rotation & environment setup", icon: <FaTerminal className="text-slate-400" /> },
    ],
  },
  {
    id: "devops",
    title: "DevOps, Containers & CI/CD",
    subtitle: "Infrastructure as Code, Automated Pipelines & Container Registries",
    icon: <FaDocker className="text-sky-400" size={24} />,
    borderColor: "hover:border-sky-500/50",
    glowColor: "from-sky-500/10 via-sky-500/5 to-transparent",
    badge: "IaC & CI/CD",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "Terraform (IaC)", detail: "Declarative AWS infrastructure: init, plan, apply, destroy & state management", icon: <SiTerraform className="text-purple-400" /> },
      { name: "Docker Containerization", detail: "Multi-stage builds, Dockerfile authoring, images, containers & compose", icon: <FaDocker className="text-sky-400" /> },
      { name: "GitHub Actions CI/CD", detail: "Automated test, build, lint & cloud container deployment workflows", icon: <FaTools className="text-sky-400" /> },
      { name: "AWS ECR", detail: "Docker container image tagging, pushing, repository lifecycle & IAM access", icon: <FaAws className="text-amber-500" /> },
      { name: "Git Version Control", detail: "Feature branching, PR reviews, merge conflict resolution & semantic tagging", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
  {
    id: "software",
    title: "Programming, Web & APIs",
    subtitle: "Full-Stack Development, REST Contracts & System Telemetry",
    icon: <FaReact className="text-sky-400" size={24} />,
    borderColor: "hover:border-sky-500/50",
    glowColor: "from-sky-500/10 via-sky-500/5 to-transparent",
    badge: "1+ Years Production",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    skills: [
      { name: "Python", detail: "System telemetry scripting (psutil), Flask REST services & SHA-256 fingerprinting", icon: <FaPython className="text-yellow-400" /> },
      { name: "JavaScript & TypeScript", detail: "ES6+, async/await architectures, strict typing & event loop handling", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React.js", detail: "Component lifecycles, hooks, context state management & responsive UI design", icon: <FaReact className="text-sky-400" /> },
      { name: "Node.js & Express.js", detail: "REST API routing, JWT auth, custom middleware & HTTP request lifecycle", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Postman & Swagger", detail: "API endpoint validation, contract documentation & automated test suites", icon: <SiPostman className="text-orange-400" /> },
      { name: "HTML5 & CSS3", detail: "Semantic markup, modern Tailwind CSS layouts & cross-browser compatibility", icon: <SiHtml5 className="text-orange-500" /> },
    ],
  },
  {
    id: "tools",
    title: "Databases & Productivity Tools",
    subtitle: "Data Persistence, Agile Workflows & Developer Tooling",
    icon: <FaDatabase className="text-emerald-400" size={22} />,
    borderColor: "hover:border-emerald-500/50",
    glowColor: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    badge: "Enterprise Tooling",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "SQLite", detail: "Embedded relational storage for forensics snapshots & lightweight services", icon: <SiSqlite className="text-blue-400" /> },
      { name: "PostgreSQL", detail: "Relational database schema modeling, indexing & transaction handling", icon: <SiPostgresql className="text-sky-400" /> },
      { name: "JIRA", detail: "Agile/Scrum sprint workflows, defect tracking & fix verification", icon: <SiJira className="text-blue-500" /> },
      { name: "VS Code & Remote SSH", detail: "Cloud server editing via remote SSH extension & native debugging", icon: <FaTools className="text-blue-400" /> },
      { name: "Git Bash & WSL Ubuntu", detail: "Cross-platform Linux terminal environment and toolchains on Windows hosts", icon: <FaTerminal className="text-slate-400" /> },
      { name: "Database GUI & Query Tools", detail: "Interactive database inspection, SQL schema migration & connection management", icon: <FaDatabase className="text-emerald-400" /> },
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
              Interactive floating skill cloud and comprehensive matrix of technical capabilities spanning AWS cloud infrastructure, Linux systems administration, DevOps automation pipelines, and full-stack software development.
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
