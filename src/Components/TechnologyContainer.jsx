
const TechnologyContainer = ({ isBento }) => {
    const images = [
        {src: '/images/html-5-svgrepo-com.svg', title: 'HTML'},
        {src: '/images/css-3-svgrepo-com.svg', title: 'CSS'},
        {src: '/images/js-official-svgrepo-com.svg', title: 'JS'},
        {src: '/images/react-svgrepo-com.svg', title: 'React'},
        {src: '/images/Python.svg', title: 'Python'},
        {src: '/images/django-icon-svgrepo-com.svg', title: 'Django'},
        {src: '/images/Django REST.svg', title: 'DRF'},
        {src: '/images/Tailwind CSS.svg', title: 'Tailwind'},
        {src: '/images/Bootstrap.svg', title: 'Bootstrap'},
        {src: '/images/MySQL.svg', title: 'MySQL'},
        {src: '/images/PostgresSQL.svg', title: 'Postgres'},
        {src: '/images/Git.svg', title: 'Git'},
        {src: '/images/TypeScript.svg', title: 'TS'},
        {src: '/images/PHP.svg', title: 'PHP'},
        {src: '/images/Laravel.svg', title: 'Laravel'},
    ];


    const content = (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6">
            {images.map((image, index) => 
            <div className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-md" key={index}>
                <img src={image.src} alt={image.title} className="w-8 h-8 md:w-10 md:h-10 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"/>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter text-center">{image.title}</p>
            </div>
            )}
        </div>
    );

    if (isBento) return content;

    return ( 
        <div className="glass-card p-8 rounded-[2.5rem] w-full h-full glass-card-hover bg-white border border-slate-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Tech Stack</h3>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Always Learning</span>
            </div>
            {content}
        </div>
     );
}
 
export default TechnologyContainer;
