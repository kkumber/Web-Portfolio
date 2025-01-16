const BlurEffectContainer = ({title, content, customClassName}) => {
    return ( 
        <div className="relative bg-ContainerLinearGray shadow-xl bg-opacity-70 backdrop-blur-xl rounded-sm p-4">
            <p className={customClassName}><b>{title}</b></p>
            <p>{content}</p>
        </div>
     );
}
 
export default BlurEffectContainer;