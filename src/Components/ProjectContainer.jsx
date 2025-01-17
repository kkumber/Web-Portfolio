import { useEffect } from "react";
import TechnologyWrapper from "./TechnologyWrapper";

const ProjectContainer = ({data}) => {
    useEffect(() => {
        if(data) {
            console.log(data);
        }
    }, [data])

    return ( 
        <div className={`relative bg-backgroundLinearLightGray shadow-xl backdrop-blur-xl rounded-xl w-full h-full text-white`}>
            {/* Image */}
            <div className="">
                <img src={data.image} alt="Project Sample" className="w-full rounded-t-md"/>
            </div>
            {/* Informations */}
            <div className="p-4">
                {/* Description */}
                <div className="mb-4">
                    <b><span className="text-lg">{data.title}</span></b>
                    <p className="text-sm mt-3">{data.description}</p>
                </div>
                {/* Technologies */}
                <div className="mb-4">
                    <b><span>Technologies used:</span></b>
                    <div className="mt-4 flex items-center gap-1">
                        {data.tech.map((tool, index) => <TechnologyWrapper tool={tool} index={index} />)}
                    </div>
                </div>
                {/* Links */}
                <div className="flex items-center gap-x-4 mt-8">
                    <button className="bg-white text-black px-4 py-2 rounded-md"><a href={data.github} target="_blank"><b>Github</b></a></button>
                    <button className="border-white border-2 px-4 py-2 rounded-md"><a href={data.demo}>Live Demo</a></button>
                </div>
            </div>
            
        </div>
     );
}
 
export default ProjectContainer;