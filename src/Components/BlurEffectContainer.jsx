const BlurEffectContainer = ({title, content, customClassName, customTitleClassName}) => {
    return ( 
        <div className={`${customClassName} relative bg-backgroundLinearLightGray shadow-xl backdrop-blur-xl rounded-sm p-4 w-full h-full`}>
            <p className={customTitleClassName}><b>{title}</b></p>
            <p>{content}</p>
        </div>
     );
}
 
export default BlurEffectContainer;