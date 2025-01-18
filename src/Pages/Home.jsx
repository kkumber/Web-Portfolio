import GlassEffectContainer from "../Components/GlassEffectContainer";
import BlurEffectContainer from "../Components/BlurEffectContainer";
import ProfileContainer from "../Components/ProfileContainer";
import TechnologyContainer from "../Components/TechnologyContainer";

const Home = () => {
    return (
    // Main Grid
    <div className="grid my-20 md:grid-cols-3 md:grid-rows-5 gap-2 text-white">
    {/* <div className="grid grid-cols-3 grid-rows-5 gap-2 text-white">
            <div className="col-start-1 col-end-3 row-start-1 row-end-2 animate-fadeRight "> <BlurEffectContainer title={'About me'} customTitleClassName={'text-2xl mb-2'} content={'Hello, i am an undergrad student in Rizal Technological University with a diverse set of skills in web development. I specialize in React and Django'} /> </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-4 animate-fadeUp "> <GlassEffectContainer title={'Education'} content={'Bachelor of Science in Information Technology - Undergraduate'} customClassName={'text-xl mb-4'} /> </div>
            <div className="col-start-1 col-end-2 row-start-4 row-end-6 animate-fadeDown "><GlassEffectContainer title={'Achievements'} content={'2023 Communications Synergy Hackaton - 3rd Place'} customClassName={'text-2xl mb-4'} /> </div>
            <div className="col-start-2 col-end-3 row-start-2 row-end-5 animate-fadeStay "> <ProfileContainer /> </div>
            <div className="col-start-2 col-end-3 row-start-5 row-end-6 animate-fadeUp "><BlurEffectContainer title={'Full-Stack Web Engineer'} customClassName='text-center flex justify-center items-center text-xl' /></div>
            <div className="col-start-3 col-end-4 row-start-1 row-end-3 animate-fadeLeft "><img src="/images/pic2.jpg" alt="Picture" className="h-full object-cover" /></div>
            <div className="col-start-3 col-end-4 row-start-3 row-end-4 animate-fadeUp "><BlurEffectContainer title={'"Keep Moving Forward"'} customClassName='text-center flex justify-center items-center text-xl' /> </div>
            <div className="col-start-3 col-end-4 row-start-4 row-end-6 animate-fadeDown "> <TechnologyContainer /> </div>
        </div>  */}


        {/* Sorted */}
        <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-5 animate-fadeStay md:order-4"> <ProfileContainer /> </div>
        <div className="md:col-start-2 md:col-end-3 md:row-start-5 md:row-end-6 animate-fadeUp md:order-5"><BlurEffectContainer title={'Full-Stack Web Engineer'} customClassName='text-center flex justify-center items-center text-xl' /></div>
        <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 animate-fadeRight md:order-1"> <BlurEffectContainer title={'About me'} customTitleClassName={'text-2xl mb-2'} content={'I’m an undergraduate student at Rizal Technological University with expertise in web development, specializing in React and Django. I’m also flexible with a variety of tools and technologies, adapting to project needs to deliver efficient and user-friendly solutions. I thrive on learning and tackling new challenges to grow as a developer.'} /> </div>
        <div className="md:col-start-3 md:col-end-4 md:row-start-4 md:row-end-6 animate-fadeDown md:order-8"> <TechnologyContainer /> </div>
        <div className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 animate-fadeLeft md:order-6"><img src="/images/pic2.jpg" alt="Picture" className="h-full object-cover" /></div>
        <div className="md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 animate-fadeUp md:order-7"><BlurEffectContainer title={'"Keep Moving Forward"'} customClassName='text-center flex justify-center items-center text-xl' /> </div>
        <div className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4 animate-fadeUp md:order-2"> <GlassEffectContainer title={'Education'} subTitle={'Rizal Technological University'} content={'Bachelor of Science in Information Technology - Undergraduate'} customClassName={'text-xl mb-4'} /> </div>
        <div className="md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-6 animate-fadeDown md:order-3"><GlassEffectContainer title={'Achievements'}subTitle={'Converge ICT Solutions Inc.`s Software Solutions of Synergy: Electrical and Electronics Engineering Summit -'} content={'3rd Place'} customClassName={'text-2xl mb-4'} /> </div>

    </div> 
    );
}
 
export default Home;