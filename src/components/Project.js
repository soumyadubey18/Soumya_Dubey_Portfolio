import React, { useState } from "react";
import ProjectDeepDiveModal from "./ProjectDeepDiveModal";
import CloudDevOpsProjectGrid from "./CloudDevOpsProjectGrid";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="project"
      name="project"
      className="portfolio-section relative isolate"
    >
      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="portfolio-section-kicker flex items-center gap-2">
            <span aria-hidden="true" className="inline-flex gap-1">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              <span className="h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Selected work · systems & architecture
          </p>
          <h2 className="portfolio-section-title">
            Cloud & DevOps Engineering Projects
          </h2>
          <p className="portfolio-section-description">
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
