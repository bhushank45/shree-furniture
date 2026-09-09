import { Link } from "react-router-dom";
import furniture from "../../Data/furniture";
import showroomInterior from "../../assets/images/showroom-interior.png";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

function Home() {
  const featuredFurniture = [
    furniture.find((item) => item.category === "Sofa"),
    furniture.find((item) => item.category === "Bed"),
    furniture.find((item) => item.category === "Dining Table"),
    furniture.find((item) => item.category === "Office Chair"),
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="featured-section">
        <div className="section-heading">
          <span className="section-label">EXPLORE OUR</span>
          <h2>Featured Collections</h2>
          <p>
            Find beautiful furniture pieces designed for every space in your
            home.
          </p>
        </div>

        <div className="featured-grid">
          {featuredFurniture.map((product) => (
            <div className="featured-card" key={product.id}>
              <div className="featured-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="featured-content">
                <span>{product.category}</span>
                <h3>{product.name}</h3>

                <Link to={`/collections/${product.id}`}>
                  View Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link to="/collections" className="home-outline-btn">
          Explore All Collections
          <i className="bi bi-arrow-right"></i>
        </Link>
      </section>

      <section className="why-section">
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE</span>
          <h2>Shree Furniture</h2>
          <p>
            More than just furniture. We help you create spaces that feel
            comfortable and truly yours.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-award"></i>
            </div>
            <h3>Quality Furniture</h3>
            <p>
              Carefully selected furniture made with attention to quality,
              comfort and lasting style.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-gem"></i>
            </div>
            <h3>Premium Materials</h3>
            <p>
              Quality materials and finishes designed to bring comfort and
              elegance to your home.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-person-check"></i>
            </div>
            <h3>Expert Guidance</h3>
            <p>
              Our team helps you find furniture that suits your style and space.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="bi bi-shop"></i>
            </div>
            <h3>Visit Our Showroom</h3>
            <p>
              See the furniture, feel the materials and experience the quality
              in person.
            </p>
          </div>
        </div>
      </section>

      <section className="showroom-preview">
        <div className="showroom-image">
          <img src={showroomInterior} alt="Shree Furniture showroom" />
        </div>

        <div className="showroom-content">
          <span className="section-label">OUR SHOWROOM</span>

          <h2>Experience the Difference</h2>

          <p>
            Furniture looks different when you experience it in person. Visit
            our showroom to explore our collection, see the materials and get
            inspiration for your home.
          </p>

          <div className="showroom-points">
            <div>
              <i className="bi bi-geo-alt"></i>
              <div>
                <h4>Prime Location</h4>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>

            <div>
              <i className="bi bi-clock"></i>
              <div>
                <h4>Open 7 Days</h4>
                <p>10 AM - 8 PM</p>
              </div>
            </div>

            <div>
              <i className="bi bi-people"></i>
              <div>
                <h4>Friendly Staff</h4>
                <p>Always ready to help</p>
              </div>
            </div>
          </div>

          <Link to="/ourshowroom" className="home-primary-btn">
            Visit Our Showroom
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading">
          <span className="section-label">WHAT OUR CUSTOMERS SAY</span>
          <h2>Homes Made Happier</h2>
          <p>What our customers say about their experience with us.</p>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <i className="bi bi-quote quote-icon"></i>
            <p>
              "Excellent quality and beautiful designs. The staff was very
              helpful in choosing the perfect sofa for our living room."
            </p>
            <div className="testimonial-bottom">
              <strong>Priya Sharma</strong>
              <span>★★★★★</span>
            </div>
          </div>

          <div className="testimonial-card">
            <i className="bi bi-quote quote-icon"></i>
            <p>
              "Loved the collection and the overall experience. The showroom has
              a great variety and the team is very supportive."
            </p>
            <div className="testimonial-bottom">
              <strong>Rohit Mehta</strong>
              <span>★★★★★</span>
            </div>
          </div>

          <div className="testimonial-card">
            <i className="bi bi-quote quote-icon"></i>
            <p>
              "Beautiful furniture and great service. Highly recommended for
              anyone looking to furnish their home."
            </p>
            <div className="testimonial-bottom">
              <strong>Sneha Patil</strong>
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-content">
          <span>READY TO TRANSFORM YOUR SPACE?</span>

          <h2>Find Furniture That Feels Like Home</h2>

          <p>
            Explore our collection and visit our showroom to experience the
            quality yourself.
          </p>

          <div className="cta-buttons">
            <Link to="/collections" className="home-primary-btn">
              Explore Collections
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/ourshowroom" className="cta-outline-btn">
              Visit Our Showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
