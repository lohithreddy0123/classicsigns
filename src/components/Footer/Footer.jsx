import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        <Link to="/">
          <img src={logo} alt="classicsigns Logo" className="logo" />
        </Link>
      </div>

      <div className="footer-container">
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>

        </div>

        <div className="footer-section footer-legal">
          <h4>Legal</h4>
          <ul className="footer-links-list">
            <li><Link to="/TermsAndConditions">Policies</Link></li>
            <li><a href="#faq-section">FAQ</a></li>
          </ul>

        </div>

        <div className="footer-section footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/vyrex-seo" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://x.com/VyrexOfficial" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/share/u64nanas4ZY8icGJ/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2026 Classic Porcelain Signs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
