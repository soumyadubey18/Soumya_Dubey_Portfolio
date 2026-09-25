import React, { useState } from "react";
import { FaTimes, FaCopy, FaCheck, FaExternalLinkAlt, FaPrint } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const ResumeModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useDarkMode();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `SOUMYA DUBEY
Associate Cloud Engineer | Junior DevOps Engineer | Cloud Support
Bengaluru, Karnataka | +91 9304596852 | dubeysoumya18@gmail.com
LinkedIn: linkedin.com/in/soumya-dubey-752aa818 | GitHub: github.com/soumyadubey18

PROFESSIONAL SUMMARY:
Software Developer with professional experience in React.js, Node.js, Express.js and REST APIs, transitioning into AWS Cloud and DevOps through hands-on training and infrastructure projects. Hands-on with AWS EC2, S3, EBS, IAM fundamentals, VPC and Security Groups, Linux administration, Python, Git/GitHub, Docker, Terraform and CI/CD fundamentals. Experienced in application troubleshooting, API testing, defect investigation and technical problem solving.

TECHNICAL SKILLS:
- Cloud: AWS EC2, S3, EBS, IAM, VPC, Subnets, Route Tables, Internet Gateway, Security Groups
- Linux: Linux administration, SSH, file management, permissions, processes, storage, mounting, networking, Bash/shell scripting
- DevOps: Git, GitHub, Docker, Terraform, GitHub Actions, CI/CD fundamentals
- Programming: Python, JavaScript, TypeScript, Node.js, Express.js
- Web & APIs: React.js, HTML5, CSS3, REST APIs, Postman, Swagger
- Databases & Tools: SQLite, PostgreSQL, JIRA, VS Code, Git Bash, WSL Ubuntu

PROFESSIONAL EXPERIENCE:
- Besant Technologies — AWS & DevOps Trainee (Jul 2026 – Present, Bengaluru)
- Freelance Web Developer — Paathshala Ascension (Mar 2023 – May 2023)
- Indpro AB — Software Developer / Trainee Engineer (May 2022 – Feb 2023)

EDUCATION:
- B.Tech in Electronics & Communication Engineering — Sarala Birla University
- Diploma in Electronics & Communication Engineering — BITT Polytechnic, Ranchi`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl p-6 sm:p-10 transition-all ${
          isDarkMode
            ? "bg-[#0B0F17] border-slate-800 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800 bg-inherit">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Verified Resume Profile · 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
              title="Copy plain text resume"
            >
              {copied ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
              title="Print resume"
            >
              <FaPrint />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white"
                  : "border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            SOUMYA DUBEY
          </h1>
          <p className="text-base sm:text-lg font-semibold text-sky-500 mt-1">
            Associate Cloud Engineer · Junior DevOps Engineer · Cloud Support
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3">
            <span>Bengaluru, Karnataka</span>
            <span aria-hidden="true">·</span>
            <a href="tel:+919304596852" className="hover:text-sky-500">
              +91 9304596852
            </a>
            <span aria-hidden="true">·</span>
            <a href="mailto:dubeysoumya18@gmail.com" className="hover:text-sky-500">
              dubeysoumya18@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://linkedin.com/in/soumya-dubey-752aa818"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 inline-flex items-center gap-1"
            >
              LinkedIn <FaExternalLinkAlt size={10} />
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://github.com/soumyadubey18"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 inline-flex items-center gap-1"
            >
              GitHub <FaExternalLinkAlt size={10} />
            </a>
          </div>
        </div>

        {/* Section: Professional Summary */}
        <div className="py-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Software Developer with professional experience in React.js, Node.js, Express.js and REST APIs, transitioning into AWS Cloud and DevOps through hands-on training and infrastructure projects. Hands-on with AWS EC2, S3, EBS, IAM fundamentals, VPC and Security Groups, Linux administration, Python, Git/GitHub, Docker, Terraform and CI/CD fundamentals. Experienced in application troubleshooting, API testing, defect investigation and technical problem solving.
          </p>
        </div>

        {/* Section: Technical Skills */}
        <div className="py-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-4">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Cloud (AWS):
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                EC2, S3, EBS, IAM, VPC, Subnets, Route Tables, Internet Gateway, Security Groups
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Linux & Systems:
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Linux administration, SSH, file management, permissions, processes, storage, mounting, networking, Bash/shell scripting
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                DevOps & CI/CD:
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Git, GitHub, Docker, Terraform, GitHub Actions, CI/CD fundamentals
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Programming & Runtimes:
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Python, JavaScript, TypeScript, Node.js, Express.js
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Web & APIs:
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                React.js, HTML5, CSS3, REST APIs, Postman, Swagger
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Databases & Tooling:
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                SQLite, PostgreSQL, JIRA, VS Code, Git Bash, WSL Ubuntu
              </p>
            </div>
          </div>
        </div>

        {/* Section: Professional Experience */}
        <div className="py-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-4">
            Professional Experience & Training
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  Besant Technologies — AWS & DevOps Trainee
                </p>
                <span className="text-xs text-slate-500">Jul 2026 – Present · Bengaluru</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>AWS completed; Linux and Python ongoing; DevOps training includes Git, Docker, Terraform, CI/CD and shell scripting.</li>
                <li>Practiced AWS EC2, S3, EBS, IAM fundamentals, VPC, Security Groups, SSH and Linux server administration.</li>
                <li>Built hands-on infrastructure labs using Terraform and practiced Git/GitHub workflows and CI/CD automation.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  Freelance Web Developer — Paathshala Ascension
                </p>
                <span className="text-xs text-slate-500">Mar 2023 – May 2023</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Developed and updated website functionality using HTML, CSS and JavaScript.</li>
                <li>Investigated UI and functional issues and implemented required fixes.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  Indpro AB — Software Developer / Trainee Engineer
                </p>
                <span className="text-xs text-slate-500">May 2022 – Feb 2023</span>
              </div>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Developed and maintained web application features using React.js, JavaScript/TypeScript, Node.js and Express.js.</li>
                <li>Developed and integrated REST APIs and investigated frontend, backend and API issues during development and testing.</li>
                <li>Used Postman and Swagger to validate API behavior and investigate integration issues.</li>
                <li>Tracked defects in JIRA, reproduced reported issues, collaborated with developers and verified fixes.</li>
                <li>Worked in Agile/Scrum and performed browser-based testing and troubleshooting.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Projects */}
        <div className="py-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-4">
            Key Engineering Projects
          </h2>
          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                INFRAFORENSICS — Infrastructure State Reconstruction & Incident Forensics Platform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                Python · psutil · SQLite · Git/GitHub
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Continuous system state capture (CPU, memory, disk, processes), historical snapshots in SQLite for time-series infrastructure audits, and cryptographic Infrastructure DNA fingerprinting with anomaly severity classification.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                Dockerized Website CI/CD
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                Docker · GitHub Actions · AWS ECR · EC2
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Containerized web workload with automated GitHub Actions pipeline pushing reproducible images to AWS ECR and deploying directly onto AWS EC2 instances.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                AWS Infrastructure Provisioning with Terraform
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                Terraform · AWS EC2 · S3 · SSH
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Infrastructure as Code workflow using Terraform init/plan/apply to provision and manage EC2 instances, S3 storage buckets, and secure networking rules.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-800 dark:text-slate-100">
                Training & Placement Management System — CareerBridge
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                React · TypeScript · Node.js · Express · Prisma · SQLite
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Full-stack system with RBAC for 4 roles (ADMIN, TRAINER, PLACEMENT, STUDENT), JWT auth, Zod validation, and Prisma ORM for complete placement pipeline lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Education */}
        <div className="pt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-4">
            Education
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  B.Tech — Electronics & Communication Engineering
                </p>
                <p className="text-slate-500">Sarala Birla University</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100">
                  Diploma — Electronics & Communication Engineering
                </p>
                <p className="text-slate-500">BITT Polytechnic, Ranchi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
