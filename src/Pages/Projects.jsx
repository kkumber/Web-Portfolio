import { useState } from "react";
import ProjectContainer from "../Components/ProjectContainer";
import ProjectModal from "../Components/ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: "/images/projects/docusphere.webp",
      title: "DocuSphere - Enterprise Document Ecosystem",
      description: "A high-integrity, decoupled digital repository built for the Department of Education (DepEd) Makati. The system features a React SPA frontend with type-safe TanStack routing and asynchronous state management via TanStack Query. The backend is a robust Laravel 12 API utilizing RBAC with Spatie, automated audit logging, and an integrated electronic signature engine powered by TCPDF and FPDI. Engineered for scalability, it handles complex document lifecycles with strict data consistency and real-time monitoring dashboards.",
      tech: ["React", "TypeScript", "TanStack Query", "TanStack Router", "Laravel", "PostgreSQL", "TCPDF", "RBAC", "Cloudinary", "Docker"],
      github: "https://github.com/kkumber/docusphere-fe",
      demo: "https://docusphere-fe.vercel.app/",
      note: "Infrastructure Note: API is containerized and hosted on Render's free tier; initial requests may experience latency during container spin-up.",
    },
    {
      image: "/images/projects/aralith.webp",
      title: "Aralith - AI Learning Orchestrator",
      description: "An advanced educational platform orchestrating automated lesson synthesis through multi-modal AI pipelines. The architecture integrates high-accuracy OCR for document ingestion and large language models (LLMs) via GroqAPI for intelligent content distillation. Built on an Inertia.js and Laravel stack with React, it features a distributed processing layer that optimizes response latency for large-scale educational datasets, transforming unstructured documents into interactive, bite-sized learning modules.",
      tech: [
        "Laravel", "Inertia.js", "React", "TypeScript", "PostgreSQL", "GroqAPI", "FastAPI", "OCR", "PHPWord"
      ],
      github: "https://github.com/kkumber/aralith.git",
      demo: "https://aralith-prod.onrender.com", 
      note: "Infrastructure Note: API is containerized and hosted on Render's free tier; initial requests may experience latency during container spin-up.",
    },
    {
      image: "/images/projects/relight.webp",
      title: "Relight - Distributed Library System",
      description: "A secure, cloud-native content management ecosystem designed for high-volume asset delivery. The system implements a robust JWT-based authentication layer and granular state management to achieve sub-100ms UI responsiveness. It features an automated metadata extraction engine and a performant asset distribution layer integrated with Cloudinary, ensuring seamless synchronization across a distributed full-stack architecture powered by Django and React.",
      tech: [
        "React", "TypeScript", "TailwindCSS", "Django", "PostgreSQL", "DRF", "JWT", "PDF.js", "Cloudinary"
      ],
      github: "https://github.com/kkumber/RELIGHT.git",
      demo: "https://relight-plum.vercel.app",
    },
    {
      image: "/images/projects/diyeats.webp",
      title: "DIYeats - Real-Time Data Engine",
      description: "A specialized data processing platform optimized for complex nutritional queries and low-latency retrieval. The core engine utilizes advanced database indexing and efficient state orchestration to maintain performance across high-concurrency request patterns. Featuring a clean RESTful API design with Django Rest Framework and a responsive React frontend, the system handles multi-format data distillation for rapid informational access.",
      tech: [
        "React", "TypeScript", "TailwindCSS", "Django", "PostgreSQL", "Django Rest Framework"
      ],
      github: "https://github.com/kkumber/diyeats",
      demo: "https://recipe-finder-app-roan.vercel.app",
    },
    {
      image: "/images/projects/verifai.webp",
      title: "VerifAI - Browser-Native AI Utility",
      description: "A privacy-first content verification tool leveraging local LLM execution within a browser-native environment. Engineered with a lightweight ManifestV3 architecture, the system performs real-time content analysis using Google's Gemma AI without server-side compute. This project secured technical recognition at Sparkfest 2025 for its innovative approach to decentralized, zero-latency truth verification and privacy-centric AI integration.",
      tech: [
        "HTML", "CSS", "JavaScript", "ManifestV3", "Gemma AI"
      ],
      github: "https://github.com/kkumber/VerifAI.git",
    },
    {
      image: "/images/projects/aidbot.webp",
      title: "AidBot - Context-Aware NLP Engine",
      description: "A high-precision query resolution system designed for real-time natural language interaction. Built with Svelte and Firebase, the architecture features a reactive data layer for instant message synchronization and a context-aware NLP processing engine. Recognized with a 3rd Place award for its robust execution, the system efficiently handles complex language understanding tasks while maintaining a highly responsive, human-centric interface.",
      tech: ["Svelte", "TypeScript", "SASS", "Firebase"],
      github: "https://github.com/jjjayed/AidBot-sveltekit.git",
    },
  ];

  return (
    <div className="min-h-screen text-slate-600 font-sans selection:bg-indigo-100 selection:text-indigo-900 antialiased overflow-x-hidden pb-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 relative z-10 space-y-16 md:space-y-32">
        
        {/* Header Title */}
        <div className="space-y-6 md:space-y-8 animate-fadeUp text-center lg:text-left">
           <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold tracking-[0.3em] text-indigo-600 uppercase">
              My Works              
           </div>
           <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-none">
             Systems 
             <span className="text-slate-400 italic"> Built.</span>
           </h1>
           <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic mx-auto lg:mx-0">
             A showcase of my projects, focusing on scalable architectures, AI-driven pipelines, and distributed digital ecosystems.
           </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 animate-fadeUp relative z-20">
          {projects.map((data, index) => (
            <div key={index} className={`opacity-0 animate-fadeUp h-full`} style={{ animationDelay: `${index * 150}ms` }}>
               <ProjectContainer data={data} onClick={() => setSelectedProject(data)} />
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            data={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* Footer Gallery CTA */}
        <div className="text-center py-16 md:py-32 border-t border-slate-100 space-y-8 md:space-y-12 relative overflow-hidden rounded-[3rem] bg-slate-50">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-indigo-500/[0.03] blur-[120px] rounded-full"></div>
           <div className="relative z-10 space-y-6 md:space-y-8 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight italic">Deep Dive into Architecture</h2>
              <a 
                href="https://github.com/kkumber" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-5 bg-indigo-600 text-white text-lg md:text-xl font-black rounded-full hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-xl group"
              >
                Inspect Repositories <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
