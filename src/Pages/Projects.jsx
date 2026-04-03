import ProjectContainer from "../Components/ProjectContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projects = [
    {
      image: "/images/projects/aralith.webp",
      title: "Aralith - AI Learning Engine",
      description: "Architected a high-concurrency AI platform orchestrating automated lesson synthesis and intelligent feedback loops. Engineered complex OCR pipelines for multi-format document processing (PDF/DOCX), optimizing data extraction accuracy and system response latency for large-scale educational datasets.",
      tech: [
        "Laravel", "Inertia.js", "React", "TypeScript", "PostgreSQL", "GroqAPI", "FastAPI", "OCR", "PHPWord"
      ],
      note: 'Source code and detailed architectural review available upon professional request.',
    },
    {
      image: "/images/projects/relight.webp",
      title: "Relight - Content Library System",
      description: "Designed a secure, distributed content management ecosystem featuring automated metadata extraction and granular state management. Implemented robust JWT-based authentication and a performant cloud distribution layer to handle high-volume asset delivery with sub-100ms UI responsiveness.",
      tech: [
        "React", "TypeScript", "TailwindCSS", "Django", "PostgreSQL", "DRF", "JWT", "PDF.js", "Cloudinary"
      ],
      github: "https://github.com/kkumber/RELIGHT.git",
      demo: "https://relight-plum.vercel.app",
    },
    {
      image: "/images/projects/diyeats.webp",
      title: "DIYeats - Data Retrieval Platform",
      description: "Developed a specialized data processing engine optimized for complex nutritional queries and real-time retrieval. Focused on clean state orchestration and efficient database indexing to maintain seamless interaction across a distributed full-stack architecture.",
      tech: [
        "React", "TypeScript", "TailwindCSS", "Django", "PostgreSQL", "Django Rest Framework"
      ],
      github: "https://github.com/kkumber/diyeats",
      demo: "https://recipe-finder-app-roan.vercel.app",
    },
    {
      image: "/images/projects/verifai.webp",
      title: "VerifAI - AI Truth Verification",
      description: "Pioneered a real-time misinformation detection utility using lightweight, browser-native AI models. Engineered a low-overhead ManifestV3 architecture to perform on-the-fly content analysis, securing technical recognition at Sparkfest 2025 for its innovative approach to automated fact-checking.",
      tech: [
        "HTML", "CSS", "JavaScript", "ManifestV3", "Gemma AI"
      ],
      github: "https://github.com/kkumber/VerifAI.git",
    },
    {
      image: "/images/projects/aidbot.webp",
      title: "AidBot - Intelligent Query Resolution",
      description: "Built a context-aware NLP system designed for high-precision query resolution. Orchestrated a scalable backend architecture to handle complex language understanding tasks, earning 3rd Place for robust execution and efficient natural language processing capabilities.",
      tech: ["Svelte", "TypeScript", "SASS", "Firebase"],
      github: "https://github.com/jjjayed/AidBot-sveltekit.git",
    },
  ];

  return (
    <div className="min-h-screen text-zinc-400 font-sans selection:bg-white/10 selection:text-white antialiased overflow-x-hidden pb-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 relative z-10 space-y-16 md:space-y-32">
        
        {/* Header: High-Impact Gallery Title */}
        <div className="space-y-6 md:space-y-8 animate-fadeUp text-center lg:text-left">
           <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black border border-white/5 text-[10px] font-bold tracking-[0.3em] text-white uppercase">
               Technical Portfolio
           </div>
           <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
             Selected <br className="hidden sm:block" />
             <span className="text-zinc-500 italic">Innovations.</span>
           </h1>
           <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium italic mx-auto lg:mx-0">
             A gallery of high-impact architectures, AI-driven automation, and technical ecosystems built for scalability and performance.
           </p>
        </div>

        {/* Immersive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 animate-fadeUp">
          {projects.map((data, index) => (
            <div key={index} className={`opacity-0 animate-fadeUp h-full`} style={{ animationDelay: `${index * 150}ms` }}>
               <ProjectContainer data={data} />
            </div>
          ))}
        </div>

        {/* Footer Gallery CTA */}
        <div className="text-center py-16 md:py-32 border-t border-white/5 space-y-8 md:space-y-12 relative overflow-hidden rounded-[3rem]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-white/[0.03] blur-[120px] rounded-full"></div>
           <div className="relative z-10 space-y-6 md:space-y-8 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight italic">Ready for a deeper technical dive?</h2>
              <a 
                href="https://github.com/kkumber" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-5 bg-white text-black text-lg md:text-xl font-black rounded-full hover:bg-zinc-200 transition-all transform hover:scale-110 shadow-xl group"
              >
                Explore Repositories <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
