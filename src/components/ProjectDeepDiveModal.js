import React from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaTerminal } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const ProjectDeepDiveModal = ({ project, onClose }) => {
  const { isDarkMode } = useDarkMode();

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl p-6 sm:p-8 transition-all max-h-[90vh] overflow-y-auto ${
          isDarkMode
            ? "bg-[#0B0F17] border-slate-800 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-500 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Architecture Deep Dive</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className={`p-2 rounded-lg border transition-colors ${
              isDarkMode
                ? "border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white"
                : "border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Tech Stack List */}
        <div className="py-4 border-b border-slate-200 dark:border-slate-800">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {(project.tech || project.techDisplay || project.techTags || []).map((item, idx) => (
              <span
                key={idx}
                className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                  isDarkMode
                    ? "bg-slate-900 border-slate-800 text-sky-400"
                    : "bg-slate-100 border-slate-200 text-sky-700"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Highlights & Problem Solved */}
        <div className="py-5 space-y-4 border-b border-slate-200 dark:border-slate-800 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              System Architecture & Core Mechanics
            </h4>
            <ul className="space-y-2.5">
              {project.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                  <FaCheckCircle className="text-sky-500 mt-0.5 shrink-0" size={14} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {(project.codeSnippet || project.snippet) && (
            <div className="mt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                <FaTerminal size={12} className="text-sky-400" />
                <span>{project.codeSnippetTitle || project.snippetTitle || "Implementation Flow"}</span>
              </div>
              <pre
                className={`p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border ${
                  isDarkMode
                    ? "bg-slate-950/80 border-slate-800/80 text-sky-300"
                    : "bg-slate-900 border-slate-700 text-sky-200"
                }`}
              >
                {project.codeSnippet || project.snippet}
              </pre>
            </div>
          )}
        </div>

        {/* Actions Footer */}
        <div className="pt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-white transition-colors"
              >
                <FaGithub size={14} />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                  isDarkMode
                    ? "border-slate-800 hover:bg-slate-800 text-slate-200"
                    : "border-slate-200 hover:bg-slate-100 text-slate-800"
                }`}
              >
                <FaExternalLinkAlt size={12} />
                <span>Live Environment Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className={`px-4 py-2 text-xs font-medium rounded-lg border transition-colors ${
              isDarkMode
                ? "border-slate-800 text-slate-400 hover:text-white"
                : "border-slate-200 text-slate-600 hover:text-slate-900"
            }`}
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeepDiveModal;
