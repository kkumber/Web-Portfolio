import { useState } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faFolder, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:sticky fixed z-10 top-0">
        <div className="grid z-10 md:grid-cols-3 text-white">
            <div className={`min-w-max md:col-start-2 md:col-end-2 items-center justify-evenly flex flex-col bg-backgroundLinearLightGray py-2 rounded-xl mt-4 mb-4 md:mt-8 md:mb-8 md:w-full ${isOpen ? 'w-32' : 'w-12'} transition-all duration-500`}>
              <div className="">
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <div className={`md:flex ${isOpen ? 'block animate-fadeDown' : 'hidden'}`}>
                <Link to={'/'} className="px-4 py-1 hover:text-black rounded-sm flex items-center gap-x-1 text-start">
                  <FontAwesomeIcon icon={faHouse} />
                  <p>Home</p>
                </Link>
                <Link to={'/projects'} className="px-4 py-1 hover:text-black rounded-sm flex items-center gap-x-1">
                  <FontAwesomeIcon icon={faFolder} />
                  <p>Projects</p>
                </Link>
                <Link to={'/contact'} className="px-4 py-1 hover:text-black rounded-sm flex items-center gap-x-1">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>Contact</p>
                </Link>
              </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;