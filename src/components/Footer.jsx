import React, { useState } from "react";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import valenciaAcctLogo from "../images/main-logo-no-bckrd.jpg";
import valenciaAcctDarkModeLogo from '../images/dark-mode-logo.png';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        console.error("Failed to send:", result.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <footer className="footer" id="contact">

      {/* TOP: heading + form side by side */}
      <div className="footer-top">
        <div className="footer-top-inner">

          {/* LEFT */}
          <div className="footer-left">
            <h2 className="footer-heading">Request a free consultation</h2>
            <p className="footer-subtext">
              No pressure, no jargon — just clarity on where you stand financially.
            </p>
            <div className="trust-signals">
              <p className="trust-item">✓ Response within one business day</p>
              <p className="trust-item">✓ Free initial consultation</p>
            </div>
          </div>

          {/* RIGHT: form */}
          <form className="footer-form" id="consultation-form" onSubmit={handleSubmit}>
            <div className="name-row">
              <div className="form-group">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name *"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Anything we should know?"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="submit-btn-container">
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </div>

            {status === "success" && (
              <p className="form-status success">Thanks! We'll be in touch within one business day.</p>
            )}
            {status === "error" && (
              <p className="form-status error">Something went wrong. Please try again.</p>
            )}
          </form>

        </div>
      </div>

      {/* BOTTOM: logo, mission, socials, copyright */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-top">
            <a href="#home" className="logo-container">
              <picture>
                <source srcSet={valenciaAcctDarkModeLogo} media="(prefers-color-scheme: dark)" />
                <img className="footer-logo" src={valenciaAcctLogo} alt="Valencia Financial Group logo" />
              </picture>
            </a>
            <p className="mission-text">
              At Valencia Accounting & Bookkeeping, we empower individuals and businesses
              to take control of their financial future with clarity and confidence.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/valenciafinancial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/gabrielle-brosnan-1752a823a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Valencia Financial Group. All rights reserved.{" "}
              <NavLink to="/privacypolicy">Privacy Policy</NavLink> ·{" "}
              <NavLink to="/terms">Terms of Use</NavLink>
            </span>
            <p className="built-by">Built by <a href="https://madeforurl.com">MadeForURL LLC</a></p>
          </div>
        </div>
      </div>

    </footer>
  );
}