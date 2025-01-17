import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="mb-20">
        <div className="grid grid-cols-3 text-white">
            <div className="col-start-2 col-end-2 items-center justify-evenly flex bg-backgroundLinearLightGray py-2 rounded-md mt-8 mb-8">
                <Link to={'/'} className="px-4 py-1 hover:bg-gray-600 rounded-sm"><p>Home</p></Link>
                <Link to={'/projects'} className="px-4 py-1 hover:bg-gray-600 rounded-sm"><p>Projects</p></Link>
                <Link to={'/contact'} className="px-4 py-1 hover:bg-gray-600 rounded-sm"><p>Contact</p></Link>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;