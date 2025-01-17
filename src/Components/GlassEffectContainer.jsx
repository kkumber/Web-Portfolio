const GlassEffectContainer = ({title, content, customClassName, customLayout}) => {
    return ( 
        <div className="bg-gradient-to-bl from-ContainerLinearDark from-30% via-backgroundLinearLightGray shadow-md
        backdrop-blur-2xl border-borderColor p-4 text-white rounded-sm w-full h-full">
            <p className={customClassName}><b>{title} </b></p>
            <p>{content} </p>
            {customLayout}
        </div>
     );
}
 
export default GlassEffectContainer;