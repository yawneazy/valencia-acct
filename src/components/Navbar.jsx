import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

// logos
import valenciaAcctLogo from '../images/main-logo-no-bckrd.jpg';
import valenciaAcctDarkModeLogo from '../images/dark-mode-logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`header ${isHome ? "home" : "not-home"}`}>

      <div className="nav-container">

        {/* LEFT SIDE (logo + links) */}
        <div className="nav-left">

          {/* Logo */}
          <a href="#home" className="logo-container">
  <picture>
    <source
      srcSet={valenciaAcctDarkModeLogo}
      media="(prefers-color-scheme: dark)"
    />
    <img
      className="main-logo"
      src={valenciaAcctLogo}
      alt="logo"
    />
  </picture>
</a>

          {/* Nav Links */}
          <nav className="nav-links">
            {/* <a href="#home">Home</a> */}
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>

        </div>

        {/* RIGHT SIDE (CTA + hamburger) */}
        <div className="nav-right">

          <div className="request-consultation-btn">
            <button>Request a Consultation</button>
          </div>

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <div className="nav-group">
          {/* <a href="#home" onClick={() => setMenuOpen(false)}>Home</a> */}
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>

      </div>

    </header>
  );
}