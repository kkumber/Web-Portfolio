import ProjectContainer from "../Components/ProjectContainer";

const Projects = () => {
  const projects = [
    {
      image: "/images/projects/diyeats.png",
      title: "DIYeats",
      description:
        "A modern, interactive recipe finder app that empowers users to discover, explore, and save recipes effortlessly. Diyeats integrates advanced search functionality, curated content, and nutritional insights to enhance the cooking experience.",
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
      image: "/images/projects/aidbot.png",
      title: "AidBot",
      description:
        "AidBot is an innovative chatbot developed to deliver accurate, efficient, and user-friendly solutions to a wide array of user queries. Designed with cutting-edge AI capabilities, it ensures clarity, context-awareness, and personalized interactions to create a seamless user experience. This award-winning project secured 3rd place at a prestigious hackathon, highlighting its innovative design, robust functionality, and practical utility.",
      tech: ["Svelte", "Typescript", "SASS", "Firebase"],
      github: "https://github.com/jjjayed/AidBot-sveltekit.git",
      demo: "",
    },
    // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
    // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
    // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
  ];

  return (
    <div className="grid my-20 md:grid-cols-2 gap-8">
      {projects.map((data, index) => (
        <ProjectContainer data={data} key={index} />
      ))}
    </div>
  );
};

export default Projects;
