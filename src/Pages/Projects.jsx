import ProjectContainer from "../Components/ProjectContainer";


const Projects = () => {
    const projects = [
        {image: '/images/projects/diyeats.png', title: 'DIYeats', description: 'A modern, interactive recipe finder app that empowers users to discover, explore, and save recipes within their accounts effortlessly. Diyeats integrates advanced search functionality, curated content, and nutritional insights to enhance the cooking experience.', tech: ['React', 'Typescript', 'TailwindCSS', 'Django', 'PostgreSQL', 'Django Rest Framework'], github: 'https://github.com/kkumber/diyeats', demo: 'https://recipe-finder-app-roan.vercel.app'},
        {image: '/images/projects/aidbot.png', title: 'AidBot', description: 'AidBot is an innovative chatbot developed to deliver accurate, efficient, and user-friendly solutions to a wide array of user queries. Designed with cutting-edge AI capabilities, it ensures clarity, context-awareness, and personalized interactions to create a seamless user experience. This award-winning project secured 3rd place at a prestigious hackathon, highlighting its innovative design, robust functionality, and practical utility.', tech: ['Svelte', 'Typescript', 'SASS', 'Firebase'], github: 'https://github.com/jjjayed/AidBot-sveltekit.git', demo: ''},
        {image: '/images/projects/relight.png', title: 'Relight', description: 'Relight is a light novel companion—browse and search thrilling stories, build a personal library with ratings and threaded comments, and effortlessly upload light novel PDFs for automatic metadata extraction. Dive into every chapter with PDF.js–powered reading and per-user, per-page bookmarks to pick up exactly where you left off. Backed by secure login, registration, and email-based password resets, Relight delivers seamless design and rock-solid security—setting the standard for my future projects', tech: ['React', 'Typescript', 'TailwindCSS', 'Django', 'PostgreSQL', 'Django Rest Framework', 'JWT', 'PDFjs', 'Cloudinary'], github: 'https://github.com/kkumber/RELIGHT.git', demo: 'https://relight-plum.vercel.app'},
        // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
        // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
    ]

    return ( 
    <div className="grid my-20 md:grid-cols-2 gap-8">
        {projects.map((data, index) => 
            <ProjectContainer data={data} key={index} />
        )}
    </div>
     );
}
 
export default Projects;