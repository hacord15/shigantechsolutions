// app/contact/page.js
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission – replace with your API endpoint
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <>
      <div className="contact-hero">
        {/* Background Video */}
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/MLPAj365l4o?autoplay=1&mute=1&loop=1&playlist=MLPAj365l4o&controls=0&modestbranding=1&rel=0&clip=UgkxDCm0wWt1isyMnwacdGyt_7sBfgg4covJ&clipt=EJDCBBiA7gU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* Dark Overlay for readability */}
        <div className="overlay"></div>

        {/* Content Container */}
        <div className="contact-content">
          <div className="contact-card">
            <h1>Contact Us</h1>
            <p className="tagline">Let's discuss your dual‑fuel retrofitting needs</p>

            <div className="two-columns">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="success-msg">✓ Message sent successfully!</p>
                )}
              </form>

              {/* Contact Info */}
              <div className="contact-info">
                <div className="info-block">
                  <h3>📞 Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 12345 67890</p>
                </div>
                <div className="info-block">
                  <h3>✉️ Email</h3>
                  <p>info@shigantech.com</p>
                  <p>sales@shigantech.com</p>
                </div>
                <div className="info-block">
                  <h3>📍 Address</h3>
                  <p>Shigan TechSolutions Pvt. Ltd.<br />
                  Sector 62, Noida, UP – 201301<br />
                  India</p>
                </div>
                <div className="info-block">
                  <h3>🌐 Social Media</h3>
                  <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 1.5rem 2rem; /* top padding for fixed navbar */
        }

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .video-background iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 177.78vh;
          min-width: 100%;
          height: 56.25vw;
          min-height: 100%;
          transform: translate(-50%, -50%);
          border: none;
        }

        /* Overlay */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          z-index: 1;
        }

        /* Content Card */
        .contact-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .contact-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        h1 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .tagline {
          text-align: center;
          color: rgba(255,255,255,0.7);
          margin-bottom: 2rem;
          font-size: 1rem;
        }
        .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00aaff;
          background: rgba(255,255,255,0.25);
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255,255,255,0.6);
        }
        button[type="submit"] {
          background: #00aaff;
          color: white;
          border: none;
          padding: 0.8rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }
        button[type="submit"]:hover {
          background: #0088cc;
        }
        button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .success-msg {
          color: #6ee8a0;
          text-align: center;
          margin-top: 0.5rem;
        }

        /* Contact Info Styles */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-block h3 {
          color: #00aaff;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .info-block p {
          color: white;
          line-height: 1.5;
          margin: 0.25rem 0;
        }
        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .social-links a {
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.1);
          border-radius: 40px;
          transition: background 0.3s;
        }
        .social-links a:hover {
          background: #00aaff;
          color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .two-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-card {
            padding: 1.5rem;
          }
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}