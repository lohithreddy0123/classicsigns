import React, { useState } from 'react';
import './header.css';
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope
} from 'react-icons/fa';
import logo from '../../assets/images/logoh.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* DESKTOP NAV (with icons) */}
        <nav className="nav">
          <a href="#home"><FaHome /> Home</a>
          <a href="#about"><FaInfoCircle /> About</a>
          <a href="#services"><FaServicestack /> Services</a>
          <a href="#contact"><FaEnvelope /> Contact</a>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${isSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* SIDEBAR LOGO */}
        <div className="sidebar-logo">
          <img src={logo} alt="Sidebar Logo" />
        </div>

        <nav className="sidebar-nav">
          <a href="#home" onClick={() => setIsSidebarOpen(false)}>
            <FaHome /> Home
          </a>
          <a href="#about" onClick={() => setIsSidebarOpen(false)}>
            <FaInfoCircle /> About
          </a>
          <a href="#services" onClick={() => setIsSidebarOpen(false)}>
            <FaServicestack /> Services
          </a>
          <a href="#contact" onClick={() => setIsSidebarOpen(false)}>
            <FaEnvelope /> Contact
          </a>
        </nav>
      </div>

      {/* OVERLAY */}
      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Header;
