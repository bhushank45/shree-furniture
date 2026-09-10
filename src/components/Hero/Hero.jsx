import { Link } from "react-router-dom";
import heroImg from "../../assets/images/heroimg.png";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="label">WELCOME TO</span>
          <h1>Shree Furniture</h1>
          <h2>Furniture Made for Indian Homes.</h2>
          <span className="dash"></span>
          <p>
            Discover a wide range of stylish, comfortable and durable furniture,
            thoughtfully crafted to bring beauty and warmth to your home.
          </p>
          <div className="hero-buttons">
            <Link to="/collections" className="hero-primary-btn">
              Explore Collections
            </Link>
            <Link to="/ourshowroom" className="hero-secondary-btn">
              VISIT OUR SHOWROOM
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <span>
            <i className="bi bi-award"></i>
          </span>
          <div>
            <h3>Premium Quality</h3>
            <p>Quality furniture built to last.</p>
          </div>
        </div>
        <div className="feature">
          <span>
            <i className="bi bi-leaf"></i>
          </span>
          <div>
            <h3>Wide Variety</h3>
            <p>Furniture for every space.</p>
          </div>
        </div>
        <div className="feature">
          <span>
            <i className="bi bi-house-door"></i>
          </span>
          <div>
            <h3>Stylish & Durable</h3>
            <p>Designed for comfort and style.</p>
          </div>
        </div>
        <div className="feature">
          <span>
            <i className="bi bi-people"></i>
          </span>
          <div>
            <h3>Trusted by Families</h3>
            <p>Loved by families across India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
