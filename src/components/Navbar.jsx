import { Link } from "react-router-dom";
import logo from "../assets/shree-furniture-logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbrand">
        <Link to="/">
            <img src={logo} alt="Shree Furniture" />
        </Link>
      </div>
      <ul className="navlinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        {/* <li>
          <Link to="/ourshowroom">Our Showroom</Link>
        </li> */}
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <Link to="/ourshowroom" className="showroom-btn">Visit Showroom</Link>
    </nav>
  );
}

export default Navbar;
