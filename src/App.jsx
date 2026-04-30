import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import gabbyHeadShot from './images/gabby-home-headshot.jpg';

function App() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <Router>
      <Navbar />

      <main>

        {/* ================= HERO ================= */}
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

        {/* ================= SERVICES ================= */}
        <section className="services" id="services">
          <h1>Our Services</h1>

          <div className="services-grid">

            {/* TAX */}
            <div className="service-card" onClick={() => toggleCard(1)}>
              <h3>Tax Preparation & Planning</h3>

              {openCard === 1 && (
                <div className="card-details">
                  <p>
                    We ensure accurate and timely filing while proactively seeking strategies to minimize your tax liability.
                  </p>

                  <ul>
                    <li>Individual Tax Preparation (Form 1040)</li>
                    <li>Business Tax Preparation (S-Corp, LLC, etc.)</li>
                    <li>Tax Planning & Strategy</li>
                    <li>IRS & State Audit Representation</li>
                    <li>Sales and Use Tax Filing</li>
                  </ul>
                </div>
              )}
            </div>

            {/* BOOKKEEPING */}
            <div className="service-card" onClick={() => toggleCard(2)}>
              <h3>Business Accounting & Bookkeeping</h3>

              {openCard === 2 && (
                <div className="card-details">
                  <p>
                    Our core accounting services provide a clear, real-time picture of your financial performance.
                  </p>

                  <ul>
                    <li>Monthly / Quarterly Bookkeeping</li>
                    <li>Financial Statements (P&L, Balance Sheet)</li>
                    <li>Payroll Services</li>
                    <li>Accounting System Setup (QuickBooks, etc.)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* ADVISORY */}
            <div className="service-card" onClick={() => toggleCard(3)}>
              <h3>Business Advisory & Consulting</h3>

              {openCard === 3 && (
                <div className="card-details">
                  <p>
                    We help guide your business decisions with financial clarity and strategy.
                  </p>

                  <ul>
                    <li>Business Formation & Entity Selection</li>
                    <li>Financial Analysis</li>
                    <li>Budgeting & Forecasting</li>
                  </ul>
                </div>
              )}
            </div>

            {/* PERSONAL */}
            <div className="service-card" onClick={() => toggleCard(4)}>
              <h3>Personal Financial Services</h3>

              {openCard === 4 && (
                <div className="card-details">
                  <p>
                    Helping individuals build strong financial foundations and reduce debt.
                  </p>

                  <ul>
                    <li>Financial Planning</li>
                    <li>Budgeting & Cash Flow Management</li>
                    <li>Debt Payoff Strategy</li>
                    <li>Financial Literacy Coaching</li>
                  </ul>
                </div>
              )}
            </div>

            {/* NOTARY */}
            <div className="service-card" onClick={() => toggleCard(5)}>
              <h3>Professional Notary Services</h3>

              {openCard === 5 && (
                <div className="card-details">
                  <p>
                    Fast and reliable notarization services for legal and financial documents.
                  </p>

                  <ul>
                    <li>Document Witnessing</li>
                    <li>Oaths & Affirmations</li>
                    <li>Power of Attorney</li>
                    <li>Real Estate Documents</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
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
              in tax preparation and accounting. She helps individuals and businesses
              gain clarity, confidence, and control over their finances.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </Router>
  );
}

export default App;