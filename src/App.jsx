import { useState, useEffect } from 'react'
import './App.css'
import valenciaAcctLogo from './images/main-logo-no-bckrd.jpg'
import gabbyHeadShot from './images/gabby-home-headshot.jpg'
import instagramIcon from './images/IG-icon.png'

function App() {
  
  useEffect(() => {
    // Wait for React to finish rendering
    setTimeout(() => {
      const acc = document.querySelectorAll(".accordion");
  
      acc.forEach((accordion) => {
        accordion.onclick = () => {
          accordion.classList.toggle("active");
          const panel = accordion.nextElementSibling;
  
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        };
      });
    }, 0);
  }, []);  

  return (
    <>
    <header>
      <div className="header">
      <div className="logo-nav-container">
        <div className="logo-container">
        <img className="main-logo" src={valenciaAcctLogo} alt="valencia-acct-logo"/>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="request-consultation-btn">
        <button>Request a Consultation</button>
      </div>
      </div>
    </header>
    <main>
      <section className="main-bio">
      <h1 className="company-title">Conquer your biggest financial hear;
Get clarify. Get confidence. </h1>
  
    
      </section>
    {/* <section className="problems-solutions">
  <div className="problem-solution">
    <p className="problem">"I don't know where all my money is going."</p>
    <p className="solution">Precision Bookkeeping: Gain clarity and control with perfectly organized records...</p>
  </div>

  <div className="problem-solution">
    <p className="problem">"I'm terrified of making a mistake on my taxes."</p>
    <p className="solution">Strategic Tax Preparation: Maximize deductions and ensure full compliance...</p>
  </div>

  <div className="problem-solution">
    <p className="problem">"I spend more time on receipts than on running my business."</p>
    <p className="solution">Expert Accounting Services: Free up your valuable time by delegating...</p>
  </div>

  <div className="problem-solution">
    <p className="problem">"I need official documents quickly and correctly notarized."</p>
    <p className="solution">Convenient Notary Public Services: Swift and reliable certification...</p>
  </div>
</section> */}


      
<h1>Our Services</h1>
<section className="accordions">
  <button className="accordion">Tax Preparation & Planning</button>
  <div className="panel">
  <p>
  We ensure accurate and timely filing while proactively seeking strategies 
  to minimize your tax liability.
</p>

<ul>
  <li>
    <strong>Individual Tax Preparation (Form 1040):</strong> Comprehensive preparation for all income levels and complexities, including investment income, rental properties, and itemized deductions.
  </li>

  <li>
    <strong>Business Tax Preparation:</strong> Filing for corporations (S-Corp, C-Corp), partnerships, LLCs, and sole proprietorships (Forms 1120, 1120-S, 1065, Schedule C).
  </li>

  <li>
    <strong>Tax Planning & Strategy:</strong> Year-round consultation to structure your finances, investments, and business activities to legally reduce tax obligations.
  </li>

  <li>
    <strong>IRS and State Audit Representation:</strong> Professional representation and correspondence with tax authorities for audits, notices, and payment plans.
  </li>

  <li>
    <strong>Sales and Use Tax Filing:</strong> Preparation and submission of required state and local sales tax reports for businesses.
  </li>
</ul>

  </div>

  <button className="accordion">Business Accounting & Bookkeeping</button>
  <div className="panel">
  <p>
  Our core accounting services provide a clear, real-time picture of your financial performance, 
  allowing you to make better business decisions.
</p>

<ul>
  <li>
    <strong>Monthly/Quarterly Bookkeeping:</strong> Recording transactions, reconciling bank accounts, and ensuring the general ledger is accurate and up-to-date.
  </li>

  <li>
    <strong>Financial Statement Preparation:</strong> Generating essential reports, including Profit & Loss Statements and Balance Sheets, for internal review and external reporting.
  </li>

  <li>
    <strong>Payroll Services:</strong> Managing payroll processing, payroll tax calculations, filing of quarterly and annual payroll forms (941, W-2, 1099), and compliance.
  </li>

  <li>
    <strong>Accounting System Setup:</strong> Assisting with the initial setup and customization of accounting software (e.g., QuickBooks) for new businesses.
  </li>
</ul>

  </div>

  <button className="accordion">Business Advisory & Consulting</button>
  <div className="panel">
  <p>
  We act as a trusted advisor to help guide your business's financial future and optimize its structure and performance.
</p>

<ul>
  <li>
    <strong>Business Formation & Entity Selection:</strong> Guidance on choosing the optimal legal structure (LLC, S-Corp, Partnership) for tax efficiency and liability protection.
  </li>

  <li>
    <strong>Financial Analysis:</strong> Reviewing business performance metrics, identifying trends, and advising on profitability and cost management.
  </li>

  <li>
    <strong>Business Budgeting and Forecasting:</strong> Developing actionable operating budgets and financial projections to support business growth and secure financing.
  </li>
</ul>

  </div>

  <button className="accordion">Personal Financial Services</button>
  <div className="panel">
  <p>
  We offer dedicated consulting to help individuals gain control of their money, reduce debt, and build a strong foundation for their financial future.
</p>

<ul>
  <li>
    <strong>Holistic Financial Planning:</strong> Creating a comprehensive plan covering short-term goals, long-term retirement savings, and risk management.
  </li>

  <li>
    <strong>Personal Budgeting and Cash Flow Management:</strong> Establishing effective spending plans and tracking methods to optimize monthly savings and meet financial goals.
  </li>

  <li>
    <strong>Debt Payoff Strategy:</strong> Developing tailored strategies (e.g., avalanche or snowball) to efficiently eliminate consumer debt, student loans, and mortgages.
  </li>

  <li>
    <strong>Financial Literacy Training:</strong> Providing one-on-one education on fundamental topics like credit scores, investing basics, and insurance needs.
  </li>
</ul>

  </div>

  <button className="accordion">Professional Notary Services</button>
  <div className="panel">
  <p>
  As certified Notary Publics, we offer prompt and reliable service for verifying identity and witnessing signatures on legal documents.
</p>

<ul>
  <li>
    <strong>Document Witnessing and Certification:</strong> Serving as an impartial witness for signing legal documents.
  </li>

  <li>
    <strong>Oaths and Affirmations:</strong> Administering legal oaths and affirmations.
  </li>

  <li>
    <strong>Certifying Power of Attorney (POA) Documents:</strong> Officially verifying signatures on power of attorney agreements.
  </li>

  <li>
    <strong>Real Estate Documents:</strong> Notarization of deeds, loan documents, and closing papers.
  </li>
</ul>

  </div>
</section>
<div className="bio-content">
      <img className="home-bio-photo" src={gabbyHeadShot} alt="gabby-head-shot"/>
      <div className="bio-text">
      {/* <h1 className="company-title">Valencia Financial Group</h1> */}
        <p><strong>Gabrielle Valencia Brosnan</strong> is an accomplished CTEC-licensed professional 
          with a Bachelor's degree in Accounting. She brings <strong>10 years of intensive, 
          hands-on experience</strong> in tax preparation and accounting to her clients, providing
          expert and efficient financial solutions.</p>
          </div>
          </div>
    </main>
    <footer>
      <div className="right-footer-content">
    <img className="main-logo" src={valenciaAcctLogo} alt="valencia-acct-logo"/>
      <div className='mission-statement'>
               <p>At Valencia Accounting & Bookkeeping, our mission is to empower 
          individuals and businesses to take control of their financial 
          futures. We leverage our expertise in accounting to help individuals
          create effective budgets, manage and reduce debt, and provide clarity 
          on their financial position. For businesses, we offer comprehensive 
          financial guidance and preparation to ensure sound decision-making and 
          growth. Additionally, we provide expert tax preparation services for 
          both personal and corporate entities, helping our clients navigate the 
          complexities of taxes while ensuring long-term financial stability and 
          success.</p> 
      </div>
      <img className="social-icons" src={instagramIcon} alt=""/>
      </div>
     {/*  <form id="consultation-form">
        <h2>Get in touch!</h2>
        <label for = "first-name">First Name<span class="required">*</span></label>
        <input id="first-name" name="first-name" type="text" />

        <label for = "first-name">Last Name<span class="required">*</span></label>
        <input id="first-name" name="first-name" type="text" />

        <label for = "email">Email<span class="required">*</span></label>
        <input id="email" name="email" type="text" />

        <label for = "message">Message<span class="required">*</span></label>
        <input id="message" name="message" type="text" />

        <div className="submit-btn-container">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    */}
    </footer>
    </>
  )
}

export default App
