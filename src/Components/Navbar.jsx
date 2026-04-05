import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-max pointer-events-auto">
      <div className="flex items-center justify-center bg-black/60 backdrop-blur-2xl border border-white/5 p-2 px-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500">
        <div className="flex items-center gap-x-8">
          <Link 
            to="/" 
            className={`transition-all duration-300 p-3 rounded-2xl hover:bg-white/5 transform hover:scale-110 active:scale-95 ${isActive('/') ? 'text-white bg-white/10' : 'text-zinc-600 hover:text-white'}`}
            title="Home"
          >
            <FontAwesomeIcon icon={faHouse} className="text-xl" />
          </Link>
          <Link 
            to="/projects" 
            className={`transition-all duration-300 p-3 rounded-2xl hover:bg-white/5 transform hover:scale-110 active:scale-95 ${isActive('/projects') ? 'text-white bg-white/10' : 'text-zinc-600 hover:text-white'}`}
            title="Projects"
          >
            <FontAwesomeIcon icon={faFolder} className="text-xl" />
          </Link>
          <Link 
            to="/contact" 
            className={`transition-all duration-300 p-3 rounded-2xl hover:bg-white/5 transform hover:scale-110 active:scale-95 ${isActive('/contact') ? 'text-white bg-white/10' : 'text-zinc-600 hover:text-white'}`}
            title="Contact"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
