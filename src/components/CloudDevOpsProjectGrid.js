import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaSearch,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { SiTerraform, SiLinux, SiPython } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

export const CLOUD_DEVOPS_PROJECTS = [
  {
    id: "infraforensics",
    title: "INFRAFORENSICS",
    subtitle: "Infrastructure State Reconstruction & Incident Forensics",
    category: "System Forensics",
    flagship: true,
    tagline:
      "Continuous system telemetry snapshotting, cryptographic DNA fingerprinting, and forensic state diffing for AWS & Linux environments.",
    techTags: ["AWS", "Python", "Linux", "SQLite", "CI/CD"],
    techDisplay: ["Python 3", "psutil", "SQLite", "SHA-256", "Linux", "Git"],
    metrics: { label1: "Telemetry", val1: "Real-time psutil", label2: "Fingerprint", val2: "SHA-256 DNA", label3: "Drift Status", val3: "Zero Drift" },
    points: [
      "Captures continuous system telemetry: CPU, memory, disk utilization, process tree, and host timestamps.",
      "Generates deterministic Infrastructure DNA fingerprints to detect unexpected configuration drift across time.",
      "Stores historical snapshots in SQLite as forensic evidence for incident timelines and deployment rollbacks.",
    ],
    github: "https://github.com/soumyadubey18/infraforensics",
    demo: null,
    snippetTitle: "System Snapshot & Forensic DNA Generation (Python)",
    snippet: `# INFRAFORENSICS - Telemetry Capture & DNA Engine
import psutil, hashlib, json, time, sqlite3

def capture_system_dna():
    state = {
        "timestamp": int(time.time()),
        "cpu_percent": psutil.cpu_percent(interval=1),
        "memory_used_gb": round(psutil.virtual_memory().used / (1024**3), 2),
        "disk_percent": psutil.disk_usage('/').percent,
        "process_count": len(psutil.pids()),
        "boot_time": psutil.boot_time()
    }
    # Deterministic cryptographic fingerprint
    dna = hashlib.sha256(json.dumps(state, sort_keys=True).encode()).hexdigest()
    state["dna_fingerprint"] = dna
    return state`,
  },
  {
    id: "docker-cicd",
    title: "Dockerized Website CI/CD Pipeline",
    subtitle: "Automated Build, Test & Cloud Rollout",
    category: "DevOps & CI/CD",
    flagship: false,
    tagline:
      "Automated continuous delivery pipeline leveraging GitHub Actions, AWS Elastic Container Registry (ECR), and Amazon EC2 host instances.",
    techTags: ["Docker", "AWS", "CI/CD", "Linux"],
    techDisplay: ["Docker", "GitHub Actions", "AWS ECR", "AWS EC2", "Bash"],
    metrics: { label1: "Registry", val1: "AWS ECR", label2: "Compute", val2: "Amazon EC2", label3: "Trigger", val3: "git push" },
    points: [
      "Containerized web workloads with lightweight multi-stage Dockerfiles for minimal image footprint.",
      "Created an automated GitHub Actions pipeline executing linting, container builds, and security scans on push triggers.",
      "Automated deployment of containerized workloads onto an Amazon Linux EC2 instance with health-check validation.",
    ],
    github: "https://github.com/soumyadubey18/dockerized-website-cicd",
    demo: null,
    snippetTitle: "GitHub Actions Workflow (.github/workflows/deploy.yml)",
    snippet: `name: Build & Push to AWS ECR
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1
      - name: Login to Amazon ECR
        uses: aws-actions/amazon-ecr-login@v1
      - name: Build, Tag & Push Docker Image
        run: |
          docker build -t \${{ steps.login-ecr.outputs.registry }}/app:\${{ github.sha }} .
          docker push \${{ steps.login-ecr.outputs.registry }}/app:\${{ github.sha }}`,
  },
  {
    id: "terraform-aws",
    title: "AWS Infrastructure with Terraform",
    subtitle: "Declarative Infrastructure as Code (IaC)",
    category: "Cloud IaC",
    flagship: false,
    tagline:
      "Automated cloud provisioning of EC2 compute, encrypted S3 storage buckets, and security groups through modular Terraform declarations.",
    techTags: ["Terraform", "AWS", "Linux"],
    techDisplay: ["Terraform", "AWS EC2", "AWS S3", "VPC Security", "HCL"],
    metrics: { label1: "IaC Engine", val1: "Terraform 1.x", label2: "State", val2: "Zero Drift", label3: "Resources", val3: "EC2 · S3 · SGs" },
    points: [
      "Replaced manual cloud console actions with declarative Terraform HCL blueprints to achieve reproducible environments.",
      "Executed complete Terraform lifecycle: init, plan, apply, drift validation, and clean resource teardown.",
      "Configured stateful security groups controlling inbound HTTP (port 80) and SSH (port 22) network ingress.",
    ],
    github: "https://github.com/soumyadubey18/aws-terraform-provisioning",
    demo: null,
    snippetTitle: "Terraform Declarations (main.tf)",
    snippet: `resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2023
  instance_type = "t3.micro"
  key_name      = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  tags = {
    Name        = "Terraform-Managed-Server"
    Environment = "Production-Training"
    ManagedBy   = "Terraform"
  }
}

resource "aws_s3_bucket" "app_artifacts" {
  bucket        = "soumya-app-artifacts-2026"
  force_destroy = true
}`,
  },
  {
    id: "ec2-linux-webserver",
    title: "AWS EC2 Linux Server & Storage Lab",
    subtitle: "Apache Web Daemon & EBS Volume Management",
    category: "Systems & Linux",
    flagship: false,
    tagline:
      "Linux server administration, Apache HTTPD setup, EBS volume attachment, ext4 formatting, and persistent mount automation.",
    techTags: ["AWS", "Linux", "EBS"],
    techDisplay: ["AWS EC2", "Linux CLI", "Apache httpd", "AWS EBS", "Bash"],
    metrics: { label1: "Web Server", val1: "Apache httpd", label2: "Volume", val2: "20GB gp3", label3: "Filesystem", val3: "ext4 /mnt/data" },
    points: [
      "Provisioned Amazon Linux EC2 instances and managed secure remote terminal connections via SSH key pairs.",
      "Managed EBS block storage lifecycle: attaching volumes, ext4 formatting (mkfs), mounting, and /etc/fstab persistence.",
      "Maintained Apache HTTPD web server daemon with custom systemd service lifecycle control.",
    ],
    github: "https://github.com/soumyadubey18/aws-ec2-linux-webserver",
    demo: null,
    snippetTitle: "EBS Block Storage Formatting & Mounting (Bash)",
    snippet: `# 1. Inspect block devices
lsblk

# 2. Format volume as ext4 filesystem
sudo mkfs -t ext4 /dev/xvdf

# 3. Create mount point and mount volume
sudo mkdir -p /mnt/data
sudo mount /dev/xvdf /mnt/data

# 4. Verify mount and configure permissions
df -hT /mnt/data
sudo chown -R ec2-user:ec2-user /mnt/data`,
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance Verification System",
    subtitle: "Network Subnet-Restricted Attendance Service",
    category: "Python & Systems",
    flagship: false,
    tagline:
      "Python Flask attendance verification platform enforcing CIDR network subnet validation and duplicate detection with SQLite persistence.",
    techTags: ["Python", "Linux", "SQLite"],
    techDisplay: ["Python", "Flask", "SQLite", "Subnet IP", "Linux"],
    metrics: { label1: "Framework", val1: "Python Flask", label2: "Access", val2: "CIDR /24", label3: "Persistence", val3: "SQLite3" },
    points: [
      "Built a lightweight attendance verification platform with Python Flask and SQLite persistence.",
      "Implemented CIDR network subnet validation restricting attendance check-ins to authorized campus networks.",
      "Implemented duplicate-prevention algorithms to prevent duplicate timestamp entries within active sessions.",
    ],
    github: "https://github.com/soumyadubey18/smart-attendance-flask",
    demo: null,
    snippetTitle: "Network IP Validation & Duplicate Prevention (Python Flask)",
    snippet: `from flask import Flask, request, jsonify
from ipaddress import ip_network, ip_address

INSTITUTE_CIDR = ip_network("192.168.1.0/24")

@app.route('/api/attendance', methods=['POST'])
def record_attendance():
    client_ip = ip_address(request.remote_addr)
    if client_ip not in INSTITUTE_CIDR:
        return jsonify({"error": "Access denied: Out of network"}), 403

    student_id = request.json.get("student_id")
    if db.has_checked_in_today(student_id):
        return jsonify({"error": "Duplicate: Already recorded today"}), 409

    db.log_attendance(student_id, str(client_ip))
    return jsonify({"message": "Attendance confirmed"}), 201`,
  },
  {
    id: "careerbridge",
    title: "CareerBridge Management System",
    subtitle: "Role-Based Placement & Training Platform",
    category: "Full-Stack & APIs",
    flagship: false,
    tagline:
      "Full-stack institutional platform featuring 4-role RBAC, JWT authentication, Express REST APIs, and Prisma ORM migrations.",
    techTags: ["Docker", "CI/CD", "SQLite", "Full-Stack"],
    techDisplay: ["React", "TypeScript", "Node.js", "Express", "Prisma", "JWT"],
    metrics: { label1: "Frontend", val1: "React + TS", label2: "Backend", val2: "Express REST", label3: "Security", val3: "4-Role RBAC" },
    points: [
      "Developed an end-to-end placement pipeline coordinating students, batches, mock interviews, and company drives.",
      "Implemented JWT authentication and RBAC for 4 distinct roles: ADMIN, TRAINER, PLACEMENT, and STUDENT.",
      "Engineered relational schemas and Prisma ORM migrations with SQLite and PostgreSQL compatibility.",
    ],
    github: "https://github.com/soumyadubey18/careerbridge-placement-management-system",
    demo: "https://careerbridge-placement-management.netlify.app",
    snippetTitle: "Role-Based Access Control Middleware (Node.js/Express)",
    snippet: `// Role-based Access Control Middleware
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: "Forbidden: Insufficient privileges for this operation"
      });
    }
    next();
  };
};

// Route Protection Example
router.post('/api/placement/drives', 
  authenticateJWT, 
  authorizeRoles('ADMIN', 'PLACEMENT'), 
  createPlacementDrive
);`,
  },
];

const AVAILABLE_TAGS = [
  { id: "all", label: "All Projects" },
  { id: "AWS", label: "AWS", icon: FaAws, color: "text-amber-500" },
  { id: "Terraform", label: "Terraform", icon: SiTerraform, color: "text-purple-400" },
  { id: "Docker", label: "Docker", icon: FaDocker, color: "text-sky-400" },
  { id: "Linux", label: "Linux", icon: SiLinux, color: "text-yellow-400" },
  { id: "CI/CD", label: "CI/CD", icon: FaCodeBranch, color: "text-emerald-400" },
  { id: "Python", label: "Python", icon: SiPython, color: "text-blue-400" },
];

export const CloudDevOpsProjectGrid = ({ onSelectProject }) => {
  const { isDarkMode } = useDarkMode();
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CLOUD_DEVOPS_PROJECTS.filter((project) => {
      const matchesTag =
        selectedTag === "all" || project.techTags.includes(selectedTag);

      if (!matchesTag) return false;

      if (!q) return true;

      // Check tech stack tags
      const hasMatchingTag = project.techTags.some((tag) =>
        tag.toLowerCase().includes(q)
      );
      // Check display tech tools (e.g., "Python 3", "psutil", "AWS EC2")
      const hasMatchingTechDisplay = project.techDisplay.some((t) =>
        t.toLowerCase().includes(q)
      );
      // Check titles & descriptions
      const hasMatchingTitle = project.title.toLowerCase().includes(q);
      const hasMatchingSubtitle = project.subtitle.toLowerCase().includes(q);
      const hasMatchingTagline = project.tagline.toLowerCase().includes(q);
      const hasMatchingCategory = project.category.toLowerCase().includes(q);
      const hasMatchingPoints = project.points.some((p) =>
        p.toLowerCase().includes(q)
      );

      return (
        hasMatchingTag ||
        hasMatchingTechDisplay ||
        hasMatchingTitle ||
        hasMatchingSubtitle ||
        hasMatchingTagline ||
        hasMatchingCategory ||
        hasMatchingPoints
      );
    });
  }, [selectedTag, searchQuery]);

  // Renders a high-craft visual viewport inside each card that previews the technology
  const renderVisualPreview = (project) => {
    switch (project.id) {
      case "infraforensics":
        return (
          <div className="rounded-xl bg-[#03060C] border border-slate-800 p-3.5 font-mono text-[11px] select-none text-slate-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5 text-sky-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>INFRAFORENSICS TELEMETRY ENGINE</span>
              </span>
              <span className="text-emerald-400 font-bold">STATE: VERIFIED</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-slate-400">
                <span>CPU Load:</span>
                <span className="text-sky-400 font-bold">14.8% [████▒▒▒▒▒▒▒▒]</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Memory:</span>
                <span className="text-purple-400 font-bold">3.8GB / 16GB (psutil)</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>DNA Hash:</span>
                <span className="text-amber-400 font-mono">sha256:7f8a92b3c...</span>
              </div>
            </div>
          </div>
        );

      case "docker-cicd":
        return (
          <div className="rounded-xl bg-[#03060C] border border-slate-800 p-3.5 font-mono text-[11px] select-none">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
              <span className="text-sky-400">CI/CD PIPELINE STATUS</span>
              <span className="text-emerald-400">AUTOMATED</span>
            </div>
            {/* Visual Mini Pipeline Flow */}
            <div className="flex items-center justify-between gap-1 text-[10px] py-1 text-slate-300">
              <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 text-center">
                git push
              </div>
              <span className="text-slate-600">→</span>
              <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-purple-400 text-center">
                Docker Build
              </div>
              <span className="text-slate-600">→</span>
              <div className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400 text-center">
                AWS ECR
              </div>
              <span className="text-slate-600">→</span>
              <div className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-center">
                EC2 (200 OK)
              </div>
            </div>
          </div>
        );

      case "terraform-aws":
        return (
          <div className="rounded-xl bg-[#03060C] border border-slate-800 p-3.5 font-mono text-[11px] select-none text-slate-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
              <span className="text-purple-400">main.tf · Terraform HCL</span>
              <span className="text-emerald-400">SYNCHRONIZED</span>
            </div>
            <div className="text-[11px] leading-relaxed text-slate-400 font-mono">
              <div><span className="text-purple-400">resource</span> <span className="text-sky-300">"aws_instance"</span> <span className="text-amber-300">"app"</span> &#123;</div>
              <div className="pl-3">ami = <span className="text-emerald-300">"ami-0c55b159cbfafe1f0"</span></div>
              <div className="pl-3">instance_type = <span className="text-emerald-300">"t3.micro"</span></div>
              <div className="pl-3 text-slate-500"># Declarative IaC Managed</div>
              <div>&#125;</div>
            </div>
          </div>
        );

      case "ec2-linux-webserver":
        return (
          <div className="rounded-xl bg-[#03060C] border border-slate-800 p-3.5 font-mono text-[11px] select-none text-slate-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
              <span className="text-yellow-400">ec2-user@aws-linux:~$</span>
              <span className="text-emerald-400">SSH ACTIVE</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-400">
              <div className="text-sky-300">$ sudo mkfs -t ext4 /dev/xvdf</div>
              <div className="text-slate-500">Writing superblocks: 100% done</div>
              <div className="text-amber-300">$ sudo mount /dev/xvdf /mnt/data</div>
              <div className="text-emerald-400">✓ /dev/xvdf  ext4  20G  1% mounted on /mnt/data</div>
            </div>
          </div>
        );

      case "smart-attendance":
        return (
          <div className="rounded-xl bg-[#03060C] border border-slate-800 p-3.5 font-mono text-[11px] select-none text-slate-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
              <span className="text-blue-400">FLASK REST API GATEWAY</span>
              <span className="text-emerald-400">SUBNET SECURE</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">CIDR Restriction:</span>
                <span className="text-emerald-400 font-bold">192.168.1.0/24 [MATCH]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Duplicate Check:</span>
                <span className="text-sky-400 font-bold">PASSED (Zero Duplicates)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Database Engine:</span>
                <span className="text-amber-400 font-bold">SQLite3 WAL Mode</span>
              </div>
            </div>
          </div>
        );

      case "careerbridge":
        return (
          <div className="rounded-xl bg-[#03060C] border border-slate-800 p-3.5 font-mono text-[11px] select-none text-slate-300 space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>RBAC AUTHORIZATION MATRIX</span>
              </span>
              <span className="text-emerald-400 font-bold">JWT VERIFIED</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px]">
              <div className="px-2 py-1 rounded bg-red-950/40 border border-red-800/50 text-red-300 text-center font-bold">
                ADMIN
                <span className="block text-[9px] text-slate-400 font-normal">Full Control</span>
              </div>
              <div className="px-2 py-1 rounded bg-blue-950/40 border border-blue-800/50 text-blue-300 text-center font-bold">
                TRAINER
                <span className="block text-[9px] text-slate-400 font-normal">Batches & Tests</span>
              </div>
              <div className="px-2 py-1 rounded bg-amber-950/40 border border-amber-800/50 text-amber-300 text-center font-bold">
                PLACEMENT
                <span className="block text-[9px] text-slate-400 font-normal">Drives & Interviews</span>
              </div>
              <div className="px-2 py-1 rounded bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-center font-bold">
                STUDENT
                <span className="block text-[9px] text-slate-400 font-normal">Portal & Applies</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 flex items-center justify-between border-t border-slate-800/60">
              <span>Database Engine: <span className="text-amber-400 font-semibold">Prisma ORM + SQLite / PostgreSQL</span></span>
              <span className="text-sky-400 font-semibold">Zod Validation</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getTagBadge = (tag) => {
    switch (tag) {
      case "AWS":
        return <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400"><FaAws size={11} /> AWS</span>;
      case "Terraform":
        return <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400"><SiTerraform size={10} /> Terraform</span>;
      case "Docker":
        return <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400"><FaDocker size={11} /> Docker</span>;
      case "Linux":
        return <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"><SiLinux size={10} /> Linux</span>;
      case "CI/CD":
        return <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"><FaCodeBranch size={10} /> CI/CD</span>;
      case "Python":
        return <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400"><SiPython size={10} /> Python</span>;
      default:
        return <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/40 border border-slate-700/50 text-slate-300">{tag}</span>;
    }
  };

  return (
    <div className="w-full">
      {/* Prominent Tech Stack Search Bar at top of section */}
      <div className="mb-10 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-lg">
        {/* Main Search Input */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-4 text-slate-400 text-sm pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by technology stack (e.g. 'Docker', 'AWS', 'Python', 'Terraform', 'CI/CD')..."
            className={`w-full pl-11 pr-24 py-3 text-xs sm:text-sm rounded-2xl border font-medium focus:outline-none transition-all shadow-inner ${
              isDarkMode
                ? "bg-[#050811] border-slate-800 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-14 p-1.5 text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
              title="Clear search"
            >
              <FaTimes size={13} />
            </button>
          )}
          <div className="absolute right-3 hidden sm:flex items-center">
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              {filteredProjects.length} / {CLOUD_DEVOPS_PROJECTS.length}
            </span>
          </div>
        </div>

        {/* Quick Tech Stack Filter Chips */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400 mr-1 hidden sm:inline">
              Quick Filter:
            </span>
            {AVAILABLE_TAGS.map((tag) => {
              const Icon = tag.icon;
              const isSelected = selectedTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => {
                    setSelectedTag(tag.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    isSelected
                      ? "bg-sky-500 text-white border-sky-400 shadow-sm shadow-sky-500/25 scale-105"
                      : isDarkMode
                      ? "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  {Icon && <Icon className={isSelected ? "text-white" : tag.color} size={11} />}
                  <span>{tag.label}</span>
                </button>
              );
            })}
          </div>

          {(searchQuery || selectedTag !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("all");
              }}
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
            >
              <span>Reset filter</span>
              <FaTimes size={10} />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Redesigned Modern Cards with Framer Motion Hover Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, idx) => {
          const isCareerBridgeWide =
            project.id === "careerbridge" &&
            (filteredProjects.length === 6 ||
              filteredProjects.length === 1 ||
              idx === filteredProjects.length - 1);

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{
                scale: isCareerBridgeWide ? 1.01 : 1.025,
                y: -5,
                boxShadow: isDarkMode
                  ? isCareerBridgeWide
                    ? "0 0 35px -2px rgba(168, 85, 247, 0.35), 0 20px 25px -5px rgba(0, 0, 0, 0.5)"
                    : project.flagship
                    ? "0 0 35px -2px rgba(56, 189, 248, 0.4), 0 0 15px 1px rgba(245, 158, 11, 0.25), 0 20px 25px -5px rgba(0, 0, 0, 0.5)"
                    : "0 0 30px -3px rgba(56, 189, 248, 0.35), 0 20px 25px -5px rgba(0, 0, 0, 0.5)"
                  : isCareerBridgeWide
                  ? "0 0 30px -3px rgba(168, 85, 247, 0.25), 0 16px 24px -4px rgba(0, 0, 0, 0.08)"
                  : project.flagship
                  ? "0 0 30px -3px rgba(14, 165, 233, 0.35), 0 16px 24px -4px rgba(0, 0, 0, 0.08)"
                  : "0 0 25px -4px rgba(14, 165, 233, 0.3), 0 12px 20px -4px rgba(0, 0, 0, 0.06)",
                transition: {
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                },
              }}
              className={`group rounded-3xl border transition-colors flex flex-col justify-between overflow-hidden ${
                isCareerBridgeWide
                  ? isDarkMode
                    ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#0D0B18] via-[#080711] to-[#04040A] border-purple-500/40 hover:border-purple-400"
                    : "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white via-purple-50/20 to-purple-50/40 border-purple-200 hover:border-purple-400 shadow-sm"
                  : project.flagship
                  ? isDarkMode
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0B0F19] to-[#05080E] border-sky-500/40 hover:border-sky-400"
                    : "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-sky-50/40 border-sky-300 hover:border-sky-500"
                  : isDarkMode
                  ? "bg-slate-900/40 border-slate-800/90 hover:border-sky-400/80 hover:bg-slate-900/70"
                  : "bg-white border-slate-200 hover:border-sky-400 shadow-sm"
              }`}
            >
              {/* Top Mac-Style Terminal Bar */}
              <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800/70 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block"></span>
                  <span className="ml-2 text-[11px] font-mono text-slate-400 truncate max-w-[160px] sm:max-w-xs">
                    {isCareerBridgeWide ? "Full-Stack & APIs · Enterprise Platform" : project.category}
                  </span>
                </div>

                {project.flagship && (
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1">
                    ★ Flagship Platform
                  </span>
                )}

                {isCareerBridgeWide && (
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Full-Stack Web App · Live Deployment
                  </span>
                )}
              </div>

              {/* Card Body */}
              {isCareerBridgeWide ? (
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left Column: Details & Points */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                            Full-Stack Web Application
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            Prisma ORM · SQLite Persistence
                          </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-400 font-semibold mt-0.5">
                          {project.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techTags.map((tag) => getTagBadge(tag))}
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400">
                          React.js + TS
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          Node & Express REST
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400">
                          Prisma ORM
                        </span>
                      </div>

                      {/* All 3 Engineering Highlights */}
                      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                        {project.points.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug"
                          >
                            <FaCheckCircle className="text-purple-400 mt-0.5 shrink-0" size={13} />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Visual Preview, Architecture Stats & Quick Links */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                      {/* Visual Viewport */}
                      <div>{renderVisualPreview(project)}</div>

                      {/* Architecture Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 text-center">
                        <div>
                          <span className="block text-[10px] text-slate-400 font-mono">
                            FRONTEND
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            React + TS
                          </span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-400 font-mono">
                            BACKEND
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Express REST
                          </span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-slate-400 font-mono">
                            SECURITY
                          </span>
                          <span className="text-xs font-bold text-emerald-400">
                            4-Role RBAC
                          </span>
                        </div>
                      </div>

                      {/* Direct Live Demo Link Button */}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-semibold transition-colors"
                        >
                          <span>Launch CareerBridge Live Platform</span>
                          <FaExternalLinkAlt size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-500 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bespoke Visual Viewport Showcase */}
                  <div className="pt-1">{renderVisualPreview(project)}</div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techTags.map((tag) => getTagBadge(tag))}
                  </div>

                  {/* Engineering Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    {project.points.slice(0, 2).map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-snug"
                      >
                        <FaCheckCircle className="text-sky-500 mt-0.5 shrink-0" size={11} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Action Footer */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-between gap-3 mt-auto">
                <button
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
                    isCareerBridgeWide
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-sky-500 hover:text-sky-400"
                  }`}
                >
                  <span>Inspect Architecture Deep Dive</span>
                  <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-xl border transition-colors ${
                        isDarkMode
                          ? "border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white"
                          : "border-slate-200 hover:bg-slate-100 text-slate-700"
                      }`}
                      title="View GitHub Repository"
                    >
                      <FaGithub size={13} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-xl border transition-colors ${
                        isDarkMode
                          ? "border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white"
                          : "border-slate-200 hover:bg-slate-100 text-slate-700"
                      }`}
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
            <FaSearch size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
            No projects found matching {searchQuery ? `"${searchQuery}"` : `tag "${selectedTag}"`}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
            Try searching for core engineering stacks like{" "}
            <button
              onClick={() => { setSearchQuery("Docker"); setSelectedTag("all"); }}
              className="text-sky-400 hover:underline font-semibold"
            >
              Docker
            </button>
            ,{" "}
            <button
              onClick={() => { setSearchQuery("AWS"); setSelectedTag("all"); }}
              className="text-amber-400 hover:underline font-semibold"
            >
              AWS
            </button>
            ,{" "}
            <button
              onClick={() => { setSearchQuery("Python"); setSelectedTag("all"); }}
              className="text-blue-400 hover:underline font-semibold"
            >
              Python
            </button>
            , or{" "}
            <button
              onClick={() => { setSearchQuery("Terraform"); setSelectedTag("all"); }}
              className="text-purple-400 hover:underline font-semibold"
            >
              Terraform
            </button>
            .
          </p>
          <button
            onClick={() => {
              setSelectedTag("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-white hover:bg-sky-400 transition-colors shadow-sm"
          >
            Clear Search & Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CloudDevOpsProjectGrid;
