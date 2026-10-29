import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

export const CLOUD_DEVOPS_PROJECTS = [
  {
    id: "cafe-app-cicd-lab",
    screenshot: "/project-screenshots/cafe-app.png",
    screenshotAlt:
      "Bean & Brew cafe website showing its navigation, hero section, and menu filters.",
    screenshotCaption: "Cafe website · local app capture",
    title: "Cafe App CI/CD Lab",
    subtitle: "Jenkins, Docker, Nginx, Docker Hub, Kubernetes",
    category: "CI/CD Learning Lab",
    techTags: [
      "CI/CD",
      "Jenkins",
      "Docker",
      "Nginx",
      "Docker Hub",
      "Kubernetes",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    tagline:
      "A static cafe website and learning lab for containerization and CI/CD. The repository identifies its pipeline as a starter, not production-ready.",
    points: [
      "The Jenkinsfile validates the site files, builds and verifies an Nginx Docker image, pushes versioned and latest tags to Docker Hub, then triggers a separate CD job.",
      "Includes starter Kubernetes Deployment and Service manifests; the Ansible directory is reserved for future practice.",
    ],
    github: "https://github.com/soumyadubey18/cafe-app-cicd-lab",
  },
  {
    id: "student-result-pipeline",
    screenshot: "/project-screenshots/student-result.png",
    screenshotAlt:
      "GitHub source view of the Student Result JSP page with a result lookup form and sample student table.",
    screenshotCaption: "JSP application source · GitHub capture",
    title: "Student Result Application CI/CD Pipeline",
    subtitle: "Jenkins, Maven, Tomcat, Java",
    category: "CI/CD",
    techTags: ["Jenkins", "Maven", "Tomcat", "Java", "AWS EC2", "CI/CD"],
    tagline:
      "A Jenkins pipeline that builds a Java web application and deploys the WAR artifact to Tomcat.",
    points: [
      "Keeps the Jenkinsfile in GitHub and uses Maven to build the Java web application.",
      "Archives the build artifact in Jenkins and deploys the application to Tomcat on an EC2 instance.",
    ],
    github: "https://github.com/soumyadubey18/student-result-app",
  },
  {
    id: "docker-cicd",
    screenshot: "/project-screenshots/aws-devops.png",
    screenshotAlt:
      "GitHub source view of the GitHub Actions workflow for building and publishing a Docker image to Amazon ECR.",
    screenshotCaption: "GitHub Actions workflow · source capture",
    title: "Docker Image Build and ECR Publishing",
    subtitle: "Docker, GitHub Actions, Amazon ECR",
    category: "CI/CD",
    techTags: ["Docker", "GitHub Actions", "AWS ECR", "AWS OIDC", "CI/CD"],
    tagline:
      "A GitHub Actions workflow that builds a Docker image and publishes it to Amazon ECR using OIDC.",
    points: [
      "Uses GitHub Actions to automate the container image build.",
      "Uses OpenID Connect (OIDC) for AWS authentication and pushes the image to Amazon ECR.",
    ],
    github: "https://github.com/soumyadubey18/aws-devops-cicd-project",
  },
  {
    id: "infraforensics",
    screenshot: "/project-screenshots/infraforensics.png",
    screenshotAlt:
      "InfraForensics README overview describing infrastructure history, change detection, Infrastructure DNA, and incident forensics.",
    screenshotCaption: "Project overview · README capture",
    title: "InfraForensics",
    subtitle: "Python, psutil, SQLite",
    category: "Python",
    techTags: ["Python", "psutil", "SQLite", "Linux"],
    tagline:
      "A system-state monitoring and snapshot project that stores observations for later comparison.",
    points: [
      "Collects host and system-state information with Python and psutil.",
      "Stores snapshots in SQLite and compares them to identify and classify changes.",
    ],
    github: "https://github.com/soumyadubey18/infraforensics",
  },
  {
    id: "smart-attendance",
    screenshot: "/project-screenshots/smart-attendance.png",
    screenshotAlt:
      "Smart Institute Attendance web form with a phone number field and network-check status.",
    screenshotCaption: "Attendance form · local app capture",
    title: "Smart Institute Attendance",
    subtitle: "Python, Flask, SQLite",
    category: "Python",
    techTags: ["Python", "Flask", "SQLite"],
    tagline:
      "A Flask attendance application with persistent records, duplicate prevention, and configurable network access restrictions.",
    points: [
      "Records and retrieves attendance data using SQLite.",
      "Prevents duplicate attendance records and supports configurable IP/network allow-list restrictions.",
    ],
    github: "https://github.com/soumyadubey18/smart-institute-attendance",
  },
  {
    id: "careerbridge",
    screenshot: "/project-screenshots/careerbridge.png",
    screenshotAlt:
      "CareerBridge training and placement management sign-in screen.",
    screenshotCaption: "CareerBridge · live application capture",
    title: "CareerBridge Placement Management",
    subtitle: "React, TypeScript, Node.js, Express, Prisma",
    category: "Full-Stack",
    techTags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "SQLite"],
    tagline:
      "A full-stack training and placement portal for student, batch, attendance, interview, company, and application workflows.",
    points: [
      "Combines a React and TypeScript interface with Express REST APIs.",
      "Uses Prisma with SQLite persistence and includes authentication and role-based access control.",
    ],
    github:
      "https://github.com/soumyadubey18/careerbridge-placement-management-system",
  },
  {
    id: "linux-admin-lab",
    screenshot: "/project-screenshots/linux-admin-lab.png",
    screenshotAlt:
      "Linux administration lab repository showing its organized command, permissions, process, storage, SSH, troubleshooting, and shell scripting topics.",
    screenshotCaption: "Lab topics · GitHub repository capture",
    title: "Linux System Administration Lab",
    subtitle: "Linux, shell, system administration",
    category: "Systems",
    techTags: ["Linux", "Shell", "Systems"],
    tagline:
      "A structured collection of hands-on Linux system administration practice labs.",
    points: [
      "Organizes Linux administration exercises and command-line practice.",
      "Provides a public repository and README for reviewing the lab contents.",
    ],
    github: "https://github.com/soumyadubey18/linux-system-administration-lab",
  },
];

const AVAILABLE_TAGS = [
  "All Projects",
  "AWS",
  "CI/CD",
  "Docker",
  "Full-Stack",
  "Linux",
  "Python",
];

const CloudDevOpsProjectGrid = ({ onSelectProject }) => {
  const { isDarkMode } = useDarkMode();
  const [selectedTag, setSelectedTag] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return CLOUD_DEVOPS_PROJECTS.filter((project) => {
      const matchesTag =
        selectedTag === "All Projects" ||
        project.techTags.some((tag) =>
          tag.toLowerCase().includes(selectedTag.toLowerCase())
        );
      const searchableContent = [
        project.title,
        project.subtitle,
        project.category,
        project.tagline,
        ...project.techTags,
        ...project.points,
      ]
        .join(" ")
        .toLowerCase();

      return matchesTag && (!query || searchableContent.includes(query));
    });
  }, [searchQuery, selectedTag]);

  const inputStyle = isDarkMode
    ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500"
    : "bg-white border-slate-200 text-slate-900 placeholder-slate-400";

  return (
    <div>
      <div className="mb-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/50">
        <label className="relative block">
          <FaSearch
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects, tools, or technologies"
            className={`w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 ${inputStyle}`}
          />
        </label>

        <div className="flex flex-wrap gap-2" aria-label="Filter projects by technology">
          {AVAILABLE_TAGS.map((tag) => {
            const selected = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  selected
                    ? "border-sky-500 bg-sky-500 text-white"
                    : isDarkMode
                    ? "border-slate-700 text-slate-300 hover:border-slate-500"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                }`}
              >
                {tag}
              </button>
            );
          })}
          {(searchQuery || selectedTag !== "All Projects") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("All Projects");
              }}
              className="inline-flex items-center gap-1 px-2 text-xs font-semibold text-sky-500 hover:text-sky-400"
            >
              Reset <FaTimes aria-hidden="true" size={10} />
            </button>
          )}
        </div>
      </div>

      <p className="mb-4 text-xs text-slate-500 dark:text-slate-400" aria-live="polite">
        Showing {filteredProjects.length} of {CLOUD_DEVOPS_PROJECTS.length} projects
      </p>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex h-full flex-col rounded-2xl border p-5 transition-colors ${
                isDarkMode
                  ? "border-slate-800 bg-slate-900/50 hover:border-sky-500/60"
                  : "border-slate-200 bg-white shadow-sm hover:border-sky-400"
              }`}
            >
              <figure
                className={`-mx-5 -mt-5 mb-5 overflow-hidden rounded-t-2xl border-b ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-950"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <img
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="border-t border-inherit px-3 py-2 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                  {project.screenshotCaption}
                </figcaption>
              </figure>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-500">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                {project.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.tagline}
              </p>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {project.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 text-sky-500">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-mono text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onSelectProject?.(project)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-500 dark:text-sky-400"
                >
                  Project details <FaArrowRight aria-hidden="true" size={10} />
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} source repository and README on GitHub`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <FaGithub aria-hidden="true" size={13} />
                  Code & README
                  <FaExternalLinkAlt aria-hidden="true" size={10} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 px-5 py-12 text-center dark:border-slate-800">
          <p className="font-semibold text-slate-800 dark:text-slate-100">
            No projects match those filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedTag("All Projects");
            }}
            className="mt-3 text-sm font-semibold text-sky-500 hover:text-sky-400"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CloudDevOpsProjectGrid;
