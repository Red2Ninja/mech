import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section id="contact">
    <div className="footer">
      <div className="footer-inner">

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/asme.vit/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
              
            </a>
            <a href="https://www.facebook.com/AsmeVit/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/american-society-of-mechanical-engineers-asme-vit-vellore/?originalSubdomain=in" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fasmevit" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/@ASME-VIT" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className='footer-section share-tech-regular'>
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              
              <span>asme@vit.ac.in</span>
            </div>
            <div className="contact-item">
              
              <span>official.mechnovate@gmail.com</span>
            </div>
            <div className="contact-item">
              
              <span>+91 9372946497</span>
            </div>
            <div className="contact-item">
              
              <span>VIT, Vellore, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mechnovate | All rights reserved.
      </div>
    </div>
    </section>
  );
}

export default Footer;
