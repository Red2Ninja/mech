import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
              <span>asme@vit.ac.in</span>
            </div>
            <div className="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
              <span>official.mechnovate@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" />
              <span>+91 9372946497</span>
            </div>
            <div className="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" />
              <span>VIT, Vellore, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mechnovate | All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
