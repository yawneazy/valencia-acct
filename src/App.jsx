import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { FaFileInvoiceDollar, FaBookOpen, FaChartLine, FaWallet, FaStamp } from "react-icons/fa";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import gabbyHeadShot from './images/gabby-home-headshot.jpg';

function App() {
  // const [activeCard, setActiveCard] = useState(null);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <FaFileInvoiceDollar />,
      title: "Tax Preparation & Planning",
      description: "We ensure accurate and timely filing while proactively minimizing your tax liability.",
      details: [
        "Individual Tax Preparation (Form 1040)",
        "Business Tax Preparation (S-Corp, LLC, etc.)",
        "Tax Planning & Strategy",
        "IRS & State Audit Representation",
        "Sales and Use Tax Filing"
      ]
    },
    {
      icon: <FaBookOpen />,  
      title: "Business Accounting & Bookkeeping",
      description: "Gain a real-time understanding of your business finances.",
      details: [
        "Monthly / Quarterly Bookkeeping",
        "Financial Statements (P&L, Balance Sheet)",
        "Payroll Services",
        "Accounting System Setup (QuickBooks, etc.)"
      ]
    },
    {
      icon: <FaChartLine />, 
      title: "Business Advisory & Consulting",
      description: "Make smarter business decisions with financial clarity.",
      details: [
        "Business Formation & Entity Selection",
        "Financial Analysis",
        "Budgeting & Forecasting"
      ]
    },
    {
      icon: <FaWallet />, 
      title: "Personal Financial Services",
      description: "Build a strong financial foundation and eliminate debt.",
      details: [
        "Financial Planning",
        "Budgeting & Cash Flow Management",
        "Debt Payoff Strategy",
        "Financial Literacy Coaching"
      ]
    },
    {
      icon: <FaStamp />, 
      title: "Professional Notary Services",
      description: "Fast, reliable notarization for important documents.",
      details: [
        "Document Witnessing",
        "Oaths & Affirmations",
        "Power of Attorney",
        "Real Estate Documents"
      ]
    }
  ];

  return (
    <Router>
      <Navbar />

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 className="hero-title">
              Conquer your biggest financial fears.
            </h1>

            <p className="hero-subtext">
              Get clarity. Get confidence. Build financial peace of mind with
              <span> Valencia Financial Group.</span>
            </p>

            <div className="hero-actions">
              <button className="cta-button">
                Request a Consultation
              </button>

              <a href="#services" className="secondary-link">
                Explore Services ↓
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <h1 className="services-title">Our Services</h1>

          <div className="services-panel">
            <div className="services-list">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`services-list-item ${activeService === index ? "active" : ""}`}
                  onClick={() => setActiveService(index)}
                >
                   <span className="svc-icon">{service.icon}</span>
                  {service.title}
                </div>
              ))}
            </div>

            <div className="services-detail">
            <h3>{services[activeService].icon} {services[activeService].title}</h3>
              {/* <h3>{services[activeService].title}</h3> */}
              <p>{services[activeService].description}</p>
              <ul>
                {services[activeService].details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {/* <button className="svc-cta">Request a Consultation</button> */}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bio-content" id="about">
          <img
            className="home-bio-photo"
            src={gabbyHeadShot}
            alt="Gabby Valencia Brosnan"
          />

          <div className="bio-text">
            <h2>About Valencia Financial Group</h2>

            <p>
              <strong>Gabrielle Valencia Brosnan</strong> is a CTEC-licensed professional
              with a Bachelor’s degree in Accounting and over 10 years of experience
              in tax preparation and accounting.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </Router>
  );
}

export default App;