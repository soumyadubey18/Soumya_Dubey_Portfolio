import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaSearch,
  FaTerminal,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaProjectDiagram,
  FaHistory,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

const navLinks = [
  { name: "Architecture", to: "cloud-architecture", icon: FaServer, desc: "Interactive AWS VPC & ECS Blueprint" },
  { name: "Live Engine", to: "pipeline-motion", icon: FaLaptopCode, desc: "Zero-Downtime CI/CD Simulation" },
  { name: "Workbench", to: "devops-workbench", icon: FaTools, desc: "Interactive Linux & Docker Terminal" },
  { name: "Skills", to: "skills", icon: FaTools, desc: "Cloud, IaC, CI/CD, Containerization" },
  { name: "Projects", to: "project", icon: FaProjectDiagram, desc: "Placement Portal, Profiler, Portfolio" },
  { name: "Activity", to: "github-activity", icon: FaHistory, desc: "GitHub Contributions & Commits" },
  { name: "Timeline", to: "experience", icon: FaHistory, desc: "Work Experience & Education Milestones" },
  { name: "Contact", to: "contact", icon: FaPaperPlane, desc: "Direct Inquiries & Connect" },
];

const NavBar = ({ onOpenResume }) => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const searchInputRef = useRef(null);
  const statusMenuRef = useRef(null);

  // Track window scroll and calculate progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalScroll) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsCommandOpen(false);
        setStatusMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus search input when command palette opens
  useEffect(() => {
    if (isCommandOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setCommandQuery("");
    }
  }, [isCommandOpen]);

  // Click outside listener for status menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (statusMenuRef.current && !statusMenuRef.current.contains(e.target)) {
        setStatusMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyEmail = (e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText("dubeysoumya8@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCommandSelect = (to) => {
    setIsCommandOpen(false);
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  // Filter command palette options
  const filteredNavLinks = navLinks.filter(
    (item) =>
      item.name.toLowerCase().includes(commandQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(commandQuery.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 pb-2">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-3 sm:px-5 h-16 flex items-center justify-between border relative overflow-visible ${
            scrolled
              ? isDarkMode
                ? "bg-[#090D16]/90 backdrop-blur-xl border-slate-700/60 shadow-2xl shadow-black/50"
                : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-lg shadow-slate-200/60"
              : isDarkMode
              ? "bg-[#090D16]/70 backdrop-blur-md border-slate-800/80 shadow-md shadow-black/20"
              : "bg-white/75 backdrop-blur-md border-slate-200/70 shadow-sm"
          }`}
        >
          {/* Top Integrated Reading Depth Progress Line */}
          <div className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full overflow-hidden pointer-events-none opacity-80">
            <div
              className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-amber-400 transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Left: Brand Wordmark with Interactive Availability Popover */}
          <div className="flex items-center gap-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer group flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-500 flex items-center justify-center text-white font-black text-xs shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
                SD
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors ${
                    isDarkMode
                      ? "text-white group-hover:text-sky-400"
                      : "text-slate-900 group-hover:text-sky-600"
                  }`}
                >
                  Soumya Dubey
                </span>
                <span className="text-[10px] text-slate-400 font-mono -mt-1 hidden sm:block">
                  Cloud & DevOps Engineer
                </span>
              </div>
            </Link>

            {/* Interactive Availability Pill with Status Popover */}
            <div className="relative" ref={statusMenuRef}>
              <button
                onClick={() => setStatusMenuOpen((prev) => !prev)}
                className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border transition-all ${
                  isDarkMode
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                    : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                }`}
                title="Click to view availability & direct contact"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available</span>
              </button>

              {/* Status Popover Card */}
              <AnimatePresence>
                {statusMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className={`absolute top-full left-0 mt-2 w-72 p-4 rounded-2xl border shadow-2xl z-50 ${
                      isDarkMode
                        ? "bg-[#0B0F19] border-slate-800 text-white shadow-black/80"
                        : "bg-white border-slate-200 text-slate-900 shadow-slate-300/60"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                        Open for Opportunities
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      Targeting Cloud Engineer, DevOps Specialist, or SRE roles. Ready for immediate joining in Bengaluru or remote.
                    </p>
                    <div className="text-[11px] font-mono text-slate-500 mb-3 flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-amber-500" />
                      <span>Bengaluru, KA · Hybrid / Remote</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleCopyEmail}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition-colors"
                      >
                        {copiedEmail ? <FaCheck size={11} /> : <FaCopy size={11} />}
                        <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                      </button>
                      <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setStatusMenuOpen(false)}
                        className={`flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                          isDarkMode
                            ? "border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                            : "border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <FaPaperPlane size={10} />
                        <span>Connect</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Center: Desktop Navigation Links with Magnetic Sliding Hover Pill */}
          <nav
            onMouseLeave={() => setHoveredLink(null)}
            className="hidden xl:flex items-center gap-1 p-1 rounded-2xl relative"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.to;
              const isHovered = hoveredLink === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActiveSection(item.to)}
                  onMouseEnter={() => setHoveredLink(item.to)}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-colors duration-150 z-10 whitespace-nowrap ${
                    isActive
                      ? isDarkMode
                        ? "text-sky-400 font-bold"
                        : "text-sky-600 font-bold"
                      : isDarkMode
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Sliding hover pill indicator */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={`absolute inset-0 rounded-xl -z-10 ${
                        isDarkMode ? "bg-slate-800/80" : "bg-slate-100"
                      }`}
                    />
                  )}

                  {/* Active indicator dot under label */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500"
                    />
                  )}

                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette (Cmd+K) Trigger Button */}
            <button
              onClick={() => setIsCommandOpen(true)}
              aria-label="Open command palette (Command + K)"
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-xs transition-all duration-200 group ${
                isDarkMode
                  ? "bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                  : "bg-slate-100/80 border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <FaSearch size={11} className="text-slate-400 group-hover:text-sky-400" />
              <span className="hidden sm:inline font-mono text-[11px]">Search</span>
              <kbd
                className={`hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700 text-slate-300"
                    : "bg-white border-slate-200 text-slate-600"
                }`}
              >
                ⌘K
              </kbd>
            </button>

            {/* Social Icons */}
            <a
              href="https://github.com/soumyadubey18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className={`hidden sm:flex p-2 rounded-xl border transition-colors ${
                isDarkMode
                  ? "border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/60"
                  : "border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-slate-50"
              }`}
            >
              <FaGithub size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/soumya-dubey-752aa8185"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className={`hidden sm:flex p-2 rounded-xl border transition-colors ${
                isDarkMode
                  ? "border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 bg-slate-900/60"
                  : "border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 bg-slate-50"
              }`}
            >
              <FaLinkedin size={13} />
            </a>

            {/* Animated Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-xl border transition-colors relative overflow-hidden ${
                isDarkMode
                  ? "border-slate-800 text-amber-400 hover:bg-slate-800/80 bg-slate-900/60"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100 bg-slate-50"
              }`}
            >
              {isDarkMode ? <FaSun size={13} /> : <FaMoon size={13} />}
            </motion.button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-sky-500 hover:bg-sky-400 text-white transition-all shadow-md shadow-sky-500/25 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
            >
              <FaFileDownload size={11} />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Mobile Navigation Hamburger */}
            <button
              onClick={() => setNav((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className={`xl:hidden p-2 rounded-xl border transition-colors ${
                isDarkMode
                  ? "border-slate-800 text-slate-200 bg-slate-900/80 hover:bg-slate-800"
                  : "border-slate-200 text-slate-800 bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {nav ? <FaTimes size={15} /> : <FaBars size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen/Drawer Menu with Animated Entrance */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`xl:hidden fixed inset-x-3 top-20 rounded-3xl border p-5 transition-all shadow-2xl z-50 ${
                isDarkMode
                  ? "bg-[#090D16]/95 border-slate-700 text-white backdrop-blur-2xl"
                  : "bg-white/95 border-slate-200 text-slate-900 backdrop-blur-2xl"
              }`}
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono font-semibold text-emerald-500">
                    Open for Cloud & DevOps Roles
                  </span>
                </div>
                <button
                  onClick={() => {
                    setNav(false);
                    setIsCommandOpen(true);
                  }}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400"
                >
                  <FaSearch size={12} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setNav(false)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        isDarkMode
                          ? "border-slate-800/80 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 text-slate-200"
                          : "border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-800"
                      }`}
                    >
                      <Icon className="text-sky-500 shrink-0" size={13} />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setNav(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-500/20"
                >
                  <FaFileDownload size={13} />
                  <span>View & Download ATS Resume</span>
                </button>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/soumyadubey18"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-white"
                    >
                      <FaGithub size={14} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/soumya-dubey-752aa8185"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-white"
                    >
                      <FaLinkedin size={14} />
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono"
                  >
                    {copiedEmail ? <FaCheck size={11} className="text-emerald-400" /> : <FaCopy size={11} />}
                    <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Spotlight Command Palette Modal (Cmd+K / Ctrl+K) */}
      <AnimatePresence>
        {isCommandOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCommandOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Palette Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.18 }}
              className={`relative w-full max-w-xl rounded-3xl border shadow-2xl overflow-hidden z-10 ${
                isDarkMode
                  ? "bg-[#0B0F19] border-slate-800 text-white shadow-black/80"
                  : "bg-white border-slate-200 text-slate-900 shadow-2xl"
              }`}
            >
              {/* Palette Input Header */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-200 dark:border-slate-800">
                <FaSearch className="text-sky-500 shrink-0" size={14} />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={commandQuery}
                  onChange={(e) => setCommandQuery(e.target.value)}
                  placeholder="Type a section, project, or command..."
                  className="w-full bg-transparent text-sm focus:outline-none placeholder-slate-400 font-medium"
                />
                {commandQuery && (
                  <button
                    onClick={() => setCommandQuery("")}
                    className="p-1 text-slate-400 hover:text-white rounded"
                  >
                    <FaTimes size={12} />
                  </button>
                )}
                <kbd
                  onClick={() => setIsCommandOpen(false)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono border cursor-pointer ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ESC
                </kbd>
              </div>

              {/* Palette Results List */}
              <div className="max-h-80 overflow-y-auto p-3 space-y-1">
                {/* Navigation Sections Category */}
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400">
                  Navigation & Sections
                </div>

                {filteredNavLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.to}
                      onClick={() => handleCommandSelect(item.to)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-colors ${
                        isDarkMode
                          ? "hover:bg-slate-800/80 text-slate-200"
                          : "hover:bg-slate-100 text-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                          <Icon size={12} />
                        </div>
                        <div>
                          <div className="text-xs font-bold">{item.name}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{item.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">Jump ↵</span>
                    </button>
                  );
                })}

                {/* Quick Actions Category */}
                <div className="px-3 pt-3 pb-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                  Quick Actions
                </div>

                {/* Open Resume Action */}
                <button
                  onClick={() => {
                    setIsCommandOpen(false);
                    onOpenResume();
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-colors ${
                    isDarkMode
                      ? "hover:bg-slate-800/80 text-slate-200"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <FaFileDownload size={12} />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Open Full ATS Resume</div>
                      <div className="text-[11px] text-slate-400 font-normal">View 2026 resume, plain text & print view</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Action</span>
                </button>

                {/* Copy Email Action */}
                <button
                  onClick={handleCopyEmail}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-colors ${
                    isDarkMode
                      ? "hover:bg-slate-800/80 text-slate-200"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <FaEnvelope size={12} />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Copy Email Address</div>
                      <div className="text-[11px] text-slate-400 font-mono">dubeysoumya8@gmail.com</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-400">
                    {copiedEmail ? "Copied!" : "Copy"}
                  </span>
                </button>

                {/* Toggle Dark Mode Action */}
                <button
                  onClick={toggleDarkMode}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-colors ${
                    isDarkMode
                      ? "hover:bg-slate-800/80 text-slate-200"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
                      {isDarkMode ? <FaSun size={12} /> : <FaMoon size={12} />}
                    </div>
                    <div>
                      <div className="text-xs font-bold">Toggle Theme Mode</div>
                      <div className="text-[11px] text-slate-400 font-normal">
                        Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400">Toggle</span>
                </button>

                {/* External GitHub */}
                <a
                  href="https://github.com/soumyadubey18"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-colors ${
                    isDarkMode
                      ? "hover:bg-slate-800/80 text-slate-200"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-xl bg-slate-500/10 text-slate-400 border border-slate-500/20 flex items-center justify-center shrink-0">
                      <FaGithub size={12} />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Visit GitHub Profile</div>
                      <div className="text-[11px] text-slate-400 font-mono">github.com/soumyadubey18</div>
                    </div>
                  </div>
                  <FaExternalLinkAlt size={10} className="text-slate-400 mr-1" />
                </a>
              </div>

              {/* Palette Footer Tip */}
              <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <FaTerminal size={10} className="text-sky-400" />
                  <span>Developer Command Palette</span>
                </span>
                <span>Press ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
