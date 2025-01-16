import GlassEffectContainer from "../Components/GlassEffectContainer";

const Home = () => {
    return (
    // Main Grid
    <div className="grid grid-cols-3 grid-rows-5 gap-2">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 ">Div 1</div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-4 ">Div 2</div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-6 ">Div 3</div>
        <div className="col-start-2 col-end-4 row-start-2 row-end-5 ">Div 4</div>
        <div className="col-start-2 col-end-4 row-start-5 row-end-6 ">Div 5</div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-3 ">Div 6</div>
        <div className="col-start-3 col-end-4 row-start-3 row-end-4 ">Div 7</div>
        <div className="col-start-3 col-end-4 row-start-4 row-end-6 ">Div 8</div>
    </div> 
    );
}
 
export default Home;