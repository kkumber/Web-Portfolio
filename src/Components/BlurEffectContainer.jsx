const BlurEffectContainer = ({title, content}) => {
    return ( 
        <div className="relative bg-ContainerLinearGray shadow-xl bg-opacity-70 backdrop-blur-xl rounded-sm p-4">
            <p><b>{title}</b></p>
            <p>{content}</p>
        </div>
     );
}
 
export default BlurEffectContainer;