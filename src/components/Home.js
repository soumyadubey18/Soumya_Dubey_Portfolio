import React from "react";
import { Link } from "react-scroll";
import {
  FaFileDownload,
  FaArrowRight,
  FaAws,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SiTerraform, SiLinux } from "react-icons/si";
import Myimage from "../assets/myimage.jpg";
import { useDarkMode } from "../context/DarkModeContext";
import MotionBackgroundCanvas from "./MotionBackgroundCanvas";

const Home = ({ onOpenResume }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      id="home"
      name="home"
      className={`relative pt-32 pb-20 transition-colors duration-300 overflow-hidden ${
        isDarkMode ? "bg-[#090D16] text-slate-100" : "bg-[#F8FAFC] text-slate-900"
      }`}
    >
      {/* Interactive 60fps Motion Background Canvas */}
      <MotionBackgroundCanvas />

      {/* Ambient gradient backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none opacity-60">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-28 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary Calls to Action */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status & Region Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold max-w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Cloud & DevOps Roles</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700/60 bg-slate-900/40 text-slate-300 text-xs font-mono">
                <span className="text-amber-400 font-bold">AWS:</span>
                <span>ap-south-1 · Bengaluru</span>
              </div>
            </div>

            {/* High-Impact Hero Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                Architecting Scalable Cloud,{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-amber-400 bg-clip-text text-transparent">
                  Automating Modern DevOps.
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  Soumya Dubey
                </span>
                <span className="text-slate-500 font-mono text-sm hidden sm:inline">•</span>
                <span className="text-sm sm:text-base font-mono text-sky-500 font-semibold">
                  Associate Cloud & DevOps Engineer
                </span>
              </div>
            </div>

            {/* Crisp Engineering Value Proposition */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              Full-stack developer turned cloud infrastructure engineer with 1+ years of enterprise software experience. I build immutable{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">AWS cloud environments</strong>, author declarative{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">Terraform IaC blueprints</strong>, and orchestrate zero-downtime{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">Docker & CI/CD release pipelines</strong>.
            </p>

            {/* Interactive Engineering Capability Cards */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
              <div className="p-3 rounded-2xl border border-amber-500/25 bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
                <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold font-mono mb-1">
                  <FaAws size={15} />
                  <span>AWS Cloud</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  VPC, EC2, S3, IAM, Multi-AZ
                </p>
              </div>

              <div className="p-3 rounded-2xl border border-purple-500/25 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold font-mono mb-1">
                  <SiTerraform size={13} />
                  <span>Terraform IaC</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  Declarative State & Modules
                </p>
              </div>

              <div className="p-3 rounded-2xl border border-sky-500/25 bg-sky-500/5 hover:bg-sky-500/10 transition-colors">
                <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold font-mono mb-1">
                  <FaDocker size={15} />
                  <span>Docker CI/CD</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  Multi-stage Containers & ECR
                </p>
              </div>

              <div className="p-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-mono mb-1">
                  <SiLinux size={13} />
                  <span>Linux Systems</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  Bash, systemd, Diagnostics
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm transition-all shadow-lg shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaFileDownload size={14} />
                <span>View & Download Resume</span>
              </button>

              <Link
                to="project"
                smooth={true}
                duration={500}
                className={`cursor-pointer flex items-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200"
                    : "border-slate-200 bg-white hover:bg-slate-100 text-slate-800 shadow-sm"
                }`}
              >
                <span>Explore Featured Projects</span>
                <FaArrowRight size={12} className="text-sky-500" />
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`cursor-pointer px-4 py-3.5 text-sm font-medium transition-colors hover:text-sky-500 ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Contact Me →
              </Link>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-4 text-slate-400 text-sm">
              <a
                href="https://github.com/soumyadubey18"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://www.linkedin.com/in/soumya-dubey-752aa8185"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="mailto:dubeysoumya8@gmail.com"
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <FaEnvelope size={15} />
                <span>dubeysoumya8@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Profile Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              className={`w-full max-w-md p-6 sm:p-8 rounded-3xl border transition-all relative ${
                isDarkMode
                  ? "bg-slate-900/50 border-slate-800 shadow-2xl shadow-black/40"
                  : "bg-white border-slate-200 shadow-xl"
              }`}
            >
              {/* Profile Image with subtle ambient ring */}
              <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-6">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 via-amber-500 to-purple-500 rounded-full blur-sm opacity-60 animate-pulse-subtle"></div>
                <img
                  src={Myimage}
                  alt="Soumya Dubey"
                  className="relative w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-xl"
                />
                <span className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-white text-[10px]" title="Online & Available">
                  ✓
                </span>
              </div>

              {/* Identity & Current Training Status */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Soumya Dubey
                </h3>
                <p className="text-sm font-semibold text-sky-500 mt-0.5">
                  Associate Cloud & DevOps Engineer
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-1">
                  <FaMapMarkerAlt size={11} className="text-amber-500" />
                  <span>Bengaluru, Karnataka, India</span>
                </p>
              </div>

              {/* Status Highlights Card */}
              <div
                className={`mt-6 p-4 rounded-2xl border text-xs space-y-2.5 ${
                  isDarkMode
                    ? "bg-[#05080E] border-slate-800 text-slate-300"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/50">
                  <span className="font-semibold text-slate-400">Current Track:</span>
                  <span className="font-mono text-sky-400 font-medium">Besant Technologies</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={13} />
                  <span>AWS Completed (EC2, S3, EBS, IAM, VPC, Route Tables)</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-sky-500 mt-0.5 shrink-0" size={13} />
                  <span>Linux Administration & Python Automation (Ongoing)</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0" size={13} />
                  <span>Terraform IaC, Docker, GitHub Actions CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Proof Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              1+ <span className="text-sky-500 text-xl font-bold">Years</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Software & REST API Experience
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              8+ <span className="text-amber-500 text-xl font-bold">Services</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              AWS EC2, S3, IAM, VPC, EBS Labs
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              100% <span className="text-purple-400 text-xl font-bold">IaC</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Terraform Declarative Blueprints
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              6 <span className="text-emerald-500 text-xl font-bold">Projects</span>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Forensics, CI/CD, IaC & Full-Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
