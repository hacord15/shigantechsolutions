'use client';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Shigan team will reach out shortly.');
    e.target.reset();
  };

  return (
    <section className="contact-banner-section section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>
              Let’s drive the future <br />
              together 🌱
            </h3>
            <p>
              Need a customized retro-fitment solution? Our team of alternative fuel experts is ready to assist
              you.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt"></i> <span>Shigan TechSolutions, Gurugram, India</span>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-phone-alt"></i> <span>+91 124 456 7890</span>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-envelope"></i> <span>hello@shigantechsolutions.com</span>
              </div>
            </div>
            <div
              style={{
                marginTop: '2rem',
                background: 'rgba(45,212,191,0.15)',
                borderRadius: '1.5rem',
                padding: '1rem',
                borderLeft: '4px solid var(--energy-teal)',
              }}
            >
              <i className="fas fa-bullhorn"></i> <strong>Partial banner offer:</strong> Free consultation for
              fleet conversions above 10 vehicles.
            </div>
          </div>
          <div className="contact-form">
            <h3 style={{ marginBottom: '1.2rem', color: 'var(--primary)' }}>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full name *" required />
              <input type="email" placeholder="Email address *" required />
              <input type="tel" placeholder="Phone number" />
              <textarea rows="4" placeholder="Tell us about your requirement..."></textarea>
              <button type="submit">
                <i className="fas fa-paper-plane"></i> Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}