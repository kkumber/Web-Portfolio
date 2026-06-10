import { useEffect } from "react";
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

  // Title split logic: Handle both ' - ' (short dash) and ' — ' (em dash)
  const titleParts = data.title.includes(" — ") 
    ? data.title.split(" — ") 
    : data.title.split(" - ");
  
  const mainTitle = titleParts[0];
  const subTitle = titleParts[1];

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
                {mainTitle}
              </h2>
              {subTitle && (
                <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
                  {subTitle}
                </p>
              )}
            </div>

            {/* Concise Description */}
            <p className="text-slate-600 leading-relaxed">
              {data.description}
            </p>

            {/* Professional Features List */}
            {data.features && (
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Technical Features</h3>
                <ul className="space-y-3">
                  {data.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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

            {/* Demo Accounts */}
            {data.demoAccounts && (
              <div className="space-y-4 p-5 bg-indigo-50/50 border border-indigo-100/50 rounded-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Demo Access</h3>
                  {data.demoPassword && (
                    <span className="text-[10px] font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-md">
                      PW: {data.demoPassword}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {data.demoAccounts.map((account, i) => (
                    <div key={i} className="text-[11px] font-medium text-slate-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                      {account}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
