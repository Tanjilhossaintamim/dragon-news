import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-center mx-auto">
      <div></div>
      <ul className="flex items-center space-x-7 text-color-dark-3 text-lg">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center">
        <CgProfile size={45} />

        <Link to={"/login"}>
          <button className="w-36 h-11 bg-color-dark-2 text-white text-xl font-semibold ml-4">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
