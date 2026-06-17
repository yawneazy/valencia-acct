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

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
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
      <div className="footer-content">

        {/* LEFT SIDE */}
        <div className="footer-left">
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

          <p className="mission-text">
            At Valencia Accounting & Bookkeeping, we empower individuals and businesses
            to take control of their financial future with clarity and confidence.
          </p>

          <hr className="footer-divider" />
          <div className="social-icons">
            <a href="https://www.instagram.com/valenciafinancial/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/gabrielle-brosnan-1752a823a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="footer-right">
          <form id="consultation-form" onSubmit={handleSubmit}>
            <h2>Get in touch!</h2>
            <p className="footer-form-sub">We'll get back to you within one business day.</p>

            <div className="name-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
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
              <p className="form-status error">Something went wrong. Please try again or email us directly.</p>
            )}
          </form>
        </div>

      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Valencia Financial Group. All rights reserved.{" "}
          <NavLink to="/privacypolicy">Privacy Policy</NavLink> ·{" "}
          <NavLink to="/terms">Terms of Use</NavLink>
        </span>
        <p className="built-by">Built by <a href="https://madeforurl.com">MadeForURL LLC</a></p>
      </div>
    </footer>
  );
}