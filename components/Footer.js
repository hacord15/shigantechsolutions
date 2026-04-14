"use client";

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="shigan-footer">
      <div className="footer-container">
        {/* Main content row */}
        <div className="footer-main">
          
          {/* Left column: Logo, description, contact */}
          <div className="footer-left">
            <div className="footer-logo">
              <h2>
                <span className="logo-shigan">SHiGAN</span>
                <span className="logo-tech"> techsolutions</span>
              </h2>
            </div>
            <p className="footer-description">
              Shigan TechSolutions Private Limited provides innovative technology 
              solutions and IT services to businesses. Our mission is to deliver 
              reliable, high-quality solutions that help organizations improve 
              efficiency, productivity, and long-term growth.
            </p>
            <ul className="footer-contact">
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Shigan TechSolutions Private Limited. Sector-8, Alier Road, Bhangrola, IMT Manesar, Gurgaon – 122050, Haryana, India
              </li>
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                contact@shigantechsolutions.com
              </li>
              <li>
                <svg className="contact-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +91 99583 63647
              </li>
            </ul>
          </div>

          {/* Right column: Useful Links (2 columns) + Shigan TechSolutions */}
          <div className="footer-right">
            <div className="footer-links-row">
              <div className="footer-links-col">
                <h3 className="footer-heading">Useful Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/About">About</a></li>
                  <li><a href="/service">Services</a></li>
                  <li><a href="/about/our-companies">Our Companies</a></li>
                </ul>
              </div>
              <div className="footer-links-col">
                <h3 className="footer-heading invisible-placeholder">Placeholder</h3>
                <ul>
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/pages">Pages</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-company">
              <h3 className="footer-heading">Shigan TechSolutions</h3>
              <p>
                Shigan TechSolutions Private Limited is committed to delivering 
                innovative IT solutions, software development services, and 
                digital transformation for businesses worldwide.
              </p>
              <a href="/contact" className="footer-button">Get In Touch</a>
            </div>
          </div>
        </div>

        {/* Copyright & credits row */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>Copyright © {currentYear} Shigan TechSolutions</p>
            <p className="footer-credits">Design & Developed by Neural Info Solutions Private Limited</p>
          </div>
          <div className="footer-policy">
            <a href="/terms">Terms & Conditions</a>
            <span className="separator">/</span>
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">/</span>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;