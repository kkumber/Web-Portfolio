import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectContainer = ({ data, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative glass-card rounded-3xl overflow-hidden glass-card-hover flex flex-col h-full border-slate-200/60 hover:border-indigo-300 cursor-pointer transition-all duration-500 hover:scale-[1.02] bg-white shadow-sm hover:shadow-xl"
    >
      
      {/* Immersive Image Display */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="p-8 md:p-10 flex flex-col flex-grow space-y-8 bg-white">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
            {data.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 font-medium italic">
            {data.description}
          </p>
        </div>

        {/* Technical Specification Chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {data.tech.slice(0, 5).map((t, i) => (
            <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 rounded-lg uppercase tracking-wider group-hover:border-indigo-100 group-hover:bg-indigo-50/50 transition-all">
              {t}
            </span>
          ))}
          {data.tech.length > 5 && (
            <span className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              + {data.tech.length - 5}
            </span>
          )}
        </div>

        {/* Action Bar */}
        <div className="flex items-center gap-6 pt-6 mt-auto border-t border-slate-50">
          {data.github && (
            <a 
              href={data.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" /> SOURCE
            </a>
          )}
          {data.demo && (
            <a 
              href={data.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" /> DEPLOYMENT
            </a>
          )}
        </div>
      </div>

      {/* Subtle Bottom Glow on Hover */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default ProjectContainer;
