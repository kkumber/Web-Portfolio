
const TechnologyContainer = () => {
    // Update from time to time
    const images = [
        {src: '/images/html-5-svgrepo-com.svg', title: 'HTML'},
        {src: '/images/css-3-svgrepo-com.svg', title: 'CSS'},
        {src: '/images/js-official-svgrepo-com.svg', title: 'Javascript'},
        {src: '/images/react-svgrepo-com.svg', title: 'React'},
        {src: '/images/Python.svg', title: 'Python'},
        {src: '/images/django-icon-svgrepo-com.svg', title: 'Django'},
        {src: '/images/Django REST.svg', title: 'Django Rest Framework'},
        {src: '/images/Tailwind CSS.svg', title: 'TailwindCSS'},
        {src: '/images/Bootstrap.svg', title: 'Bootstrap'},
        {src: '/images/MySQL.svg', title: 'MySQL'},
        {src: '/images/PostgresSQL.svg', title: 'PostgreSQL'},
        {src: '/images/Git.svg', title: 'Git'},
        {src: '/images/TypeScript.svg', title: 'TypeScript'},
        {src: '/images/PHP.svg', title: 'PHP'},
        {src: '/images/Laravel.svg', title: 'Laravel'},
    ];


    return ( 
        <div className="bg-gradient-to-bl from-ContainerLinearDark from-30% via-backgroundLinearLightGray shadow-md
        backdrop-blur-2xl border-borderColor p-4 text-white rounded-sm w-full h-full">
            <b><span className="text-xl">Skills & Tools: </span></b>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-4 mt-4">
                {images.map((image, index) => 
                <div className="flex flex-col items-center hover:-translate-y-4 transition-all duration-500 ease-out" key={index}>
                    <img key={index} src={image.src} alt={image.title} className="w-11 object-contain"/>
                    <p className="text-pretty text-clip line-clamp-1 w-full text-center text-sm hover:overflow-visible">{image.title}</p>
                </div>
                )}
            </div>

        </div>
     );
}
 
export default TechnologyContainer;