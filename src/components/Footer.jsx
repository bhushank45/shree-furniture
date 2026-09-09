import { Link } from "react-router-dom";
import logo from "../assets/shree-furniture-logo(white).png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Shree Furniture" className="footer-logo" />
          </Link>
          <p>
            Thoughtfully made furniture for homes that feel warm, personal, and
            beautifully lived in.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://pinterest.com">
              <i class="bi bi-whatsapp"></i>
            </a>
            <a href="https://pinterest.com">
              <i class="bi bi-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/ourshowroom">Our Showroom</Link>
        </div>

        <div className="footer-column">
          <h2>Visit Us</h2>
          <p>
            12, Furniture Market
            <br />
            Mumbai, Maharashtra 421503
          </p>
          <a href="tel:+917385116654">+91 73851 16654</a>
          <a href="mailto:info@shreefurniture.in">info@shreefurniture.in</a>
        </div>

        <div className="footer-newsletter">
          <h2>Stay in the know</h2>
          <p>
            New collections, thoughtful spaces, and stories from our workshop.
          </p>
          <form className="newsletter-form">
            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shree Furniture</span>
        <span>Made for living well.</span>
      </div>
    </footer>
  );
}

export default Footer;
