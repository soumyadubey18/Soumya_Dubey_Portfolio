import React from "react";
import { FaAws, FaCode } from "react-icons/fa";
import { SiTerraform, SiLinux } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

const About = () => {
  const { isDarkMode } = useDarkMode();

  const pillars = [
    {
      icon: <FaAws className="text-amber-500" size={24} />,
      title: "AWS Cloud Infrastructure",
      description:
        "Hands-on with EC2 compute, S3 object storage, EBS volumes, IAM access governance, custom VPC networks, subnets, route tables, and security group isolation.",
    },
    {
      icon: <SiLinux className="text-amber-400" size={24} />,
      title: "Linux Server Administration",
      description:
        "Linux and shell scripting practice covering SSH, file management, permissions, processes, storage, and networking.",
    },
    {
      icon: <SiTerraform className="text-purple-400" size={24} />,
      title: "IaC & CI/CD Pipelines",
      description:
        "Terraform AWS infrastructure labs and CI/CD project work with Jenkins, GitHub Actions, Docker, and AWS ECR.",
    },
    {
      icon: <FaCode className="text-sky-400" size={24} />,
      title: "Full-Stack & API Engineering",
      description:
        "Production experience building React.js and Node.js applications, crafting RESTful APIs, executing defect investigation in JIRA, and validating with Postman and Swagger.",
    },
  ];

  return (
    <section
      id="about"
      name="about"
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
            Professional Profile · Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bridging Software Development with Cloud & DevOps Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a Cloud Support and Junior DevOps candidate based in Bengaluru, Karnataka, with a software development background. My experience includes React, Node.js, Express, and REST APIs, complemented by AWS training and hands-on cloud and CI/CD projects.
          </p>
        </div>

        {/* Narrative & Overview Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              My engineering journey began with an Electronics & Communication Engineering degree, leading to full-stack engineering roles where I developed web features, resolved complex integration issues, and collaborated in Agile/Scrum teams.
            </p>
            <p>
              I completed AWS training at Besant Technologies and am continuing Linux and Python training. My project work includes Terraform-based AWS provisioning, Linux web servers, a Jenkins/Maven/Tomcat deployment pipeline, and a Docker/GitHub Actions workflow using AWS ECR.
            </p>
            <p>
              My flagship project, <strong className="text-slate-900 dark:text-white font-semibold">INFRAFORENSICS</strong>, reflects this unique intersection: combining Python, system telemetry (<code className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-sky-500">psutil</code>), and SQLite persistence to capture infrastructure state snapshots and classify drift severity during troubleshooting.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <span className="text-xs font-mono text-sky-500 font-semibold block mb-1">
                LOCATION
              </span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Bengaluru, KA
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                India's Silicon Valley hub
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <span className="text-xs font-mono text-amber-500 font-semibold block mb-1">
                CLOUD PLATFORM
              </span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Amazon Web Services
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                EC2, S3, EBS, IAM, VPC
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <span className="text-xs font-mono text-emerald-500 font-semibold block mb-1">
                AUTOMATION
              </span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Terraform & Docker
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                GitHub Actions CI/CD
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <span className="text-xs font-mono text-purple-500 font-semibold block mb-1">
                LANGUAGES
              </span>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Python & TS/JS
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Bash, Node.js, SQL
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all hover:border-sky-500/50 ${
                isDarkMode
                  ? "bg-slate-900/40 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
