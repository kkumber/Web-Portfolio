import ProjectContainer from "../Components/ProjectContainer";


const Projects = () => {
    const projects = [
        {image: '/images/projects/diyeats.png', title: 'DIYeats', description: 'A modern, interactive recipe finder app that empowers users to discover, explore, and save recipes effortlessly. Diyeats integrates advanced search functionality, curated content, and nutritional insights to enhance the cooking experience.', tech: ['React', 'Typescript', 'TailwindCSS'], github: 'https://github.com/kkumber/diyeats', demo: 'https://recipe-finder-app-roan.vercel.app'},
        // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
        // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
        // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
        // {image: '', title: '', description: '', tech: [], github: '', demo: 'demo'},
    ]

    return ( 
    <div className="grid mt-20 md:grid-cols-2 gap-8">
        {projects.map((data, index) => 
            <ProjectContainer data={data} key={index}/>
        )}
    </div>
     );
}
 
export default Projects;