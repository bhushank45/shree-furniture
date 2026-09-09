import "./ContactUs.css";

function ContactUs() {
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p className="contact-hero-text">
          Have a question about our furniture or want to visit our showroom?
          We'd be happy to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <p className="contact-eyebrow">SEND AN ENQUIRY</p>

          <h2>Let's Talk About Your Space</h2>

          <p className="contact-description">
            Fill out the form and our team will get back to you with the
            information you need.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input id="name" type="text" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Enquiry →
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <p className="contact-eyebrow">VISIT OR REACH US</p>

          <h2>We're Here to Help</h2>

          <p className="contact-description">
            Whether you're looking for a particular piece or simply want some
            inspiration, our team is ready to help.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div>
                <strong>Visit Us</strong>

                <p>
                  12, Furniture Market
                  <br />
                  Mumbai, Maharashtra 421503
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-telephone"></i>
              </div>

              <div>
                <strong>Phone</strong>

                <a href="tel:+917385116654">+91 73851 16654</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="bi bi-envelope"></i>
              </div>

              <div>
                <strong>Email</strong>

                <a href="mailto:info@shreefurniture.in">
                  info@shreefurniture.in
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
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

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Mumbai%2C%20Maharashtra"
            target="_blank"
            rel="noreferrer"
            className="contact-directions-btn"
          >
            Get Directions →
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta">
        <p>WE'D LOVE TO SEE YOU</p>

        <h2>Come Visit Our Showroom</h2>

        <p>
          See the furniture, feel the materials, and discover pieces that make
          your space feel like home.
        </p>

        <a href="/ourshowroom">Explore Our Showroom →</a>
      </section>
    </main>
  );
}

export default ContactUs;
