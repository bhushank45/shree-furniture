import { Link } from "react-router-dom";
import "./OurShowroom.css";

import showroomHero from "../../assets/images/showroom-hero.png";
import showroomInterior from "../../assets/images/showroom-interior.png";

function OurShowroom() {
  return (
    <main className="showroom-page">
      {/* Hero Section */}
      <section className="showroom-hero">
        <div className="showroom-hero-content">
          <p className="showroom-eyebrow label">Visit Us</p>

          <h1>Our Showroom</h1>

          <h2>Experience Furniture Beyond a Screen</h2>

          <p className="showroom-hero-description">
            Step into a space where design meets comfort. Explore our wide range
            of furniture collections in person and experience the quality,
            craftsmanship, and beauty that make Shree Furniture special.
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="showroom-primary-btn"
          >
            Get Directions <span>→</span>
          </a>

          <p className="showroom-tagline">
            <i className="bi bi-house-heart"></i>
            Real Furniture. Real Spaces. Real Inspiration.
          </p>
        </div>

        <div className="showroom-hero-image">
          <img src={showroomHero} alt="Shree Furniture showroom interior" />
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="showroom-benefits">
        <div className="showroom-benefit">
          <div className="benefit-icon">
            <i className="bi bi-cup-hot"></i>
          </div>

          <div>
            <h3>See the Quality</h3>
            <p>Experience the comfort, materials, and finishes up close.</p>
          </div>
        </div>

        <div className="showroom-benefit">
          <div className="benefit-icon">
            <i className="bi bi-people"></i>
          </div>

          <div>
            <h3>Get Expert Advice</h3>
            <p>
              Our team is here to help you find the perfect furniture for your
              space.
            </p>
          </div>
        </div>

        <div className="showroom-benefit">
          <div className="benefit-icon">
            <i className="bi bi-house"></i>
          </div>

          <div>
            <h3>Feel the Difference</h3>
            <p>Explore full-size displays and real room setups.</p>
          </div>
        </div>

        <div className="showroom-benefit">
          <div className="benefit-icon">
            <i className="bi bi-heart"></i>
          </div>

          <div>
            <h3>Design Your Space</h3>
            <p>Get ideas and personalized recommendations.</p>
          </div>
        </div>
      </section>

      {/* About Shree Furniture */}
      <section className="showroom-about">
        <div className="showroom-about-image">
          <img
            src={showroomInterior}
            alt="Furniture displayed inside Shree Furniture showroom"
          />
        </div>

        <div className="showroom-about-content">
          <p className="showroom-eyebrow">About Shree Furniture</p>

          <h2>More Than Just Furniture</h2>

          <p>
            At Shree Furniture, we believe a home is built with stories, and
            every piece of furniture adds to it. Our showroom is designed to
            give you a hands-on experience of our collections, helping you find
            the perfect pieces for your home, office, or commercial space.
          </p>

          <div className="showroom-stats">
            <div>
              <strong>1000+</strong>
              <span>Happy Customers</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Furniture Designs</span>
            </div>

            <div>
              <strong>Years of Trust</strong>
              <span>In Your Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us + Find Us */}
      <section className="showroom-location" id="location">
        {/* Visit Us */}
        <div className="visit-us">
          <h2>Visit Us</h2>

          <p className="location-intro">
            We'd love to welcome you to our showroom. Come explore our
            collections, discuss your ideas, and let us help you create a home
            you'll love.
          </p>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="bi bi-geo-alt"></i>
            </div>

            <div>
              <strong>Address</strong>
              <p>
                12, Furniture Market
                <br />
                Mumbai, Maharashtra 421503
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="bi bi-telephone"></i>
            </div>

            <div>
              <strong>Phone</strong>
              <a href="tel:+917385116654">+91 73851 16654</a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="bi bi-envelope"></i>
            </div>

            <div>
              <strong>Email</strong>
              <a href="mailto:info@shreefurniture.in">info@shreefurniture.in</a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <i className="bi bi-clock"></i>
            </div>

            <div>
              <strong>Opening Hours</strong>

              <p>
                Monday - Saturday: 10:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Find Us */}
        <div className="find-us">
          <h2>Find Us</h2>

          <p className="location-intro">
            Easily locate our showroom on the map. We're conveniently located
            and look forward to your visit!
          </p>

          <div className="map-container">
            <iframe
              title="Shree Furniture Location"
              src="https://www.google.com/maps?q=Mumbai,Maharashtra&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="map-btn"
          >
            Get Directions on Google Maps
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="showroom-cta">
        <div className="showroom-cta-overlay"></div>

        <div className="showroom-cta-content">
          <p className="showroom-eyebrow">Visit Our Showroom</p>

          <h2>
            Experience Shree Furniture
            <br />
            In Person
          </h2>

          <p>
            Discover furniture that turns houses into homes.
            <br />
            Visit our showroom and experience the difference for yourself.
          </p>

          <Link to="/contactus" className="showroom-cta-btn">
            Contact Us <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default OurShowroom;
