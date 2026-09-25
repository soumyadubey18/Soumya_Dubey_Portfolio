import React, { useState } from "react";
import {
  FaTerminal,
  FaPlay,
  FaCheck,
  FaDocker,
  FaCopy,
} from "react-icons/fa";
import { SiTerraform, SiLinux, SiPython } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

const COMMANDS = [
  {
    id: "infraforensics",
    title: "INFRAFORENSICS Telemetry",
    category: "System Forensics",
    cmd: "python3 infraforensics.py --snapshot --compare",
    icon: <SiPython className="text-yellow-400" size={14} />,
    description: "Captures host metrics via psutil, saves SQLite snapshot, and computes SHA-256 Infrastructure DNA fingerprint to classify drift.",
    output: [
      { type: "cmd", text: "$ python3 infraforensics.py --snapshot --compare" },
      { type: "info", text: "[02:14:02 UTC] Initializing telemetry collector (psutil v5.9.8)..." },
      { type: "info", text: "✓ Host: aws-ap-south-1-node01.internal | OS: Ubuntu 22.04 LTS" },
      { type: "metric", text: "✓ Telemetry: CPU: 14.2% | RAM: 3.8GB/16.0GB (23.7%) | Disk: 42% utilized" },
      { type: "metric", text: "✓ Process Tree: 146 active tasks | Top process: node (pid: 1420, 2.1% CPU)" },
      { type: "info", text: "✓ Historical Snapshot persisted: SQLite DB (records: 1,420, id: #SN-9812)" },
      { type: "accent", text: "✓ Computing Infrastructure DNA: sha256:7f8a92b3c10e478d..." },
      { type: "success", text: "➜ Compare result: 0 drift anomalies detected. System status: STABLE (NORMAL)" },
    ],
  },
  {
    id: "terraform",
    title: "Terraform Execution Plan",
    category: "Infrastructure as Code",
    cmd: "terraform plan -out=tfplan.binary",
    icon: <SiTerraform className="text-purple-400" size={14} />,
    description: "Inspects AWS ap-south-1 provider state against main.tf declarative blueprints to plan compute, S3, and security group creation.",
    output: [
      { type: "cmd", text: "$ terraform plan -out=tfplan.binary" },
      { type: "info", text: "Acquiring state lock. This may take a few moments..." },
      { type: "info", text: "Refreshing Terraform state in AWS ap-south-1 (Mumbai)..." },
      { type: "accent", text: "+ aws_instance.web_server (ami-0c55b159cbfafe1f0, t3.micro)" },
      { type: "accent", text: "  + instance_type: \"t3.micro\"" },
      { type: "accent", text: "  + vpc_security_group_ids: [\"sg-04a8b79e23\"]" },
      { type: "accent", text: "+ aws_s3_bucket.artifact_store (bucket: \"soumya-app-artifacts-2026\")" },
      { type: "accent", text: "+ aws_security_group.allow_http (ingress: [80/tcp, 443/tcp, 22/tcp])" },
      { type: "success", text: "Plan: 3 to add, 0 to change, 0 to destroy." },
      { type: "info", text: "Saved the plan to: tfplan.binary" },
      { type: "success", text: "➜ Ready to execute: terraform apply tfplan.binary" },
    ],
  },
  {
    id: "docker",
    title: "Docker Build & AWS ECR Push",
    category: "CI/CD & Containers",
    cmd: "docker build -t app:v1.2 . && aws ecr push",
    icon: <FaDocker className="text-sky-400" size={15} />,
    description: "Automated containerization workflow building minimal Linux container image and pushing to AWS Elastic Container Registry.",
    output: [
      { type: "cmd", text: "$ docker build -t 292178061524.dkr.ecr.ap-south-1.amazonaws.com/app:v1.2 ." },
      { type: "info", text: "[+] Building 4.6s (10/10) FINISHED" },
      { type: "info", text: " => [internal] load build definition from Dockerfile" },
      { type: "info", text: " => [stage-0 1/4] FROM node:20-alpine AS builder" },
      { type: "info", text: " => [stage-0 2/4] COPY package*.json ./ && RUN npm ci --omit=dev" },
      { type: "info", text: " => [stage-1 1/3] FROM alpine:3.19 (image size: 54.2 MB)" },
      { type: "accent", text: " => exporting to image sha256:8b41cd9e217806" },
      { type: "info", text: "$ aws ecr get-login-password | docker login --username AWS..." },
      { type: "accent", text: "The push refers to repository [292178061524.dkr.ecr.ap-south-1.amazonaws.com/app]" },
      { type: "success", text: "v1.2: digest: sha256:8b41cd9e2... size: 2410" },
      { type: "success", text: "➜ Deployed to AWS EC2 via automated GitHub Actions runner (HTTP 200 OK)" },
    ],
  },
  {
    id: "ec2linux",
    title: "AWS Linux EBS Storage Mount",
    category: "Linux Administration",
    cmd: "sudo mkfs -t ext4 /dev/xvdf && sudo mount /dev/xvdf /mnt/data",
    icon: <SiLinux className="text-yellow-400" size={14} />,
    description: "Formats new AWS EBS block storage volume with ext4 filesystem, creates mount directory, and mounts for persistent server data.",
    output: [
      { type: "cmd", text: "$ lsblk" },
      { type: "info", text: "NAME    MAJ:MIN RM SIZE RO TYPE MOUNTPOINTS" },
      { type: "info", text: "xvda    202:0    0   8G  0 disk" },
      { type: "info", text: "└─xvda1 202:1    0   8G  0 part /" },
      { type: "accent", text: "xvdf    202:80   0  20G  0 disk (Attached AWS EBS Volume)" },
      { type: "cmd", text: "$ sudo mkfs -t ext4 /dev/xvdf" },
      { type: "info", text: "Creating filesystem with 5242880 4k blocks and 1310720 inodes" },
      { type: "info", text: "Writing superblocks and filesystem accounting information: done" },
      { type: "cmd", text: "$ sudo mkdir -p /mnt/data && sudo mount /dev/xvdf /mnt/data" },
      { type: "cmd", text: "$ df -hT /mnt/data" },
      { type: "success", text: "Filesystem     Type  Size  Used Avail Use% Mounted on" },
      { type: "success", text: "/dev/xvdf      ext4   20G   44M   19G   1% /mnt/data" },
      { type: "success", text: "➜ Volume operational. Added /etc/fstab entry for persistence." },
    ],
  },
];

export const DevOpsWorkbench = () => {
  const { isDarkMode } = useDarkMode();
  const [activeCmdId, setActiveCmdId] = useState(COMMANDS[0].id);
  const [copied, setCopied] = useState(false);

  const activeCmd = COMMANDS.find((c) => c.id === activeCmdId) || COMMANDS[0];

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(activeCmd.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLineClass = (type) => {
    switch (type) {
      case "cmd":
        return "text-sky-400 font-bold";
      case "success":
        return "text-emerald-400 font-medium";
      case "accent":
        return "text-amber-400";
      case "metric":
        return "text-purple-300";
      default:
        return "text-slate-300 dark:text-slate-400";
    }
  };

  return (
    <section
      id="devops-workbench"
      className={`py-20 border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#080C14] border-slate-800/80 text-slate-100"
          : "bg-slate-50/70 border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Interactive Architecture & CLI Sandbox
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Cloud & DevOps Engineering Workbench
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Click below to execute simulated real-world commands across Python forensics, Terraform Infrastructure as Code, Docker CI/CD, and Linux volume administration.
          </p>
        </div>

        {/* Command Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {COMMANDS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCmdId(item.id)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeCmdId === item.id
                  ? isDarkMode
                    ? "bg-slate-900 border-sky-500 shadow-md shadow-sky-500/10 ring-1 ring-sky-500/30"
                    : "bg-white border-sky-500 shadow-sm ring-1 ring-sky-500/30"
                  : isDarkMode
                  ? "bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 text-slate-400 hover:text-white"
                  : "bg-white border-slate-200 hover:bg-slate-100 text-slate-600"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {item.icon}
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                {item.title}
              </p>
            </button>
          ))}
        </div>

        {/* Terminal Container */}
        <div
          className={`rounded-2xl border shadow-2xl overflow-hidden transition-all ${
            isDarkMode
              ? "bg-[#05080E] border-slate-800"
              : "bg-slate-950 border-slate-800 text-slate-100 shadow-xl"
          }`}
        >
          {/* Mac-Style Terminal Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <FaTerminal size={11} className="text-sky-400" />
                <span>soumya@aws-cloud-bastion: ~/projects/{activeCmd.id}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyCmd}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                title="Copy command"
              >
                {copied ? <FaCheck className="text-emerald-400" size={11} /> : <FaCopy size={11} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                x86_64 Linux
              </span>
            </div>
          </div>

          {/* Description Sub-banner */}
          <div className="px-5 py-2.5 bg-slate-900/60 border-b border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="truncate mr-4">{activeCmd.description}</span>
            <span className="text-sky-400 font-semibold shrink-0 flex items-center gap-1">
              <FaPlay size={9} /> EXECUTED
            </span>
          </div>

          {/* Output Display */}
          <div className="p-5 font-mono text-xs sm:text-[13px] space-y-2 leading-relaxed min-h-[220px] max-h-[360px] overflow-y-auto">
            {activeCmd.output.map((line, idx) => (
              <div key={idx} className={`${getLineClass(line.type)} break-all`}>
                {line.text}
              </div>
            ))}
            <div className="flex items-center gap-1.5 text-slate-500 pt-2">
              <span className="text-sky-400">soumya@cloud-bastion:~$</span>
              <span className="w-2 h-4 bg-sky-400 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsWorkbench;
