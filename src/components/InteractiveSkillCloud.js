import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaPython,
  FaGitAlt,
  FaTerminal,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import {
  SiTerraform,
  SiGithubactions,
  SiTypescript,
  SiPostgresql,
  SiUbuntu,
} from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

const SKILL_NODES = [
  {
    id: "aws",
    name: "AWS Cloud",
    category: "Cloud",
    icon: FaAws,
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.45)",
    orbitRadius: 180,
    speed: 36,
    initialAngle: 0,
    size: 58,
    level: "92%",
    proficiency: "Advanced · Hands-On",
    description: "VPC, EC2, S3, EBS, IAM Policies, Route Tables, and Security Groups.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    icon: FaDocker,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.45)",
    orbitRadius: 170,
    speed: 30,
    initialAngle: 72,
    size: 56,
    level: "88%",
    proficiency: "Proficient · Containers",
    description: "Multi-stage Dockerfiles, image optimization, ECR image repositories.",
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "DevOps",
    icon: SiTerraform,
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.45)",
    orbitRadius: 190,
    speed: 42,
    initialAngle: 144,
    size: 56,
    level: "85%",
    proficiency: "Proficient · IaC",
    description: "Declarative AWS provisioning, state lifecycle, modular cloud blueprints.",
  },
  {
    id: "linux",
    name: "Linux Admin",
    category: "Systems",
    icon: FaLinux,
    color: "#eab308",
    glow: "rgba(234, 179, 8, 0.45)",
    orbitRadius: 125,
    speed: 26,
    initialAngle: 216,
    size: 52,
    level: "90%",
    proficiency: "Advanced · Core OS",
    description: "AL2023 & Ubuntu, systemctl services, SSH, storage mount, Bash.",
  },
  {
    id: "python",
    name: "Python",
    category: "Code",
    icon: FaPython,
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.45)",
    orbitRadius: 130,
    speed: 28,
    initialAngle: 288,
    size: 52,
    level: "86%",
    proficiency: "Proficient · Systems & Scripts",
    description: "System telemetry via psutil, automation scripts, SQLite integration.",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "DevOps",
    icon: SiGithubactions,
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.45)",
    orbitRadius: 240,
    speed: 48,
    initialAngle: 36,
    size: 50,
    level: "84%",
    proficiency: "Proficient · Automation",
    description: "Automated test, container build, and deployment pipelines.",
  },
  {
    id: "typescript",
    name: "TypeScript & React",
    category: "Code",
    icon: SiTypescript,
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.45)",
    orbitRadius: 235,
    speed: 45,
    initialAngle: 108,
    size: 50,
    level: "88%",
    proficiency: "Experienced · 1+ Yr Production",
    description: "Production web applications, component engineering, REST integration.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL & SQLite",
    category: "Databases",
    icon: SiPostgresql,
    color: "#818cf8",
    glow: "rgba(129, 140, 248, 0.45)",
    orbitRadius: 250,
    speed: 52,
    initialAngle: 180,
    size: 48,
    level: "82%",
    proficiency: "Proficient · SQL & Schemas",
    description: "Relational modeling, migrations, time-series state records.",
  },
  {
    id: "git",
    name: "Git & CLI",
    category: "DevOps",
    icon: FaGitAlt,
    color: "#f97316",
    glow: "rgba(249, 115, 22, 0.45)",
    orbitRadius: 100,
    speed: 22,
    initialAngle: 250,
    size: 46,
    level: "90%",
    proficiency: "Advanced · Version Control",
    description: "Branching strategies, commit hygiene, team collaboration.",
  },
  {
    id: "ubuntu",
    name: "Ubuntu Server",
    category: "Systems",
    icon: SiUbuntu,
    color: "#ea580c",
    glow: "rgba(234, 88, 12, 0.45)",
    orbitRadius: 220,
    speed: 40,
    initialAngle: 320,
    size: 48,
    level: "88%",
    proficiency: "Proficient · Server Admin",
    description: "Package repositories, network config, daemon maintenance.",
  },
];

export const InteractiveSkillCloud = () => {
  const { isDarkMode } = useDarkMode();
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [time, setTime] = useState(0);

  // Smooth 60fps orbital clock loop
  useEffect(() => {
    let animId;
    let lastStamp = performance.now();

    const loop = (currentStamp) => {
      const dt = (currentStamp - lastStamp) / 1000;
      lastStamp = currentStamp;

      if (isPlaying) {
        // Slow down slightly on hover
        const factor = hoveredNode ? 0.35 : 1.0;
        setTime((prev) => prev + dt * factor);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, hoveredNode]);

  const categories = ["All", "Cloud", "DevOps", "Systems", "Code"];

  const filteredNodes =
    selectedCategory === "All"
      ? SKILL_NODES
      : SKILL_NODES.filter((n) => n.category === selectedCategory);

  return (
    <div className="w-full my-8">
      {/* Skill Cloud Toolbar Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-2">
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition-colors ${
              isDarkMode
                ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-white"
                : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm"
            }`}
          >
            {isPlaying ? <FaPause size={10} className="text-amber-400" /> : <FaPlay size={10} className="text-emerald-400" />}
            <span>{isPlaying ? "Pause Orbit" : "Resume Orbit"}</span>
          </button>
        </div>
      </div>

      {/* Orbiting Arena Viewport */}
      <div
        className={`relative w-full h-[520px] rounded-3xl border overflow-hidden flex items-center justify-center transition-all ${
          isDarkMode
            ? "bg-[#060911]/90 border-slate-800/90 shadow-2xl shadow-black/60"
            : "bg-slate-50 border-slate-200 shadow-xl"
        }`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-sky-500/10 blur-[100px]" />
          <div className="w-64 h-64 rounded-full bg-amber-500/10 blur-[90px]" />
        </div>

        {/* Orbital Distance Concentric Rings */}
        <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-slate-300/40 dark:border-slate-800/80 pointer-events-none animate-spin-slow" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-slate-200/60 dark:border-slate-800/60 pointer-events-none" />
        <div className="absolute w-[470px] h-[470px] rounded-full border border-dashed border-slate-300/30 dark:border-slate-800/40 pointer-events-none" />

        {/* Central Core Nexus: Soumya's Cloud Engine */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center select-none pointer-events-none">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-sky-500 via-amber-500 to-purple-500 opacity-25 blur-md animate-pulse-subtle" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-slate-900 to-slate-800 border-2 border-sky-400/80 flex items-center justify-center shadow-2xl shadow-sky-500/30 text-white">
              <div className="flex flex-col items-center justify-center">
                <FaTerminal size={18} className="text-sky-400" />
                <span className="text-[10px] font-mono font-bold tracking-tighter mt-1 text-amber-400">
                  DEVOPS
                </span>
              </div>
            </div>
          </div>
          <span className="text-xs font-bold mt-2 text-slate-800 dark:text-white">
            Skill Nexus
          </span>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
            Hover any node
          </span>
        </div>

        {/* Orbiting Floating Skill Nodes */}
        {filteredNodes.map((node) => {
          const Icon = node.icon;
          const currentAngle =
            node.initialAngle + (time * (360 / node.speed));
          const rad = (currentAngle * Math.PI) / 180;
          const x = Math.cos(rad) * node.orbitRadius;
          const y = Math.sin(rad) * (node.orbitRadius * 0.72); // slightly elliptical 3D perspective
          const isHovered = hoveredNode?.id === node.id;

          return (
            <motion.div
              key={node.id}
              className="absolute cursor-pointer"
              style={{
                x,
                y,
                width: node.size,
                height: node.size,
                zIndex: isHovered ? 40 : 20,
              }}
              animate={{
                scale: isHovered ? 1.3 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outer halo ripple on hover */}
              {isHovered && (
                <div
                  className="absolute -inset-3 rounded-2xl animate-ping opacity-25"
                  style={{ backgroundColor: node.color }}
                />
              )}

              {/* Node Icon Capsule */}
              <div
                className={`w-full h-full rounded-2xl border flex items-center justify-center transition-all ${
                  isDarkMode
                    ? "bg-slate-900/90 border-slate-700/80 shadow-lg"
                    : "bg-white border-slate-200 shadow-md"
                }`}
                style={{
                  boxShadow: isHovered
                    ? `0 0 25px 2px ${node.glow}`
                    : "none",
                  borderColor: isHovered ? node.color : undefined,
                }}
              >
                <Icon size={node.size * 0.44} style={{ color: node.color }} />
              </div>

              {/* Minimalist Floating Label under the node */}
              <div
                className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold px-1.5 py-0.5 rounded transition-all pointer-events-none ${
                  isHovered
                    ? "opacity-100 scale-105 bg-slate-900 text-white border border-slate-700 shadow-md"
                    : "opacity-75 text-slate-500 dark:text-slate-400"
                }`}
              >
                {node.name}
              </div>
            </motion.div>
          );
        })}

        {/* Interactive Floating Detail Card (Proficiency Modal Badge) */}
        <AnimatePresence>
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.18 }}
              className={`absolute bottom-6 right-6 z-50 p-5 rounded-2xl border max-w-xs w-full shadow-2xl backdrop-blur-xl ${
                isDarkMode
                  ? "bg-slate-950/95 border-slate-700 text-white"
                  : "bg-white/95 border-slate-200 text-slate-900"
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: `${hoveredNode.color}20` }}
                  >
                    {React.createElement(hoveredNode.icon, {
                      size: 18,
                      style: { color: hoveredNode.color },
                    })}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold">{hoveredNode.name}</h4>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {hoveredNode.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className="text-xs font-mono font-extrabold px-2 py-0.5 rounded border"
                    style={{
                      color: hoveredNode.color,
                      borderColor: `${hoveredNode.color}50`,
                      backgroundColor: `${hoveredNode.color}15`,
                    }}
                  >
                    {hoveredNode.level}
                  </span>
                </div>
              </div>

              {/* Proficiency Label */}
              <div className="mb-2">
                <span className="text-[11px] font-mono font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {hoveredNode.proficiency}
                </span>
              </div>

              {/* Details & Tech Stack */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {hoveredNode.description}
              </p>

              {/* Progress Track */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredNode.level }}
                  transition={{ duration: 0.35 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: hoveredNode.color }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveSkillCloud;
