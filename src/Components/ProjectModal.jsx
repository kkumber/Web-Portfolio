import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!data) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 animate-fadeIn backdrop-blur-2xl">
      {/* Dark Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Streamlined Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-200 animate-fadeUp max-h-[85vh] z-10">
        
        {/* Simple Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/80 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all shadow-sm backdrop-blur-sm"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          {/* Focused Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {/* Clean Header */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {data.title.split(' - ')[0]}
              </h2>
              {data.title.split(' - ')[1] && (
                <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
                  {data.title.split(' - ')[1]}
                </p>
              )}
            </div>

            {/* Concise Description */}
            <p className="text-slate-600 leading-relaxed">
              {data.description}
            </p>

            {/* Essential Tech Chips */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-500 rounded-lg uppercase tracking-tight">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {data.demo && (
                <a 
                  href={data.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" /> Live Preview
                </a>
              )}
              {data.github && (
                <a 
                  href={data.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-slate-50 border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-lg" /> View Code
                </a>
              )}
            </div>

            {/* Minimal Internal Note */}
            {data.note && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 italic text-xs text-slate-400 leading-relaxed">
                {data.note}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
