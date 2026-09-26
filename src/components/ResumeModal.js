import React, { useState } from "react";
import {
  FaTimes,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
  FaPrint,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const ResumeModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useDarkMode();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plainResumeText = `SOUMYA DUBEY
Associate Cloud Engineer | Junior DevOps Engineer | Cloud Support
Bengaluru, Karnataka | +91 9304596852 | dubeysoumya18@gmail.com | LinkedIn: linkedin.com/in/soumya-dubey-752aa8185 | GitHub: github.com/soumyadubey18 | Portfolio: soumya-portfolio-18.s3-website.ap-south-1.amazonaws.com

PROFESSIONAL SUMMARY
Software Developer with professional experience in React.js, Node.js, Express.js and REST APIs, transitioning into AWS Cloud and DevOps through hands-on training and infrastructure projects. Hands-on with AWS EC2, S3, EBS, IAM fundamentals, VPC and Security Groups, Linux administration, Python, Git/GitHub, Docker, Terraform and CI/CD fundamentals. Experienced in application troubleshooting, API testing, defect investigation and technical problem solving.

TECHNICAL SKILLS
Cloud: AWS EC2, S3, EBS, IAM, VPC, Subnets, Route Tables, Internet Gateway, Security Groups
Linux: Linux administration, SSH, file management, permissions, processes, storage, mounting, networking, Bash/shell scripting
DevOps: Git, GitHub, Docker, Terraform, GitHub Actions, CI/CD fundamentals
Programming: Python, JavaScript, TypeScript, Node.js, Express.js
Web & APIs: React.js, HTML5, CSS3, REST APIs, Postman, Swagger
Databases & Tools: SQLite, PostgreSQL, JIRA, VS Code, Git Bash, WSL Ubuntu

PROFESSIONAL EXPERIENCE
Indpro AB — Software Developer / Trainee Engineer | May 2022 – Feb 2023
• Developed and maintained web application features using React.js, JavaScript/TypeScript, Node.js and Express.js.
• Developed and integrated REST APIs and investigated frontend, backend and API issues during development and testing.
• Used Postman and Swagger to validate API behavior and investigate integration issues.
• Tracked defects in JIRA, reproduced reported issues, collaborated with developers and verified fixes.
• Worked in Agile/Scrum and performed browser-based testing and troubleshooting.

Freelance Web Developer — Paathshala Ascension | Mar 2023 – May 2023
• Developed and updated website functionality using HTML, CSS and JavaScript.
• Investigated UI and functional issues and implemented required fixes.

AWS & DEVOPS TRAINING
Besant Technologies — AWS & DevOps Trainee | Jul 2026 – Present | Bengaluru
• AWS completed; Linux and Python ongoing; DevOps training includes Git, Docker, Terraform, CI/CD and shell scripting.
• Practiced AWS EC2, S3, EBS, IAM fundamentals, VPC, Security Groups, SSH and Linux server administration.
• Built hands-on infrastructure labs using Terraform and practiced Git/GitHub workflows and CI/CD automation.

PROJECTS
INFRAFORENSICS — Infrastructure State Reconstruction & Incident Forensics Platform — Python, psutil, SQLite, Git/GitHub
• Building a local infrastructure forensics platform that continuously captures system state such as CPU, memory, disk usage, process count, hostname and timestamps.
• Stores historical snapshots in SQLite so infrastructure states can be compared across time and used as evidence during troubleshooting.
• Generates Infrastructure DNA fingerprints from system state and detects differences between previous and current snapshots.
• Classifies detected changes by severity to help distinguish normal runtime variation from potentially significant infrastructure changes.
• Developing the project incrementally toward incident timelines, deployment correlation and forensic reconstruction workflows.

Dockerized Website CI/CD — Docker, GitHub Actions, AWS ECR, EC2
• Containerized a static website using Docker and practiced building reproducible container images.
• Created a GitHub Actions workflow to automate image build and push operations.
• Used AWS ECR as the container image registry and deployed the containerized workload on an EC2 environment.
• Practiced the application flow from source-code change to container image and cloud deployment.

AWS Infrastructure Provisioning with Terraform — Terraform, AWS EC2, S3, SSH
• Provisioned AWS EC2 and S3 resources using Terraform instead of creating infrastructure manually.
• Practiced the Terraform workflow: init, plan and apply, along with variables and state inspection.
• Configured an EC2 instance, connected through SSH and worked with security/access requirements.
• Used Terraform state inspection to understand the resources managed by infrastructure as code.

AWS EC2 Linux Web Server — AWS EC2, Linux, Apache/httpd, EBS
• Launched and accessed a Linux EC2 instance through SSH and configured Apache/httpd as a web server.
• Created and served an HTML page from the EC2 instance and configured Security Group HTTP access.
• Practiced Linux administration, file management, disk usage and server troubleshooting commands.
• Worked with EBS storage by attaching, formatting, mounting and unmounting volumes.

Smart Institute Attendance System — Python, Flask, SQLite
• Built an attendance application using Python Flask and SQLite for attendance recording and data persistence.
• Implemented duplicate-prevention logic to avoid repeated attendance records.
• Added network/IP-based access restrictions so attendance can be limited to an approved institute network.
• Practiced application debugging, database interaction and validation of attendance workflows.

Training & Placement Management System — CareerBridge — React, TypeScript, Node.js, Express, Prisma, SQLite
• Built a full-stack management system covering students, batches, attendance, mock tests, interviews, projects, companies and placement applications.
• Developed a React/TypeScript/Vite frontend with Node.js/Express REST APIs and Prisma ORM with SQLite persistence.
• Implemented JWT authentication, bcrypt password hashing, Zod request validation and role-based authorization for ADMIN, TRAINER, PLACEMENT and STUDENT roles.
• Designed relational data models and Prisma migrations and implemented protected API workflows for dashboards, student management, attendance, projects and placement openings.

EDUCATION
B.Tech — Electronics & Communication Engineering | Sarala Birla University
Diploma — Electronics & Communication Engineering | BITT Polytechnic, Ranchi`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([plainResumeText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "Soumya_Dubey_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto resume-modal-overlay"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl p-6 sm:p-10 transition-all resume-print-container ${
          isDarkMode
            ? "bg-[#0B0F17] border-slate-800 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions - Hidden during Print */}
        <div className="sticky top-0 z-10 flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800 bg-inherit no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Verified 2026 Resume · ATS Formatted
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
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>
            <button
              onClick={handleDownloadTxt}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
              title="Download ATS Resume as Text File"
            >
              <FaDownload size={11} />
              <span>Download .txt</span>
            </button>
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
              title="Print or Save as PDF"
            >
              <FaPrint size={11} />
              <span>Print / PDF</span>
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

        {/* ================= RESUME DOCUMENT BODY ================= */}
        <div className="resume-printable-area font-sans">
          {/* Header */}
          <div className="text-center pb-5 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              SOUMYA DUBEY
            </h1>
            <p className="text-sm sm:text-base font-semibold text-sky-500 mt-1">
              Associate Cloud Engineer | Junior DevOps Engineer | Cloud Support
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-2.5">
              <span>Bengaluru, Karnataka</span>
              <span aria-hidden="true">|</span>
              <a href="tel:+919304596852" className="hover:text-sky-500 text-inherit">
                +91 9304596852
              </a>
              <span aria-hidden="true">|</span>
              <a href="mailto:dubeysoumya18@gmail.com" className="hover:text-sky-500 text-inherit">
                dubeysoumya18@gmail.com
              </a>
              <span aria-hidden="true">|</span>
              <a
                href="https://www.linkedin.com/in/soumya-dubey-752aa8185"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 inline-flex items-center gap-1 text-inherit"
              >
                LinkedIn: linkedin.com/in/soumya-dubey-752aa8185
                <FaExternalLinkAlt size={9} className="no-print opacity-70" />
              </a>
              <span aria-hidden="true">|</span>
              <a
                href="https://github.com/soumyadubey18"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 inline-flex items-center gap-1 text-inherit"
              >
                GitHub: github.com/soumyadubey18
                <FaExternalLinkAlt size={9} className="no-print opacity-70" />
              </a>
              <span aria-hidden="true">|</span>
              <a
                href="http://soumya-portfolio-18.s3-website.ap-south-1.amazonaws.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-500 inline-flex items-center gap-1 text-inherit"
              >
                Portfolio: soumya-portfolio-18.s3-website.ap-south-1.amazonaws.com
                <FaExternalLinkAlt size={9} className="no-print opacity-70" />
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div className="py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono mb-2 text-sky-500">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300">
              Software Developer with professional experience in React.js, Node.js, Express.js and REST APIs, transitioning into AWS Cloud and DevOps through hands-on training and infrastructure projects. Hands-on with AWS EC2, S3, EBS, IAM fundamentals, VPC and Security Groups, Linux administration, Python, Git/GitHub, Docker, Terraform and CI/CD fundamentals. Experienced in application troubleshooting, API testing, defect investigation and technical problem solving.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono mb-2 text-sky-500">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
              <p>
                <strong className="text-slate-900 dark:text-white">Cloud:</strong>{" "}
                AWS EC2, S3, EBS, IAM, VPC, Subnets, Route Tables, Internet Gateway, Security Groups
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Linux:</strong>{" "}
                Linux administration, SSH, file management, permissions, processes, storage, mounting, networking, Bash/shell scripting
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">DevOps:</strong>{" "}
                Git, GitHub, Docker, Terraform, GitHub Actions, CI/CD fundamentals
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Programming:</strong>{" "}
                Python, JavaScript, TypeScript, Node.js, Express.js
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Web & APIs:</strong>{" "}
                React.js, HTML5, CSS3, REST APIs, Postman, Swagger
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Databases & Tools:</strong>{" "}
                SQLite, PostgreSQL, JIRA, VS Code, Git Bash, WSL Ubuntu
              </p>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono mb-3 text-sky-500">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {/* Indpro AB */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                  <p className="font-bold text-slate-900 dark:text-white">
                    Indpro AB — Software Developer / Trainee Engineer
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    May 2022 – Feb 2023
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Developed and maintained web application features using React.js, JavaScript/TypeScript, Node.js and Express.js.</li>
                  <li>Developed and integrated REST APIs and investigated frontend, backend and API issues during development and testing.</li>
                  <li>Used Postman and Swagger to validate API behavior and investigate integration issues.</li>
                  <li>Tracked defects in JIRA, reproduced reported issues, collaborated with developers and verified fixes.</li>
                  <li>Worked in Agile/Scrum and performed browser-based testing and troubleshooting.</li>
                </ul>
              </div>

              {/* Freelance Web Developer */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                  <p className="font-bold text-slate-900 dark:text-white">
                    Freelance Web Developer — Paathshala Ascension
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Mar 2023 – May 2023
                  </span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Developed and updated website functionality using HTML, CSS and JavaScript.</li>
                  <li>Investigated UI and functional issues and implemented required fixes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: AWS & DevOps Training */}
          <div className="py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono mb-3 text-sky-500">
              AWS & DEVOPS TRAINING
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-[13px]">
                <p className="font-bold text-slate-900 dark:text-white">
                  Besant Technologies — AWS & DevOps Trainee
                </p>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Jul 2026 – Present | Bengaluru
                </span>
              </div>
              <ul className="mt-1.5 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                <li>AWS completed; Linux and Python ongoing; DevOps training includes Git, Docker, Terraform, CI/CD and shell scripting.</li>
                <li>Practiced AWS EC2, S3, EBS, IAM fundamentals, VPC, Security Groups, SSH and Linux server administration.</li>
                <li>Built hands-on infrastructure labs using Terraform and practiced Git/GitHub workflows and CI/CD automation.</li>
              </ul>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono mb-3 text-sky-500">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {/* Project 1 */}
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                  INFRAFORENSICS — Infrastructure State Reconstruction & Incident Forensics Platform{" "}
                  <span className="font-normal text-slate-500 dark:text-slate-400">— Python, psutil, SQLite, Git/GitHub</span>
                </p>
                <ul className="mt-1 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Building a local infrastructure forensics platform that continuously captures system state such as CPU, memory, disk usage, process count, hostname and timestamps.</li>
                  <li>Stores historical snapshots in SQLite so infrastructure states can be compared across time and used as evidence during troubleshooting.</li>
                  <li>Generates Infrastructure DNA fingerprints from system state and detects differences between previous and current snapshots.</li>
                  <li>Classifies detected changes by severity to help distinguish normal runtime variation from potentially significant infrastructure changes.</li>
                  <li>Developing the project incrementally toward incident timelines, deployment correlation and forensic reconstruction workflows.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                  Dockerized Website CI/CD{" "}
                  <span className="font-normal text-slate-500 dark:text-slate-400">— Docker, GitHub Actions, AWS ECR, EC2</span>
                </p>
                <ul className="mt-1 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Containerized a static website using Docker and practiced building reproducible container images.</li>
                  <li>Created a GitHub Actions workflow to automate image build and push operations.</li>
                  <li>Used AWS ECR as the container image registry and deployed the containerized workload on an EC2 environment.</li>
                  <li>Practiced the application flow from source-code change to container image and cloud deployment.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                  AWS Infrastructure Provisioning with Terraform{" "}
                  <span className="font-normal text-slate-500 dark:text-slate-400">— Terraform, AWS EC2, S3, SSH</span>
                </p>
                <ul className="mt-1 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Provisioned AWS EC2 and S3 resources using Terraform instead of creating infrastructure manually.</li>
                  <li>Practiced the Terraform workflow: init, plan and apply, along with variables and state inspection.</li>
                  <li>Configured an EC2 instance, connected through SSH and worked with security/access requirements.</li>
                  <li>Used Terraform state inspection to understand the resources managed by infrastructure as code.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                  AWS EC2 Linux Web Server{" "}
                  <span className="font-normal text-slate-500 dark:text-slate-400">— AWS EC2, Linux, Apache/httpd, EBS</span>
                </p>
                <ul className="mt-1 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Launched and accessed a Linux EC2 instance through SSH and configured Apache/httpd as a web server.</li>
                  <li>Created and served an HTML page from the EC2 instance and configured Security Group HTTP access.</li>
                  <li>Practiced Linux administration, file management, disk usage and server troubleshooting commands.</li>
                  <li>Worked with EBS storage by attaching, formatting, mounting and unmounting volumes.</li>
                </ul>
              </div>

              {/* Project 5 */}
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                  Smart Institute Attendance System{" "}
                  <span className="font-normal text-slate-500 dark:text-slate-400">— Python, Flask, SQLite</span>
                </p>
                <ul className="mt-1 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Built an attendance application using Python Flask and SQLite for attendance recording and data persistence.</li>
                  <li>Implemented duplicate-prevention logic to avoid repeated attendance records.</li>
                  <li>Added network/IP-based access restrictions so attendance can be limited to an approved institute network.</li>
                  <li>Practiced application debugging, database interaction and validation of attendance workflows.</li>
                </ul>
              </div>

              {/* Project 6 */}
              <div>
                <p className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white">
                  Training & Placement Management System — CareerBridge{" "}
                  <span className="font-normal text-slate-500 dark:text-slate-400">— React, TypeScript, Node.js, Express, Prisma, SQLite</span>
                </p>
                <ul className="mt-1 space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 list-disc list-outside pl-4">
                  <li>Built a full-stack management system covering students, batches, attendance, mock tests, interviews, projects, companies and placement applications.</li>
                  <li>Developed a React/TypeScript/Vite frontend with Node.js/Express REST APIs and Prisma ORM with SQLite persistence.</li>
                  <li>Implemented JWT authentication, bcrypt password hashing, Zod request validation and role-based authorization for ADMIN, TRAINER, PLACEMENT and STUDENT roles.</li>
                  <li>Designed relational data models and Prisma migrations and implemented protected API workflows for dashboards, student management, attendance, projects and placement openings.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="pt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono mb-2 text-sky-500">
              EDUCATION
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[13px]">
              <p className="text-slate-800 dark:text-slate-200">
                <strong className="text-slate-900 dark:text-white">B.Tech — Electronics & Communication Engineering</strong>{" "}
                <span className="text-slate-500 dark:text-slate-400">| Sarala Birla University</span>
              </p>
              <p className="text-slate-800 dark:text-slate-200">
                <strong className="text-slate-900 dark:text-white">Diploma — Electronics & Communication Engineering</strong>{" "}
                <span className="text-slate-500 dark:text-slate-400">| BITT Polytechnic, Ranchi</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer / Quick Action */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 no-print">
          <div className="flex items-center gap-2">
            <FaFileAlt className="text-sky-500" />
            <span>Ready for ATS screening & recruiter evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="text-sky-500 hover:text-sky-400 underline cursor-pointer"
            >
              Print / Save as PDF
            </button>
            <span>·</span>
            <button
              onClick={handleDownloadTxt}
              className="text-sky-500 hover:text-sky-400 underline cursor-pointer"
            >
              Download Text Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
