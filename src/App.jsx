import { useState } from 'react'
import './App.css'
import valenciaAcctLogo from './images/main-logo-no-bckrd.jpg'

function App() {

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
        <p>Gabrielle Valencia Brosnan is an accomplished CTEC-licensed professional 
          with a Bachelor's degree in Accounting. She brings 10 years of intensive, 
          hands-on experience in tax preparation and accounting to her clients, providing
          expert and efficient financial solutions.</p>
      </section>
<h1>Our Services</h1>
      <section className="cards">
        <article className="card">
          <h3>Tax Preparation & Planning</h3>
          <p>We ensure accurate and timely filing while proactively seeking strategies
             to minimize your tax liability</p>
        </article>

        <article className="card"> 
          <h3>Business Accounting & Bookkeeping</h3>
          <p>Our core accounting services provide a clear, real-time picture of your financial performance, allowing you to make better business decisions</p>
        </article>
        
        <article className="card">
          <h3>Business Advisory & Consulting</h3>
          <p>Our core accounting services provide a clear, real-time picture of your financial performance, allowing you to make better business decisions</p>
        </article>

        <article className="card">
          <h3>Personal Financial Services</h3>
          <p>We offer dedicated consulting to help individuals gain control of their money, reduce debt, and build a strong foundation for their financial future</p>
        </article>

        <article className="card">
          <h3>Professional Notary Services</h3>
          <p>As certified Notary Publics, we offer prompt and reliable service for verifying identity and witnessing signatures on legal documents</p>
        </article>

      </section>
    </main>
    <footer>
    <img className="main-logo" src={valenciaAcctLogo} alt="valencia-acct-logo"/>
      <div className='footer-container'>
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
