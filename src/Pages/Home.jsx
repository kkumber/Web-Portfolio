import TechnologyContainer from "../Components/TechnologyContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrophy, faUser, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="min-h-screen text-slate-600 font-sans selection:bg-indigo-100 selection:text-indigo-900 antialiased pb-24 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 relative z-10 space-y-6">
        
        {/* --- BENTO GRID START --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* HERO & PROFILE */}
          <div 
            className="md:col-span-12 lg:col-span-9 lg:row-span-2 glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative group animate-slideInTop"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold tracking-[0.2em] text-indigo-600 uppercase backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                  </span>
                  Continuous Learning
                </div>
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1]">
                  Full-Stack <br />
                  <span className="text-slate-500">Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                  I love building things for the web—specializing in clean code, 
                  friendly user experiences, and systems that just work.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="group px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_30px_-10px_rgba(79,70,229,0.4)]">
                  See my Work <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition-all backdrop-blur-md">
                  Let's Chat
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 lg:w-[40%] h-80 md:h-auto relative overflow-hidden max-md:order-first">
              <img src="/images/formal_picture.webp" alt="Angel Reyes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* ABOUT ME TILE */}
          <div 
            className="md:col-span-12 lg:col-span-3 lg:row-span-2 glass-card rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group animate-slideInRight"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-indigo-50 blur-[60px] rounded-full"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-indigo-600">
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hi, I'm Angel!</h2>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                I'm a developer who enjoys solving tricky problems and turning them into simple, elegant designs. My goal is always to build software that's as reliable as it is easy to use.
              </p>
            </div>
            <div className="mt-auto pt-8 flex items-center gap-3">
               <div className="h-[1px] flex-1 bg-slate-100"></div>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Always curious</span>
            </div>
          </div>

          {/* TECH STACK */}
          <div 
            className="md:col-span-12 lg:col-span-8 glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group animate-slideInLeft"
            style={{ animationDelay: '0.2s' }}
          >
             <div className="flex justify-between items-center mb-8 max-md:grid gap-y-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Tech Stack</h2>
                <div className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold uppercase text-slate-500 tracking-widest max-w-max">
                  Core Technologies
                </div>
             </div>
             <TechnologyContainer isBento={true} />
          </div>

          {/* RECOGNITION TILE */}
          <div 
            className="md:col-span-12 lg:col-span-4 glass-card rounded-[2.5rem] p-8 flex flex-col justify-center group relative overflow-hidden animate-slideInBottom"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <FontAwesomeIcon icon={faTrophy} className="text-8xl text-slate-900" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-indigo-600 border border-slate-200 group-hover:scale-110 transition-transform shadow-[0_5px_15px_rgba(79,70,229,0.1)]">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Industry Recognition</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-800 font-bold text-sm">Sparkfest 2025</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">3rd Place Winner</p>
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-sm">GDG PUP Hackathon</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Participated</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* --- BENTO GRID END --- */}

      </div>
    </div>
  );
};

export default Home;
