
const TechnologyContainer = () => {
    const images = [
        {src: '/images/html-5-svgrepo-com.svg', alt: 'HTML'},
        {src: '/images/css-3-svgrepo-com.svg', alt: 'CSS'},
        {src: '/images/js-official-svgrepo-com.svg', alt: 'Javascript'},
        {src: '/images/react-svgrepo-com.svg', alt: 'React'},
        {src: '/images/Python.svg', alt: 'Python'},
        {src: '/images/django-icon-svgrepo-com.svg', alt: 'Django'},
        {src: '/images/Django REST.svg', alt: 'Django Rest Framework'},
        {src: '/images/Tailwind CSS.svg', alt: 'TailwindCSS'},
        {src: '/images/Bootstrap.svg', alt: 'Bootstrap'},
        {src: '/images/MySQL.svg', alt: 'MySQL'},
        {src: '/images/PostgresSQL.svg', alt: 'PostgresSQL'},
        {src: '/images/Git.svg', alt: 'Git'},
    ];


    return ( 
        <div className="bg-gradient-to-bl from-ContainerLinearDark from-30% via-backgroundLinearLightGray shadow-md
        backdrop-blur-2xl border-borderColor p-4 text-white rounded-sm w-full h-full">
            <b><span className="text-xl">Skills & Tools: </span></b>
            <div className="flex flex-wrap gap-4 mt-4">
                {images.map((image, index) => 
                    <img key={index} src={image.src} alt={image.alt} className="w-11 object-contain"/>
                )}
            </div>

        </div>
     );
}
 
export default TechnologyContainer;