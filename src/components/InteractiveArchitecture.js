import React, { useState } from "react";
import {
  FaAws,
  FaDocker,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaNetworkWired,
  FaTerminal,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { useDarkMode } from "../context/DarkModeContext";

const ARCH_NODES = [
  {
    id: "vpc",
    name: "AWS VPC & Network Routing",
    shortName: "VPC & Routing",
    category: "Networking",
    icon: <FaNetworkWired size={18} className="text-sky-400" />,
    color: "sky",
    status: "Active · 10.0.0.0/16",
    details: "Custom VPC architecture spanning public subnets, internet gateways, and custom route tables routing IPv4 traffic.",
    specs: [
      { label: "CIDR Block", val: "10.0.0.0/16" },
      { label: "Subnets", val: "10.0.1.0/24 (Public), 10.0.2.0/24 (Private)" },
      { label: "Internet Gateway", val: "Attached to VPC (igw-08a9c)" },
      { label: "Route Table", val: "0.0.0.0/0 -> igw" },
    ],
    codeTitle: "Terraform VPC Network Blueprint (vpc.tf)",
    code: `resource "aws_vpc" "main_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "soumya-prod-vpc"
    Environment = "Cloud-Infra"
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main_vpc.id
}

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.main_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
}`,
  },
  {
    id: "security_groups",
    name: "Security Groups & Firewall",
    shortName: "Security Groups",
    category: "Access Control",
    icon: <FaShieldAlt size={18} className="text-emerald-400" />,
    color: "emerald",
    status: "Stateful · Zero Trust",
    details: "Least-privilege inbound/outbound firewall rules isolating web traffic from management interfaces.",
    specs: [
      { label: "Port 80 (HTTP)", val: "0.0.0.0/0 (Public Web Traffic)" },
      { label: "Port 443 (HTTPS)", val: "0.0.0.0/0 (SSL/TLS Ingress)" },
      { label: "Port 22 (SSH)", val: "Approved Bastion / IP Only" },
      { label: "Egress Policy", val: "0.0.0.0/0 All Outbound" },
    ],
    codeTitle: "Terraform Security Group Configuration (security.tf)",
    code: `resource "aws_security_group" "web_sg" {
  name        = "allow-web-ssh"
  description = "Allow inbound HTTP and restricted SSH"
  vpc_id      = aws_vpc.main_vpc.id

  ingress {
    description = "HTTP Inbound"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH Access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["106.51.72.0/24"] # Restricted Bastion CIDR
  }
}`,
  },
  {
    id: "ec2",
    name: "Amazon EC2 Web & App Host",
    shortName: "EC2 Instance",
    category: "Compute",
    icon: <FaServer size={18} className="text-amber-500" />,
    color: "amber",
    status: "Running · t3.micro",
    details: "Amazon Linux 2023 compute instance hosting containerized microservices and Apache HTTPD web server.",
    specs: [
      { label: "AMI", val: "Amazon Linux 2023 (x86_64)" },
      { label: "Instance Type", val: "t3.micro (2 vCPU, 1 GiB RAM)" },
      { label: "Key Pair", val: "soumya-ec2-key.pem (RSA 4096)" },
      { label: "Web Daemon", val: "systemd: httpd.service active" },
    ],
    codeTitle: "Terraform EC2 Compute Resource (main.tf)",
    code: `resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0" # AL2023
  instance_type = "t3.micro"
  key_name      = "soumya-ec2-key"

  vpc_security_group_ids = [aws_security_group.web_sg.id]
  subnet_id              = aws_subnet.public_subnet.id

  user_data = <<-EOF
              #!/bin/bash
              dnf update -y
              dnf install -y httpd docker
              systemctl start httpd
              systemctl enable httpd
              systemctl start docker
              EOF

  tags = {
    Name = "Production-Web-Node"
  }
}`,
  },
  {
    id: "ebs",
    name: "AWS EBS Block Storage",
    shortName: "EBS Volume",
    category: "Persistent Storage",
    icon: <FaDatabase size={18} className="text-yellow-400" />,
    color: "yellow",
    status: "Attached · ext4 /mnt/data",
    details: "High-performance Elastic Block Store gp3 volume attached, formatted with ext4, and mounted persistently.",
    specs: [
      { label: "Volume Type", val: "gp3 General Purpose SSD" },
      { label: "Size & IOPS", val: "20 GiB (3000 IOPS, 125 MB/s)" },
      { label: "Filesystem", val: "ext4 (mkfs.ext4 /dev/xvdf)" },
      { label: "Mount Target", val: "/mnt/data (/etc/fstab managed)" },
    ],
    codeTitle: "Linux Storage Mounting & Terraform EBS Attachment",
    code: `# Terraform Attachment
resource "aws_ebs_volume" "data_vol" {
  availability_zone = "ap-south-1a"
  size              = 20
  type              = "gp3"
}

resource "aws_volume_attachment" "ebs_att" {
  device_name = "/dev/sdh"
  volume_id   = aws_ebs_volume.data_vol.id
  instance_id = aws_instance.web_server.id
}

# Linux Terminal Execution:
sudo mkfs -t ext4 /dev/xvdf
sudo mkdir -p /mnt/data
sudo mount /dev/xvdf /mnt/data
echo '/dev/xvdf  /mnt/data  ext4  defaults,nofail  0  2' | sudo tee -a /etc/fstab`,
  },
  {
    id: "s3",
    name: "Amazon S3 Artifact Storage",
    shortName: "S3 Bucket",
    category: "Object Storage",
    icon: <FaAws size={18} className="text-amber-500" />,
    color: "amber",
    status: "Encrypted · Private ACL",
    details: "Secure AWS S3 bucket for build artifacts, forensic snapshots, and static assets with server-side encryption.",
    specs: [
      { label: "Bucket Name", val: "soumya-app-artifacts-2026" },
      { label: "Encryption", val: "AES-256 (Server-Side SSE-S3)" },
      { label: "Public Access", val: "Block All Public Access: TRUE" },
      { label: "Versioning", val: "Enabled for audit history" },
    ],
    codeTitle: "Terraform S3 Storage & Encryption Policy (s3.tf)",
    code: `resource "aws_s3_bucket" "artifacts" {
  bucket = "soumya-app-artifacts-2026"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "encrypt" {
  bucket = aws_s3_bucket.artifacts.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "block_public" {
  bucket = aws_s3_bucket.artifacts.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}`,
  },
  {
    id: "docker_ecr",
    name: "Docker & AWS ECR CI/CD",
    shortName: "Docker + ECR",
    category: "Containers & CI/CD",
    icon: <FaDocker size={18} className="text-sky-400" />,
    color: "sky",
    status: "Automated · GitHub Actions",
    details: "Automated container pipeline pushing immutable tagged container images to AWS ECR with deployment onto EC2.",
    specs: [
      { label: "Registry", val: "AWS Elastic Container Registry" },
      { label: "Workflow Trigger", val: "GitHub Actions on git push" },
      { label: "Base Image", val: "node:20-alpine (multi-stage)" },
      { label: "Final Image Size", val: "54.2 MB (minimal attack surface)" },
    ],
    codeTitle: "GitHub Actions Automated Pipeline (.github/workflows/deploy.yml)",
    code: `name: Build & Push to AWS ECR
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
      - name: Build, Tag & Push
        run: |
          docker build -t $ECR_REGISTRY/app:\${{ github.sha }} .
          docker push $ECR_REGISTRY/app:\${{ github.sha }}`,
  },
  {
    id: "infraforensics",
    name: "INFRAFORENSICS Telemetry Engine",
    shortName: "Forensics Engine",
    category: "Systems & Security",
    icon: <SiPython size={18} className="text-yellow-400" />,
    color: "purple",
    status: "SHA-256 DNA · SQLite",
    details: "Continuous system telemetry snapshotting engine capturing CPU, RAM, disk, processes, and classifying configuration drift.",
    specs: [
      { label: "Telemetry Collector", val: "psutil (Linux kernel hooks)" },
      { label: "Persistence", val: "Embedded SQLite3 time-series" },
      { label: "Integrity", val: "Deterministic SHA-256 DNA Fingerprint" },
      { label: "Classification", val: "Severity Ranked (NORMAL / CRITICAL)" },
    ],
    codeTitle: "Telemetry Snapshotting & Forensic DNA Fingerprint (Python)",
    code: `import psutil, hashlib, json, time, sqlite3

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
];

export const InteractiveArchitecture = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedNodeId, setSelectedNodeId] = useState(ARCH_NODES[0].id);
  const [copied, setCopied] = useState(false);

  const selectedNode =
    ARCH_NODES.find((n) => n.id === selectedNodeId) || ARCH_NODES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedNode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="cloud-architecture"
      className={`py-24 border-t transition-colors duration-300 relative ${
        isDarkMode
          ? "bg-[#070A11] border-slate-800/80 text-slate-100"
          : "bg-[#F8FAFC] border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Cloud Systems Architecture · Interactive Blueprint
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            AWS Infrastructure Topology & IaC Map
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Click on any architectural node below to inspect live specifications, security parameters, and real Terraform Infrastructure as Code (IaC) declarations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Architecture Topology Map */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-2">
              Select an Infrastructure Component:
            </p>

            <div className="grid grid-cols-1 gap-2.5">
              {ARCH_NODES.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? isDarkMode
                          ? "bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/40"
                          : "bg-white border-sky-500 shadow-md ring-1 ring-sky-500/40"
                        : isDarkMode
                        ? "bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700 text-slate-300"
                        : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl border ${
                          isSelected
                            ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                            : isDarkMode
                            ? "bg-slate-800/60 border-slate-700/60 text-slate-400"
                            : "bg-slate-100 border-slate-200 text-slate-600"
                        }`}
                      >
                        {node.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {node.shortName}
                          </p>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                            {node.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono truncate max-w-[200px] sm:max-w-xs">
                          {node.status}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-bold transition-transform ${
                        isSelected ? "text-sky-500 translate-x-1" : "text-slate-400"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Inspector & Live Code Viewer */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl border shadow-2xl overflow-hidden transition-all ${
                isDarkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white border-slate-200 shadow-xl"
              }`}
            >
              {/* Inspector Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                      {selectedNode.icon}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-semibold text-sky-500 uppercase tracking-wider block">
                        {selectedNode.category} Inspector
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {selectedNode.name}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-semibold">
                    {selectedNode.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {selectedNode.details}
                </p>
              </div>

              {/* Spec Highlights Grid */}
              <div className="p-6 grid grid-cols-2 gap-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-950/40 text-xs">
                {selectedNode.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40">
                    <span className="text-slate-400 block font-medium uppercase text-[10px]">
                      {spec.label}
                    </span>
                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200 text-xs break-all">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Live Code Declarations */}
              <div className="p-6 bg-[#05080E] text-slate-200">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2">
                    <FaTerminal size={12} className="text-sky-400" />
                    <span className="text-slate-300 font-medium">{selectedNode.codeTitle}</span>
                  </span>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors text-xs"
                    title="Copy code declaration"
                  >
                    {copied ? <FaCheck className="text-emerald-400" size={11} /> : <FaCopy size={11} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <pre className="text-xs font-mono overflow-x-auto text-sky-300 leading-relaxed max-h-[300px]">
                  {selectedNode.code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveArchitecture;
