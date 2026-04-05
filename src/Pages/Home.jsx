import TechnologyContainer from "../Components/TechnologyContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrophy, faUser, faChartLine } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="min-h-screen text-zinc-300 font-sans selection:bg-white/10 selection:text-white antialiased pb-24 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-24 relative z-10 space-y-6">
        
        {/* --- BENTO GRID START --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* HERO & PROFILE */}
          <div 
            className="md:col-span-12 lg:col-span-9 lg:row-span-2 glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative group border-white/10 animate-slideInTop"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                  </span>
                  Continuous Learning
                </div>
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
                  Full-Stack <br />
                  <span className="text-zinc-400">Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-medium">
                  Designing high-integrity digital systems where architectural 
                  clarity meets seamless performance.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="group px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2">
                  Explore Work <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 lg:w-[40%] h-80 md:h-auto relative overflow-hidden max-md:order-first">
              <img src="/images/formal_picture.webp" alt="Angel Reyes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-zinc-950/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* ABOUT ME TILE */}
          <div 
            className="md:col-span-12 lg:col-span-3 lg:row-span-2 glass-card rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group border-white/10 animate-slideInRight"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-brand-orange/5 blur-[60px] rounded-full"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                <FontAwesomeIcon icon={faUser} className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
              <p className="text-sm leading-relaxed text-zinc-400 font-medium">
                I am a specialized developer driven by the intersection of technical excellence and minimalist design. I build scalable software that prioritizes reliability and user intuition.
              </p>
            </div>
            <div className="mt-auto pt-8 flex items-center gap-3">
               <div className="h-[1px] flex-1 bg-white/10"></div>
               <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">Always Learning</span>
            </div>
          </div>

          {/* TECH STACK */}
          <div 
            className="md:col-span-12 lg:col-span-8 glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group border-white/10 animate-slideInLeft"
            style={{ animationDelay: '0.2s' }}
          >
             <div className="flex justify-between items-center mb-8 max-md:grid gap-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight">Core Technologies</h2>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase text-zinc-500 tracking-widest max-w-max">
                  Modern Stack
                </div>
             </div>
             <TechnologyContainer isBento={true} />
          </div>

          {/* RECOGNITION TILE */}
          <div 
            className="md:col-span-12 lg:col-span-4 glass-card rounded-[2.5rem] p-8 flex flex-col justify-center group relative overflow-hidden border-white/10 animate-slideInBottom"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <FontAwesomeIcon icon={faTrophy} className="text-8xl text-white" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange border border-white/10 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3 className="font-bold text-white text-lg">Recognition</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-100 font-bold text-sm">Sparkfest 2025</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">3rd Place Winner</p>
                </div>
                <div>
                  <p className="text-zinc-100 font-bold text-sm">GDG PUP Hackathon</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Participated</p>
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
