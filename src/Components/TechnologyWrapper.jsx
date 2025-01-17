const TechnologyWrapper = ({tool, index}) => {
    return ( 
        <span className="px-4 py-1 border-white border-2 rounded-full text-xs" key={index}>
            <span>{tool}</span>
        </span>
     );
}
 
export default TechnologyWrapper;