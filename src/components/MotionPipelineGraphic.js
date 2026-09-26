import React, { useState, useEffect } from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaTerminal,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiGithubactions, SiPython } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

export const MotionPipelineGraphic = () => {
  const { isDarkMode } = useDarkMode();
  const [activeStep, setActiveStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  const [speed, setSpeed] = useState("normal"); // normal | fast
  const [packetCount, setPacketCount] = useState(42);
  const [simulatedLogs, setSimulatedLogs] = useState([
    { time: "02:22:10", msg: "Service active: ec2-node01.internal (HTTP 200 OK)", color: "text-emerald-400" },
    { time: "02:22:14", msg: "INFRAFORENSICS radar scan complete: 0 drifts detected", color: "text-sky-400" },
  ]);

  // Live fluctuating telemetry values
  const [telemetry, setTelemetry] = useState({
    cpu: 16.4,
    mem: 4.1,
    latency: 24,
    dna: "7f9a2b8e",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        cpu: Number((15 + Math.random() * 4).toFixed(1)),
        mem: Number((4.0 + Math.random() * 0.3).toFixed(2)),
        latency: Math.floor(22 + Math.random() * 5),
        dna: prev.dna,
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Deployment simulation sequence
  const triggerDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setActiveStep(1);

    const log = (msg, color = "text-sky-400") => {
      const now = new Date().toTimeString().split(" ")[0];
      setSimulatedLogs((prev) => [{ time: now, msg, color }, ...prev.slice(0, 5)]);
    };

    log("Git push received on main. Firing GitHub Actions CI...", "text-sky-400");
    setPacketCount((c) => c + 1);

    const stepDelay = speed === "fast" ? 600 : 1200;

    setTimeout(() => {
      setActiveStep(2);
      log("GitHub Actions: Multi-stage Docker build passed. Pushing to AWS ECR...", "text-purple-400");
    }, stepDelay);

    setTimeout(() => {
      setActiveStep(3);
      log("AWS ECR: Image sha256:4b19c verified. Triggering rolling deploy on EC2...", "text-amber-400");
    }, stepDelay * 2);

    setTimeout(() => {
      setActiveStep(4);
      log("EC2 Instance: Container healthy. HTTP 200 OK (22ms). Forensics snapshot recorded!", "text-emerald-400");
      setIsDeploying(false);
    }, stepDelay * 3);
  };

  const triggerScan = () => {
    const randomHex = Math.random().toString(16).substring(2, 10);
    setTelemetry((t) => ({ ...t, dna: randomHex }));
    const now = new Date().toTimeString().split(" ")[0];
    setSimulatedLogs((prev) => [
      { time: now, msg: `Drift scan complete. DNA Fingerprint: sha256:${randomHex}... Status: ZERO_DRIFT`, color: "text-amber-400" },
      ...prev.slice(0, 5),
    ]);
  };

  const steps = [
    {
      id: 1,
      title: "1. Code Commit",
      subtitle: "git push origin main",
      icon: <FaTerminal className="text-sky-400" size={16} />,
      status: "Verified",
    },
    {
      id: 2,
      title: "2. GitHub Actions CI",
      subtitle: "Lint · Build · Test",
      icon: <SiGithubactions className="text-purple-400" size={16} />,
      status: activeStep >= 2 ? "Built 4.2s" : "Queued",
    },
    {
      id: 3,
      title: "3. AWS ECR Registry",
      subtitle: "sha256 Immutable Tag",
      icon: <FaDocker className="text-sky-400" size={16} />,
      status: activeStep >= 3 ? "Pushed" : "Listening",
    },
    {
      id: 4,
      title: "4. AWS EC2 Cloud Node",
      subtitle: "Ubuntu 22.04 / AL2023",
      icon: <FaAws className="text-amber-500" size={18} />,
      status: "HTTP 200 OK",
    },
  ];

  return (
    <section
      id="pipeline-motion"
      className={`py-24 border-t transition-colors duration-300 relative overflow-hidden ${
        isDarkMode
          ? "bg-[#060910] border-slate-800/80 text-slate-100"
          : "bg-slate-50 border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-500">
                Live Cloud & DevOps Motion Engine
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Continuous CI/CD Delivery & Forensics Motion
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Interactive motion visualization of automated container pipelines, AWS cloud rollout, and continuous system state snapshotting.
            </p>
          </div>

          {/* Interactive Action Controls */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={triggerDeploy}
              disabled={isDeploying}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-amber-500 hover:from-sky-400 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <FaRocket size={12} className={isDeploying ? "animate-bounce" : ""} />
              <span>{isDeploying ? "Pipeline In Flight..." : "Simulate Deploy Cycle"}</span>
            </button>

            <button
              onClick={triggerScan}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? "bg-slate-900/80 border-slate-800 text-amber-400 hover:border-amber-500/40"
                  : "bg-white border-slate-200 text-amber-600 hover:border-amber-400 shadow-sm"
              }`}
            >
              <FaShieldAlt size={12} />
              <span>Scan Drift</span>
            </button>

            <button
              onClick={() => setSpeed(speed === "normal" ? "fast" : "normal")}
              className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-medium transition-colors ${
                isDarkMode
                  ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                  : "bg-white border-slate-200 text-slate-600"
              }`}
              title="Toggle animation velocity"
            >
              Speed: <span className="text-sky-400 font-bold">{speed === "normal" ? "1x" : "2x"}</span>
            </button>
          </div>
        </div>

        {/* Visual Pipeline Stage Motion Canvas */}
        <div
          className={`rounded-3xl border shadow-2xl p-6 sm:p-8 transition-all relative overflow-hidden ${
            isDarkMode
              ? "bg-[#090D16]/90 border-slate-800 backdrop-blur-xl"
              : "bg-white border-slate-200 shadow-xl"
          }`}
        >
          {/* Top Status Bar & Live Telemetry Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Pipeline Engine: Online</span>
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                AWS ap-south-1 · Packets: <strong className="text-sky-400">{packetCount}</strong>
              </span>
            </div>

            {/* Dynamic Metric Ticker */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-slate-400">
                <span>CPU:</span>
                <span className="text-sky-400 font-bold tabular-nums">{telemetry.cpu}%</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <span>RAM:</span>
                <span className="text-purple-400 font-bold tabular-nums">{telemetry.mem} GB</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <span>Latency:</span>
                <span className="text-emerald-400 font-bold tabular-nums">{telemetry.latency}ms</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 hidden sm:flex">
                <span>DNA:</span>
                <span className="text-amber-400 font-bold">sha256:{telemetry.dna}</span>
              </div>
            </div>
          </div>

          {/* 4 Pipeline Stations with Animated Connecting Conduit */}
          <div className="relative my-6">
            {/* Animated Flowing SVG Conduit Line */}
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 pointer-events-none z-0">
              <svg className="w-full h-12 -top-6 absolute" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Background Track */}
                <line
                  x1="5%"
                  y1="24"
                  x2="95%"
                  y2="24"
                  stroke={isDarkMode ? "rgba(51, 65, 85, 0.4)" : "rgba(203, 213, 225, 0.6)"}
                  strokeWidth="3"
                />
                {/* Glowing Flowing Energy Stream */}
                <line
                  x1="5%"
                  y1="24"
                  x2="95%"
                  y2="24"
                  stroke="url(#flowGrad)"
                  strokeWidth="3"
                  strokeDasharray="12 12"
                  className={speed === "fast" ? "animate-flow-dash-fast" : "animate-flow-dash"}
                />
              </svg>
            </div>

            {/* Station Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {steps.map((st) => {
                const isActive = activeStep === st.id || (!isDeploying && st.id === 4);
                return (
                  <div
                    key={st.id}
                    className={`p-5 rounded-2xl border transition-all duration-300 relative ${
                      isActive
                        ? isDarkMode
                          ? "bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/10 ring-2 ring-sky-500/30 -translate-y-1"
                          : "bg-white border-sky-500 shadow-md ring-2 ring-sky-500/30 -translate-y-1"
                        : isDarkMode
                        ? "bg-slate-900/60 border-slate-800"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                        {st.icon}
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded font-semibold text-sky-500 bg-sky-500/10 border border-sky-500/20">
                        {st.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {st.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                      {st.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lower Split: Telemetry Radar Screen & Real-Time Terminal Log */}
          <div className="grid md:grid-cols-12 gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            {/* Radar Telemetry Graphic Display */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#05080E] border border-slate-800 text-center relative overflow-hidden">
              <div className="relative w-44 h-44 mb-3 flex items-center justify-center">
                {/* Circular Radar Grid Rings */}
                <div className="absolute inset-0 rounded-full border border-sky-500/20"></div>
                <div className="absolute inset-6 rounded-full border border-sky-500/30"></div>
                <div className="absolute inset-12 rounded-full border border-sky-500/40"></div>
                <div className="absolute inset-0 rounded-full border border-dashed border-sky-500/20"></div>

                {/* Radar Rotating Sweep Line */}
                <div className="absolute inset-0 flex items-center justify-center animate-radar-sweep">
                  <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-emerald-400 origin-left"></div>
                  <div className="absolute w-20 h-20 bg-gradient-to-tr from-sky-500/15 to-transparent rounded-full -top-5 -right-5"></div>
                </div>

                {/* Radar Sonar Ping Wave */}
                <div className="absolute w-12 h-12 rounded-full bg-emerald-500/20 animate-ripple-wave"></div>

                {/* Center Hub Indicator */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/40">
                  <SiPython size={16} className="text-yellow-400" />
                </div>

                {/* Satellite Radar Targets (Simulated infrastructure nodes) */}
                <span className="absolute top-7 right-10 w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" title="EC2 Node 01"></span>
                <span className="absolute bottom-10 left-9 w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" title="S3 Storage Bucket"></span>
                <span className="absolute top-12 left-12 w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-400" title="AWS ECR"></span>
              </div>

              <div className="text-center relative z-10">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">
                  INFRAFORENSICS Telemetry Radar
                </span>
                <p className="text-[11px] font-mono text-slate-400 mt-1">
                  Scanning 146 system processes · SHA-256 Drift: NORMAL
                </p>
              </div>
            </div>

            {/* Live Pipeline Events Console */}
            <div className="md:col-span-7 flex flex-col rounded-2xl bg-[#05080E] border border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <FaTerminal size={11} className="text-sky-400" />
                  <span>pipeline-runner.log</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  STREAMING
                </span>
              </div>

              <div className="p-4 font-mono text-xs space-y-2 overflow-y-auto max-h-[190px]">
                {simulatedLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-slate-600 select-none text-[11px] shrink-0">[{log.time}]</span>
                    <span className={`${log.color} leading-relaxed`}>{log.msg}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 text-slate-600 pt-1">
                  <span className="text-sky-400">➜</span>
                  <span className="w-2 h-4 bg-sky-400 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionPipelineGraphic;
