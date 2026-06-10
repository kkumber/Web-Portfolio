import { useState, useEffect, useRef } from "react";
import ProjectContainer from "../Components/ProjectContainer";
import ProjectModal from "../Components/ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Entrance animation for project cards
const AnimatedProject = ({ data, index, onClick, delayOffset = 100, delayFactor = 100 }) => {
  const ref = useRef(null);
  const delay = delayOffset + index * delayFactor;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { el.style.opacity = "1"; return; }
    
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    
    const timer = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 60 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={ref} className="h-full">
      <ProjectContainer data={data} onClick={onClick} />
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animate = (ref, delay) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 60 + delay);
    };
    animate(headerRef, 0);
    animate(ctaRef, 200);
  }, []);

  /* ── Close modal on Escape ──────────────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const projects = [
    {
      image: "/images/projects/docusphere.webp",
      title: "DocuSphere — Document Tracking System",
      description:
        "Built for DepEd Makati to replace paper-heavy document routing across Records, SDS, Chiefs, and Staff departments. The core challenge was enforcing approval integrity across non-linear paths. I designed a state-driven workflow engine in Laravel that validates every transition, maintains a full audit trail, and restricts approvals to authorized roles — replacing days-long paper chains with a traceable digital process.",
      features: [
        "Designed a state-machine workflow engine that enforces valid document transitions across 5+ departments.",
        "Integrated TCPDF and FPDI for server-side PDF generation, modification, and digital signature overlay.",
        "Integrated granular role-based access control with Spatie Permissions to govern every workflow action.",
        "Built a full audit trail and real-time notification system for end-to-end document traceability.",
      ],
      demoAccounts: [
        "Admin: docusphere@admin.com",
        "Records: docusphere@records.com",
        "SDS: docusphere@sds.com",
        "Chief: docusphere@chief.com",
        "Staff: docusphere@staff.com",
      ],
      demoPassword: "password",
      tech: ["React", "TypeScript", "TanStack (Router, Query, Table)", "Laravel", "PostgreSQL", "TCPDF", "FPDI", "Spatie RBAC", "Docker"],
      github: "https://github.com/kkumber/docusphere-fe",
      demo: "https://docusphere-fe.vercel.app/",
      note: "Infrastructure Note: Backend services are hosted on Render's free tier and may require a short cold-start period.",
      scale: "big",
    },
    {
      image: "/images/projects/aralith.webp",
      title: "Aralith — AI Learning Platform",
      description:
        "Aralith simplifies studying by converting uploaded files into structured learning modules. I built a pipeline that uses a FastAPI microservice for text extraction to avoid blocking main web processes. The system cleans the extracted text and sends it to the Groq API for summarization. I used Inertia.js to connect the Laravel backend with the React frontend for a smoother user experience without the complexity of a separate API layer.",
      features: [
        "Built an automated pipeline for text extraction, cleaning, and AI summarization.",
        "Created a standalone FastAPI service to handle file processing without slowing down the main app.",
        "Integrated the Groq API to generate concise study notes from raw document text.",
        "Implemented Inertia.js to manage state and routing between Laravel and React seamlessly.",
      ],
      tech: ["Laravel", "Inertia.js", "React", "FastAPI", "Groq API", "Tesseract OCR", "PostgreSQL"],
      github: "https://github.com/kkumber/aralith.git",
      demo: "https://aralith-prod.onrender.com",
      note: "Infrastructure Note: Backend services are hosted on Render's free tier and may require a short cold-start period. Groq API is on a free trial plan, so response times may vary based on usage limits.",
      scale: "big",
    },
    {
      image: "/images/projects/relight.webp",
      title: "Relight — Digital Library Manager",
      description:
        "A web application for organizing and viewing digital light novels. I developed the backend using Django REST Framework with JWT for secure user sessions. To improve the reading experience, I integrated PDF.js so users can view documents directly in the browser. I also used Cloudinary to manage and deliver uploaded assets efficiently across the platform.",
      features: [
        "Developed a secure REST API with Django and JWT authentication for user resources.",
        "Integrated PDF.js to provide a native document viewing experience in the browser.",
        "Implemented a search and indexing system to help users find resources quickly.",
        "Utilized Cloudinary for reliable storage and optimized delivery of digital assets.",
      ],
      tech: ["React", "TypeScript", "Django", "Django REST Framework", "JWT", "PDF.js", "Cloudinary", "PostgreSQL"],
      github: "https://github.com/kkumber/RELIGHT.git",
      demo: "https://relight-plum.vercel.app",
      scale: "big",
    },
    {
      image: "/images/projects/diyeats.webp",
      title: "DIYeats — Recipe Discovery App",
      description:
        "A recipe search platform that integrates the Spoonacular API for large-scale nutritional data retrieval. I built a custom Django backend to handle user authentication and persistent state for bookmarked and favorited recipes. The core challenge was synchronizing external API data with local user preferences; I solved this by designing a relational schema in PostgreSQL that maps Spoonacular IDs to user accounts, ensuring efficient retrieval of saved items without redundant data storage.",
      features: [
        "Integrated the Spoonacular REST API for real-time recipe search and nutritional breakdown.",
        "Built a Django-based authentication system to manage user-specific data and sessions.",
        "Developed a custom API layer to handle persistent storage for bookmarks and favorited recipes.",
        "Optimized frontend performance in React by managing external API state and local user preferences efficiently.",
      ],
      tech: ["React", "TypeScript", "Django", "Django REST Framework", "PostgreSQL", "Spoonacular API"],
      github: "https://github.com/kkumber/diyeats",
      demo: "https://recipe-finder-app-roan.vercel.app",
      note: "Backend functionality is temporarily unavailable while new features and improvements are being implemented",
      scale: "big",
    },
    {
      image: "/images/projects/verifai.webp",
      title: "VerifAI — AI Browser Extension",
      description:
        "A Chrome extension that performs AI text analysis locally to ensure user privacy. I used the Window AI API to run Google's Gemma model directly in the browser, which removes the need for a backend and keeps all data on the user's machine. The project was recognized at Sparkfest 2025 for its approach to on-device AI integration.",
      features: [
        "Implemented local AI analysis using the Window AI API and Google's Gemma model.",
        "Built using Chrome Manifest V3 and service workers for non-blocking execution.",
        "Preserved user privacy by keeping all text processing entirely on-device.",
        "Developed a content script to provide real-time feedback on active web pages.",
      ],
      tech: ["JavaScript", "Chrome Extension API", "Manifest V3", "Gemma AI", "Window AI API", "CSS"],
      github: "https://github.com/kkumber/VerifAI.git",
      scale: "small",
    },
    {
      image: "/images/projects/aidbot.webp",
      title: "AidBot — Reactive NLP Interface",
      description:
        "A real-time messaging tool for handling user queries with NLP assistance. I used SvelteKit for the frontend to manage reactive state and Firebase for sub-second data synchronization. The application was designed to handle concurrent message streams while keeping the interface responsive. It won 3rd place at Sparkfest 2025.",
      features: [
        "Used Svelte's reactive stores for smooth and efficient UI state management.",
        "Integrated Firebase Realtime Database for instant message syncing across clients.",
        "Built a categorization layer to route and handle incoming user queries effectively.",
        "Designed a responsive, mobile-first interface using SASS for better accessibility.",
      ],
      tech: ["SvelteKit", "TypeScript", "Firebase", "SASS"],
      github: "https://github.com/jjjayed/AidBot-sveltekit.git",
      scale: "small",
    },
    {
      image: "/images/projects/text-extraction.webp",
      title: "Text Extraction API — Processing Service",
      description:
        "A standalone document-processing microservice that extracts text from PDFs, Word documents, presentations, and images through a single FastAPI endpoint. Multiple extraction strategies — PyMuPDF for PDFs, python-docx for Word, Tesseract OCR for image-based content — are unified behind one interface. Containerized with Docker for portability and deployed as a sidecar in projects like Aralith.",
      features: [
        "Unified PyMuPDF, python-docx, python-pptx, and Tesseract OCR into a single extraction interface.",
        "Exposed a lightweight FastAPI endpoint with automatic Swagger/OpenAPI documentation.",
        "Added OCR support for scanned files and image-based documents via Tesseract.",
        "Containerized with Docker to ensure consistent, dependency-isolated deployment across environments.",
      ],
      tech: ["Python", "FastAPI", "PyMuPDF", "python-docx", "Tesseract OCR", "Docker"],
      github: "https://github.com/kkumber/text-extraction-api",
      scale: "small",
    },
  ];

  const bigProjects = projects.filter((p) => p.scale === "big");
  const smallProjects = projects.filter((p) => p.scale === "small");

  return (
    <div className="min-h-screen text-slate-600 font-sans selection:bg-indigo-100 selection:text-indigo-900 antialiased overflow-x-hidden pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 relative z-10 space-y-24 md:space-y-32">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div ref={headerRef} className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold tracking-[0.3em] text-indigo-600 uppercase">
            My Works
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-none">
            Systems
            <span className="text-slate-400 italic"> Built.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic mx-auto lg:mx-0">
            A curated set of production systems — spanning workflow engines, AI pipelines, and distributed microservices.
          </p>
        </div>

        {/* ── Enterprise Projects ─────────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
              Enterprise &amp; Large Scale
            </h2>
            <div className="h-[1px] flex-grow bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative z-20">
            {bigProjects.map((data, index) => (
              <AnimatedProject 
                key={index} 
                data={data} 
                index={index} 
                delayOffset={100}
                delayFactor={120}
                onClick={() => setSelectedProject(data)} 
              />
            ))}
          </div>
        </div>

        {/* ── Microservices ───────────────────────────────────────────────── */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
              Microservices &amp; Utilities
            </h2>
            <div className="h-[1px] flex-grow bg-slate-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-20">
            {smallProjects.map((data, index) => (
              <AnimatedProject 
                key={index} 
                data={data} 
                index={index} 
                delayOffset={100}
                delayFactor={100}
                onClick={() => setSelectedProject(data)} 
              />
            ))}
          </div>
        </div>

        {/* ── Modal ───────────────────────────────────────────────────────── */}
        {selectedProject && (
          <ProjectModal
            data={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* ── CTA Footer ──────────────────────────────────────────────────── */}
        <div
          ref={ctaRef}
          className="text-center py-16 md:py-32 border-t border-slate-100 space-y-8 md:space-y-12 relative overflow-hidden rounded-[3rem] bg-slate-50"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-indigo-500/[0.03] blur-[120px] rounded-full" />
          <div className="relative z-10 space-y-6 md:space-y-8 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight italic">
              Deep Dive into Architecture
            </h2>
            <a
              href="https://github.com/kkumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-5 bg-indigo-600 text-white text-lg md:text-xl font-black rounded-full hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-xl group"
            >
              Inspect Repositories{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
