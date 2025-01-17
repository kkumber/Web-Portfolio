import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactContainer = ({icon, iconSize, text, subText, textDesign, link}) => {
    return (
        <a href={link} target='_blank'>
        <div className="bg-gradient-to-bl from-ContainerLinearDark from-30% via-backgroundLinearLightGray shadow-md
        backdrop-blur-2xl border-borderColor p-4 text-white rounded-lg w-full h-full flex flex-col flex-wrap justify-center items-center text-center">
            <div className="">
                <FontAwesomeIcon icon={icon} className={iconSize}/>
            </div>

            <div className="leading-10">
                <span className={textDesign}>{text} </span>
                <p>{subText}</p>
            </div>
        </div>
        </a> 

     );
}
 
export default ContactContainer;