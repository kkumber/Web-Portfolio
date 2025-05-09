import { useEffect } from "react";
import TechnologyWrapper from "./TechnologyWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectContainer = ({data}) => {

    return ( 
        <div className={`relative bg-backgroundLinearLightGray shadow-xl backdrop-blur-xl rounded-xl w-full h-full text-white animate-fadeUp transition-all duration-300`}>
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
                    <div className="mt-4 flex items-center gap-1 flex-wrap">
                        {data.tech.map((tool, index) => <TechnologyWrapper tool={tool} index={index} key={index}/>)}
                    </div>
                </div>
                {/* Links */}
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-white">
                        <a href={data.github} target="_blank" className="flex justify-between items-center gap-x-1">
                            <div className="">
                                <FontAwesomeIcon icon={faGithub}/>
                            </div>
                            <div className="">
                                <b>Github</b>
                            </div>
                        </a>
                    </button>
                    {
                        data.demo && 
                        <button className="border-white border-2 px-4 py-2 rounded-md hover:border-transparent">
                        <a href={data.demo} target="_blank" className="flex justify-between items-center gap-x-1">
                            <div className="">
                                <FontAwesomeIcon icon={faGlobe}/>
                            </div>
                            <div className="">
                                <span>Live Demo</span>
                            </div>
                        </a>
                    </button>
                    }

                </div>
            </div>
            
        </div>
     );
}
 
export default ProjectContainer;