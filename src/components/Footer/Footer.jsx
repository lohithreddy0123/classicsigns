import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { images } from '../../assets/imageUrls';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        <Link to="/">
          <img
            src={images.logoh}
            alt="Classic Porcelain Signs Logo"
            className="logo"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
          />
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
            <li><Link to="/blogs">Blogs</Link></li>
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
            <a href="https://www.linkedin.com/company/classic-porcelain-signs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#ffffff"/></svg>
            </a>
            <a href="https://twitter.com/ClassicPorcelain" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="https://www.facebook.com/ClassicPorcelainSigns" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/classicporcelainsigns" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none"/></svg>
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2025 Classic Porcelain Signs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;