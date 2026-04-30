import React, { useState } from "react";
import "../styles/Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import valenciaAcctLogo from "../images/main-logo-no-bckrd.jpg";

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later you’ll send this to email/backend
  };

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img
            className="footer-logo"
            src={valenciaAcctLogo}
            alt="Valencia Accounting Logo"
          />

          <p className="mission-text">
            At Valencia Accounting & Bookkeeping, we empower individuals and businesses
            to take control of their financial future with clarity and confidence.
            {/* // We leverage our expertise in accounting to help individuals
//     create effective budgets, manage and reduce debt, and provide clarity 
//     on their financial position. For businesses, we offer comprehensive 
//     financial guidance and preparation to ensure sound decision-making and 
//     growth. Additionally, we provide expert tax preparation services for 
//     both personal and corporate entities, helping our clients navigate the 
//     complexities of taxes while ensuring long-term financial stability and 
//     success. */}
          </p>

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

            <div className="name-row">

<div className="form-group">
  <label htmlFor="firstName">First Name *</label>
  <input
    id="firstName"
    name="firstName"
    type="text"
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
    value={formData.lastName}
    onChange={handleChange}
  />
</div>

</div>

            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="submit-btn-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </footer>
  );
}