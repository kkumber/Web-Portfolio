import ProjectContainer from "../Components/ProjectContainer";

const Projects = () => {
  const projects = [
    {
      image: "/images/projects/aralith.webp",
      title: "Aralith - AI-Powered Learning Platform",
      description: "Aralith is a full-stack educational web app that uses AI to generate quizzes, flashcards, and summaries from uploaded learning materials like PDF, DOCX, images, or text. Users can take quizzes, receive instant AI feedback with explanations, track performance, and export quizzes to Google Forms or DOCX. Aralith automates lesson processing and turns study materials into interactive, personalized learning tools all within minutes.",
      tech: [
        "Laravel",
        "Inertia.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Tailwind CSS",
        "GroqAPI (GROQ)",
        "FastAPI",
        "OCR (PyTesseract)",
        "Google Apps Script",
        "PHPWord",
      ],
      note: 'Aralith is currently private as part of my academic capstone requirement. While the source code and live demo are not publicly available at this time, I’d be happy to walk you through the project in detail or provide a private demo upon request.',
      // github: "https://github.com/kkumber/aralith.git",
      // demo: "https://aralith.vercel.app",
    },
    {
      image: "/images/projects/relight.webp",
      title: "Relight - Light Novel Companion App",
      description:
        "Relight lets you browse, search, and organize light novels with ratings, threaded comments, and personal libraries. Upload PDFs for automatic metadata extraction and read with a PDF.js viewer featuring per-user, per-page bookmarks. With secure auth and email-based password resets, Relight combines seamless UX with solid security—setting the bar for future projects.",
      tech: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Django",
        "PostgreSQL",
        "Django Rest Framework",
        "JWT",
        "PDFjs",
        "Cloudinary",
      ],
      github: "https://github.com/kkumber/RELIGHT.git",
      demo: "https://relight-plum.vercel.app",
    },
    {
      image: "/images/projects/diyeats.webp",
      title: "DIYeats - Recipe finder app",
      description:
        "A modern, interactive recipe finder app that empowers users to discover, explore, and save recipes within their accounts effortlessly. Diyeats integrates advanced search functionality, curated content, and nutritional insights to enhance the cooking experience.",
      tech: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Django",
        "PostgreSQL",
        "Django Rest Framework",
      ],
      github: "https://github.com/kkumber/diyeats",
      demo: "https://recipe-finder-app-roan.vercel.app",
    },
    {
      image: "/images/projects/verifai.webp",
      title: "VerifAI - AI Fact Checking Assistant",
      description: "VerifAI is a browser extension that uses AI to detect and verify potentially false information online. It promotes responsible information sharing by providing credible sources, supporting SDG 11 (Sustainable Cities and Communities) and SDG 16 (Peace, Justice, and Strong Institutions). It is our team's hackaton entry for Sparkfest 2025 hosted by Google Developer Groups PUP.",
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "ManifestV3",
        "Gemma",
      ],
      github: "https://github.com/kkumber/VerifAI.git",
      demo: "",
    },
    {
      image: "/images/projects/aidbot.webp",
      title: "AidBot - AI-Powered Chatbot",
      description:
        "AidBot is an AI chatbot designed to deliver fast, accurate, and personalized answers to user queries. With context-aware responses and a user-friendly interface, it secured 3rd place at a major hackathon for its innovation and practical impact.",
      tech: ["Svelte", "Typescript", "SASS", "Firebase"],
      github: "https://github.com/jjjayed/AidBot-sveltekit.git",
      demo: "",
    },
    // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
    // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 my-20">
      {projects.map((data, index) => (
        <ProjectContainer data={data} key={index} />
      ))}
    </div>

  );
};

export default Projects;
