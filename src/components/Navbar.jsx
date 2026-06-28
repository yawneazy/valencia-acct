import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Navbar.css';

import valenciaAcctLogo from '../images/main-logo-no-bckrd.jpg';
import valenciaAcctDarkModeLogo from '../images/dark-mode-logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${isHome ? "home" : "not-home"}`}>
        <div className="nav-container">

          {/* LEFT SIDE */}
          <div className="nav-left">
            <a href="/" className="logo-container" aria-label="Back to top">
              <picture>
                <source srcSet={valenciaAcctDarkModeLogo} media="(prefers-color-scheme: dark)" />
                <img className="main-logo" src={valenciaAcctLogo} alt="Valencia Financial Group logo" /> 
                {/* <img className="main-logo" src={valenciaAcctLogo} alt="Valencia Financial Group logo" /> */}
              </picture>
            </a>

            <nav className="nav-links">
              <a href="/#services">Services</a>
              <a href="/#about">About</a>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="nav-right">
            <div className="request-consultation-btn">
              <a href="/#contact" className="btn-link">Request a Consultation</a>
            </div>

            <button
  className={`hamburger ${menuOpen ? "open" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
>
  <span className="hamburger-line" />
  <span className="hamburger-line" />
  <span className="hamburger-line" />
</button>
          </div>

        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="nav-group">
          <a href="/#services" onClick={closeMenu}>Services</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#contact" onClick={closeMenu} className="mobile-cta">
            Request a Consultation
          </a>
        </nav>

        <div className="mobile-socials">
          <a href="https://www.instagram.com/valenciafinancial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/gabrielle-brosnan-1752a823a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}