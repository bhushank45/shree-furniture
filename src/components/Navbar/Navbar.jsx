import { NavLink } from "react-router-dom";
import logo from "../../assets/shree-furniture-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbrand">
        <NavLink to="/">
          <img src={logo} alt="Shree Furniture" />
        </NavLink>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/collections">Collections</NavLink>
        </li>
        <li>
          <NavLink to="/ourshowroom">Our Showroom</NavLink>
        </li>
        {/* <li>
          <Link to="/aboutus">About Us</Link>
        </li> */}
        {/* <li>
          <Link to="/ourshowroom">Our Showroom</Link>
        </li> */}
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      <NavLink to="/ourshowroom" className="showroom-btn">
        Visit Showroom
      </NavLink>
    </nav>
  );
}

export default Navbar;
