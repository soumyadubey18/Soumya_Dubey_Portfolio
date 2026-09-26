import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import ProjectDeepDiveModal from "./ProjectDeepDiveModal";
import CloudDevOpsProjectGrid from "./CloudDevOpsProjectGrid";

const Project = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="project"
      name="project"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#0B0F17] border-slate-800/80 text-slate-100"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">
            Selected Work · Systems & Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Cloud & DevOps Engineering Projects
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Featured infrastructure systems, containerized CI/CD pipelines, declarative Terraform provisioning, and systems forensics with direct technology filters for AWS, Terraform, Docker, and Linux.
          </p>
        </div>

        {/* Responsive Cloud & DevOps Project Grid */}
        <CloudDevOpsProjectGrid
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </div>

      {/* Interactive Architecture Modal */}
      {selectedProject && (
        <ProjectDeepDiveModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Project;
