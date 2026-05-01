import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaPenNib
} from 'react-icons/fa';
import { images } from '../../assets/imageUrls';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <header className="site-header">
      <div className="header-container">

        <div className="logo">
          <Link to="/" aria-label="Go to homepage">
            <img
              src={images.logoh}
              alt="Classic Porcelain Signs "
              width="320"
              height="72"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/about"><FaInfoCircle /> About</Link>
          <Link to="/services"><FaServicestack /> Services</Link>
          <Link to="/blogs"><FaPenNib /> Blogs</Link>
          <Link to="/contact"><FaEnvelope /> Contact</Link>
        </nav>

        <button
          type="button"
          className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isSidebarOpen}
          aria-controls="mobile-sidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div
        id="mobile-sidebar"
        className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="sidebar-logo">
          <img
            src={images.logoh}
            alt="Classic Porcelain Signs "
            width="180"
            height="60"
            loading="lazy"
            decoding="async"
          />
        </div>

        <nav className="sidebar-nav" aria-label="Mobile navigation">
          <Link to="/" onClick={closeSidebar}><FaHome /> Home</Link>
          <Link to="/about" onClick={closeSidebar}><FaInfoCircle /> About</Link>
          <Link to="/services" onClick={closeSidebar}><FaServicestack /> Services</Link>
          <Link to="/blogs" onClick={closeSidebar}><FaPenNib /> Blogs</Link>
          <Link to="/contact" onClick={closeSidebar}><FaEnvelope /> Contact</Link>
        </nav>
      </div>

      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />
    </header>
  );
};

export default Header;