const BlurEffectContainer = ({title, content, customClassName}) => {
    return ( 
        <div className={`${customClassName} relative bg-backgroundLinearLightGray shadow-xl backdrop-blur-xl rounded-sm p-4 w-full h-full`}>
            <p><b>{title}</b></p>
            <p>{content}</p>
        </div>
     );
}
 
export default BlurEffectContainer;