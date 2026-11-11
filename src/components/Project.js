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
      className={`relative isolate py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#0B0F17] via-[#0D1420] to-[#0B0F17] border-slate-800/80 text-slate-100"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-50 border-slate-200 text-slate-900"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 overflow-hidden"
      >
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute left-1/3 -top-32 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-2">
            <span aria-hidden="true" className="inline-flex gap-1">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              <span className="h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Selected work · systems & architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Cloud & DevOps Engineering Projects
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Preview real application screens where available and project source or documentation for infrastructure and CLI work, then review the repositories for implementation details. Filter projects by technology.
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
