import React from "react";
import { FaDownload, FaExternalLinkAlt, FaFileAlt, FaTimes } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const RESUME_URL = `${process.env.PUBLIC_URL}/Soumya_Dubey_Resume.pdf`;

const ResumeModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative flex flex-col w-full max-w-5xl h-[92vh] rounded-2xl border shadow-2xl p-4 sm:p-6 ${
          isDarkMode
            ? "bg-[#0B0F17] border-slate-800 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <FaFileAlt className="text-sky-500 shrink-0" />
            <h2 id="resume-modal-title" className="font-bold truncate">
              Soumya Dubey — Resume
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={RESUME_URL}
              download="Soumya_Dubey_Resume.pdf"
              aria-label="Download resume PDF"
              title="Download resume PDF"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-semibold transition-colors"
            >
              <FaDownload size={11} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open resume in a new tab"
              title="Open in a new tab"
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
            >
              <FaExternalLinkAlt size={12} />
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? "border-slate-800 hover:bg-slate-800 text-slate-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
            >
              <FaTimes size={15} />
            </button>
          </div>
        </div>

        <iframe
          title="Soumya Dubey resume PDF preview"
          src={RESUME_URL}
          className="w-full flex-1 min-h-0 rounded-lg bg-slate-100"
        />
      </div>
    </div>
  );
};

export default ResumeModal;
