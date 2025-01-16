import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div className="grid grid-cols-3 text-white">
            <div className="col-start-2 col-end-2 items-center justify-evenly flex bg-backgroundLinearLightGray py-2 rounded-md mt-8 mb-8">
                <p>Home</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;