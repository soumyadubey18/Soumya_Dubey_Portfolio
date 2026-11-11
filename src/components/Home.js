import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaArrowRight,
  FaAws,
  FaCheckCircle,
  FaDocker,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { SiLinux, SiTerraform } from "react-icons/si";
import Myimage from "../assets/myimage.jpg";
import { useDarkMode } from "../context/DarkModeContext";
import MotionBackgroundCanvas from "./MotionBackgroundCanvas";

const ROTATING_ROLES = [
  "Cloud Support",
  "AWS & Linux",
  "Junior DevOps",
  "Software Development",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = ({ onOpenResume }) => {
  const { isDarkMode } = useDarkMode();
  const [typedRole, setTypedRole] = useState(ROTATING_ROLES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let roleIndex = 0;
    let textLength = ROTATING_ROLES[roleIndex].length;
    let timerId;

    const typeNextRole = () => {
      const nextRole = ROTATING_ROLES[(roleIndex + 1) % ROTATING_ROLES.length];
      if (textLength < nextRole.length) {
        textLength += 1;
        setTypedRole(nextRole.slice(0, textLength));
        timerId = window.setTimeout(typeNextRole, 38);
      } else {
        roleIndex = (roleIndex + 1) % ROTATING_ROLES.length;
        timerId = window.setTimeout(startErasing, 2200);
      }
    };

    const eraseCurrentRole = () => {
      if (textLength > 0) {
        textLength -= 1;
        setTypedRole(ROTATING_ROLES[roleIndex].slice(0, textLength));
        timerId = window.setTimeout(eraseCurrentRole, 24);
      } else {
        timerId = window.setTimeout(typeNextRole, 180);
      }
    };

    const startErasing = () => {
      textLength = ROTATING_ROLES[roleIndex].length;
      eraseCurrentRole();
    };

    timerId = window.setTimeout(startErasing, 2400);

    return () => window.clearTimeout(timerId);
  }, []);

  const panelStyle = isDarkMode
    ? "border-slate-700/70 bg-slate-950/75 text-slate-100 shadow-black/30"
    : "border-slate-200 bg-white/90 text-slate-900 shadow-slate-900/10";

  return (
    <section
      id="home"
      name="home"
      className="portfolio-section relative isolate overflow-hidden"
    >
      <MotionBackgroundCanvas />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-12 h-96 w-96 rounded-full bg-sky-400/15 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-violet-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <div className="portfolio-container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
            }}
          >
            <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to Cloud & DevOps opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <FaMapMarkerAlt aria-hidden="true" className="text-amber-500" />
                Bengaluru, India
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400"
            >
              Cloud · Automation · Software
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Building reliable cloud foundations.
              <span className="mt-2 block bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-indigo-300 dark:to-violet-300">
                Automating delivery with DevOps.
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                Soumya Dubey
              </span>
              <span aria-hidden="true" className="hidden text-slate-400 sm:inline">/</span>
              <span className="inline-flex min-h-7 items-center overflow-hidden text-sm font-semibold text-sky-700 dark:text-sky-300 sm:text-base">
                <span className="sr-only">
                  Cloud Support, AWS and Linux, Junior DevOps, Software Development
                </span>
                <span aria-hidden="true" className="inline-block min-w-[1ch]">
                  {typedRole}
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                    className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-sky-500 motion-reduce:hidden"
                  />
                </span>
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
            >
              I bring a software development background in React.js, Node.js, and REST APIs to hands-on cloud and DevOps work. I have practiced AWS{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">EC2, S3, EBS, VPC, and IAM</strong>, with project experience in{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">Terraform, Docker, Jenkins, and GitHub Actions</strong>.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
              {[
                { label: "AWS Cloud", detail: "EC2 · S3 · VPC", icon: <FaAws aria-hidden="true" />, iconColor: "text-amber-500" },
                { label: "Infrastructure as Code", detail: "Terraform labs", icon: <SiTerraform aria-hidden="true" />, iconColor: "text-violet-500" },
                { label: "Containers & CI/CD", detail: "Docker · GitHub Actions", icon: <FaDocker aria-hidden="true" />, iconColor: "text-sky-500" },
                { label: "Linux Systems", detail: "SSH · shell scripting", icon: <SiLinux aria-hidden="true" />, iconColor: "text-emerald-500" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex min-w-[calc(50%-0.5rem)] items-center gap-3 rounded-xl border px-3 py-2.5 sm:min-w-0 ${
                    isDarkMode
                      ? "border-slate-800 bg-slate-900/70"
                      : "border-slate-200 bg-white/80"
                  }`}
                >
                  <span className={`text-lg ${item.iconColor}`}>{item.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-100">{item.label}</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400">{item.detail}</span>
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <FaFileDownload aria-hidden="true" size={14} />
                View & Download Resume
              </button>
              <Link
                to="project"
                smooth
                duration={500}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                  isDarkMode
                    ? "border-slate-700 bg-slate-900/80 text-slate-200 hover:border-sky-500/60 hover:bg-slate-800"
                    : "border-slate-200 bg-white text-slate-800 shadow-sm hover:border-sky-400 hover:bg-sky-50"
                }`}
              >
                Explore projects
                <FaArrowRight aria-hidden="true" size={12} className="text-sky-500" />
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-slate-600 transition hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:text-slate-300 dark:hover:text-sky-300"
              >
                <FaPaperPlane aria-hidden="true" size={12} />
                Contact me
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com/soumyadubey18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-500 transition hover:border-sky-400 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-sky-300"
              >
                <FaGithub aria-hidden="true" size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/soumya-dubey-752aa8185"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-500 transition hover:border-sky-400 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-sky-300"
              >
                <FaLinkedin aria-hidden="true" size={16} />
              </a>
              <a
                href="mailto:dubeysoumya8@gmail.com"
                aria-label="Email Soumya Dubey"
                className="rounded-full border border-slate-200 bg-white/70 p-2.5 text-slate-500 transition hover:border-sky-400 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-sky-300"
              >
                <FaPaperPlane aria-hidden="true" size={15} />
              </a>
              <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                Let’s build something dependable.
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[31rem] lg:col-span-5"
          >
            <div className={`relative overflow-hidden rounded-[2rem] border p-5 shadow-2xl backdrop-blur-xl sm:p-7 ${panelStyle}`}>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      Cloud delivery flow
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                      From commit to cloud
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Learning by building
                  </span>
                </div>

                <div className="relative my-7 grid grid-cols-2 gap-3 sm:gap-4">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 360 190"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                  >
                    <motion.path
                      d="M75 48 C140 48 215 48 285 48 M75 142 C140 142 215 142 285 142 M75 48 C75 95 75 95 75 142 M285 48 C285 95 285 95 285 142"
                      fill="none"
                      stroke="url(#home-network-gradient)"
                      strokeWidth="2"
                      strokeDasharray="5 7"
                      initial={{ pathLength: 0, opacity: 0.2 }}
                      animate={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="home-network-gradient" x1="0" x2="1">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {[
                    { label: "SOURCE", title: "GitHub", icon: <FaGithub aria-hidden="true" />, accent: "text-slate-700 dark:text-white" },
                    { label: "AUTOMATE", title: "CI / CD", icon: <FaDocker aria-hidden="true" />, accent: "text-sky-600 dark:text-sky-300" },
                    { label: "PROVISION", title: "Terraform", icon: <SiTerraform aria-hidden="true" />, accent: "text-violet-600 dark:text-violet-300" },
                    { label: "RUN", title: "AWS + Linux", icon: <FaAws aria-hidden="true" />, accent: "text-amber-600 dark:text-amber-300" },
                  ].map((node, index) => (
                    <motion.div
                      key={node.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + index * 0.12, duration: 0.4 }}
                      className={`relative z-10 flex min-h-20 flex-col justify-center rounded-2xl border px-3 py-3 shadow-lg backdrop-blur ${
                        isDarkMode
                          ? "border-slate-700 bg-[#0B1220]/95"
                          : "border-slate-200 bg-white/95"
                      }`}
                    >
                      <span className="text-[9px] font-bold tracking-[0.16em] text-slate-400">{node.label}</span>
                      <span className={`mt-1 flex items-center gap-2 text-xs font-bold ${node.accent}`}>
                        <span className="text-base">{node.icon}</span>
                        {node.title}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className={`flex items-center gap-4 rounded-2xl border p-3.5 ${
                  isDarkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white/85"
                }`}>
                  <div className="relative h-16 w-16 shrink-0">
                    <div aria-hidden="true" className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-amber-400 opacity-80 blur-sm" />
                    <img
                      src={Myimage}
                      alt="Portrait of Soumya Dubey"
                      width="64"
                      height="64"
                      loading="eager"
                      decoding="async"
                      className="relative h-16 w-16 rounded-full border-2 border-white object-cover shadow-md dark:border-slate-800"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-extrabold text-slate-900 dark:text-white">Soumya Dubey</p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Cloud Support · AWS · Junior DevOps</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
                      <FaCheckCircle aria-hidden="true" />
                      AWS training completed · Linux & Python ongoing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -bottom-5 -right-4 -z-10 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
