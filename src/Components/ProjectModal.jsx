import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ data, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!data) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 lg:p-12 animate-fadeIn">
      {/* Backdrop with high blur and dark overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Container - Premium Glassmorphism */}
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-fadeUp">
        
        {/* Top Fixed Control Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-end items-center pointer-events-none">
           <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 pointer-events-auto group backdrop-blur-md"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl group-hover:rotate-90 transition-transform" />
            </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto custom-scrollbar">
          
          {/* Immersive Hero Section */}
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9]">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover"
            />
            {/* Multi-layered Gradients for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
          </div>

          {/* Main Information Layer */}
          <div className="p-8 md:p-12 lg:p-16 space-y-12 md:space-y-16 relative -mt-24 md:-mt-32">
            
            {/* Header / Title Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                 <div className="w-8 h-[1px] bg-brand-orange"></div>
                 <span className="text-[10px] font-bold tracking-[0.4em] text-brand-orange uppercase">Selected Innovation</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
                {data.title.split(' - ')[0]}<br />
                <span className="text-zinc-500 italic">{data.title.split(' - ')[1]}</span>
              </h2>
            </div>

            {/* Vertical Stack Content */}
            <div className="flex flex-col gap-12 md:gap-16">
              
              {/* Technical Narrative Section */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
                   <span className="w-2 h-2 rounded-full bg-brand-orange/40"></span>
                   Technical Narrative
                </h3>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium italic selection:bg-brand-orange/30">
                  {data.description}
                </p>
              </div>

              {/* System Architecture Section */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
                   <span className="w-2 h-2 rounded-full bg-zinc-600/40"></span>
                   System Architecture
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {data.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-zinc-200 rounded-xl uppercase tracking-wider hover:border-brand-orange/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Access Section */}
              <div className="space-y-6">
                 <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] flex items-center gap-4">
                   <span className="w-2 h-2 rounded-full bg-brand-orange/40"></span>
                   Project Access
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.github && (
                    <a 
                      href={data.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-5 rounded-2xl bg-white text-black font-black hover:bg-brand-orange hover:text-white transition-all duration-500 group overflow-hidden"
                    >
                      <span className="flex items-center gap-4 text-sm md:text-base">
                        <FontAwesomeIcon icon={faGithub} className="text-xl" /> Source Repository
                      </span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  )}
                  {data.demo && (
                    <a 
                      href={data.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-white font-black hover:bg-white/[0.1] transition-all duration-500 group"
                    >
                      <span className="flex items-center gap-4 text-sm md:text-base">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xl" /> Live Deployment
                      </span>
                      <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                    </a>
                  )}
                </div>
              </div>

              {/* Internal Note Section (if exists) */}
              {data.note && (
                <div className="group flex gap-6 p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 items-start hover:bg-white/[0.04] transition-all duration-500">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 border border-brand-orange/20">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-brand-orange text-lg md:text-xl" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                     <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Internal Note</p>
                     <p className="text-sm md:text-base text-zinc-400 italic leading-relaxed">
                      {data.note}
                     </p>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer Decorative */}
            <div className="pt-10 pb-10 flex justify-center opacity-20">
               <div className="flex gap-10">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white"></div>
               </div>
            </div>

          </div>
        </div>

        {/* Subtle Decorative Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent"></div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
