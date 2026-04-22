import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';
import { images } from '../../assets/imageUrls';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src={images.logoh}
              alt="Classic Porcelain Signs Logo"
              width="320"
              height="72"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/about"><FaInfoCircle /> About</Link>
          <Link to="/services"><FaServicestack /> Services</Link>
          <Link to="/contact"><FaEnvelope /> Contact</Link>
        </nav>
        <div
          className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img
            src={images.logoh}
            alt="Classic Porcelain Signs Logo"
            width="180"
            height="60"
            loading="eager"
            decoding="async"
          />
        </div>
        <nav className="sidebar-nav">
          <Link to="/" onClick={() => setIsSidebarOpen(false)}><FaHome /> Home</Link>
          <Link to="/about" onClick={() => setIsSidebarOpen(false)}><FaInfoCircle /> About</Link>
          <Link to="/services" onClick={() => setIsSidebarOpen(false)}><FaServicestack /> Services</Link>
          <Link to="/contact" onClick={() => setIsSidebarOpen(false)}><FaEnvelope /> Contact</Link>
        </nav>
      </div>
      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Header;