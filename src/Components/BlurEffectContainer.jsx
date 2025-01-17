const BlurEffectContainer = ({title, subTitle, content, customClassName, customTitleClassName}) => {
    return ( 
        <div className={`${customClassName} relative bg-backgroundLinearLightGray shadow-xl backdrop-blur-xl rounded-sm p-4 w-full h-full`}>
            <p className={customTitleClassName}><b>{title}</b></p>
            <p>{subTitle}</p>
            <p className="text-gray-400">{content}</p>
        </div>
     );
}
 
export default BlurEffectContainer;