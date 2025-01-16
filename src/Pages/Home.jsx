import GlassEffectContainer from "../Components/GlassEffectContainer";
import BlurEffectContainer from "../Components/BlurEffectContainer";

const Home = () => {
    return (
    // Main Grid
    <div className="grid grid-cols-3 grid-rows-5 gap-2 text-white">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 "> <BlurEffectContainer title={'About me'} content={'Hello, i am an undergrad student in Rizal Technological University with a diverse set of skills in web development. I specialize in React and Django'}/> </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-4 "> <GlassEffectContainer title={'Education'} content={'Bachelor of Science in Information Technology: Undergraduate'}/> </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-6 "><GlassEffectContainer title={'Achievements'} content={'Synergy 2023 Hackaton 3rd Place'} /> </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-5 "><GlassEffectContainer title={'Profile'}/> </div>
        <div className="col-start-2 col-end-3 row-start-5 row-end-6 "><BlurEffectContainer title={'Full-Stack Web Engineer'} customClassName={'text-center'}/></div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 "><img src="/images/pic2.jpg" alt="Picture" /></div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4 "><BlurEffectContainer title={'"Keep Moving Forward"'} customClassName={'text-center'}/> </div>
        <div className="col-start-3 col-end-4 row-start-4 row-end-6 "><GlassEffectContainer title={'Technologies'} /></div>
    </div> 
    );
}
 
export default Home;