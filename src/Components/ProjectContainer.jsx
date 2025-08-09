import { useEffect } from "react";
import TechnologyWrapper from "./TechnologyWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectContainer = ({data}) => {

    return ( 
        <div className="flex flex-col h-full bg-backgroundLinearLightGray shadow-xl backdrop-blur-xl rounded-xl w-full text-white animate-fadeUp transition-all duration-300">
            {/* Image */}
            <div className="h-96">
                <img src={data.image} alt="Project Sample" className="w-full rounded-t-md object-cover h-full"/>
            </div>
            {/* Informations */}
            <div className="p-4 flex flex-col h-full">
            {/* Description */}
            <div className="mb-4">
                <b><span className="text-lg">{data.title}</span></b>
                <p className="text-sm mt-3">{data.description}</p>
            </div>

            {/* Technologies */}
            <div className="mb-4">
                <b><span>Technologies used:</span></b>
                <div className="mt-4 flex items-center gap-1 flex-wrap">
                {data.tech.map((tool, index) => <TechnologyWrapper tool={tool} index={index} key={index}/>)}
                </div>
            </div>

            {/* Notes */}
            {data.note && (
                <div className="mb-4">
                <b><span>Note:</span></b>
                <p>{data.note}</p>
                </div>
            )}

            {/* Spacer to push buttons down */}
            <div className="mt-auto"></div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-4 mt-4">
                {data.github && (
                <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-white">
                    <a href={data.github} target="_blank" className="flex items-center gap-x-1">
                    <FontAwesomeIcon icon={faGithub} />
                    <b>Github</b>
                    </a>
                </button>
                )}

                {data.demo && (
                <button className="border-white border-2 px-4 py-2 rounded-md hover:border-transparent">
                    <a href={data.demo} target="_blank" className="flex items-center gap-x-1">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>Live Demo</span>
                    </a>
                </button>
                )}
            </div>
            </div>
            
        </div>
     );
}
 
export default ProjectContainer;