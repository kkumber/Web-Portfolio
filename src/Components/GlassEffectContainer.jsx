const GlassEffectContainer = ({title, content}) => {
    return ( 
        <div className="bg-gradient-to-bl from-ContainerLinearDark from-30% via-backgroundLinearLightGray shadow-md
        backdrop-blur-2xl border-borderColor p-4 text-white rounded-sm">
            <p><b>{title} </b></p>
            <p>{content} </p>
        </div>
     );
}
 
export default GlassEffectContainer;