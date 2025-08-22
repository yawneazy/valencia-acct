import { useState } from 'react'
import './App.css'
import valenciaAcctLogo from './images/valencia-acct-logo.png'

function App() {

  return (
    <>
    <header>
      <div className="header">
        <div className="logo-container">
        <img className="main-logo" src={valenciaAcctLogo} alt="valencia-acct-logo"/>
        </div>
        <nav>
          <ul>
            <li><a href="#meettheteam">Meet the Team</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </div>
      <div className="request-consultation-btn">
        <button>Request a Consultation</button>
      </div>
    </header>
    <main>
      <section className="main-services-info">
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
      </section>

      <section className="cards">
        <article className="card">
          <h3>Bookkeeping/Accounting</h3>
          <p>We offer a range of packages that can pair well on all aspects of your 
            company's accounting needs along with any additional needs. </p>
        </article>

        <article className="card"> 
          <h3>Notary</h3>
          <p>We assure the parties of a transaction that a document is authentic, 
            and can be trusted. This includes of vetting, certifying and 
            record-keeping.</p>
        </article>
        
        <article className="card">
          <h3>Personal Finance</h3>
          <p>We assist our clients with their own finances such as helping with 
            budgeting, learning how to get out of debt, and balancing accounts. </p>
        </article>

        <button className="see-all-services-btn"> See All Services</button>
      </section>
    </main>
    <footer>
      <form id="consultation-form">
        <h2>Get in touch!</h2>
        <label for = "first-name">First Name<span class="required">*</span></label>
        {/* required */}
        <input id="first-name" name="first-name" type="text" />

        <label for = "first-name">Last Name<span class="required">*</span></label>
        {/* required */}
        <input id="first-name" name="first-name" type="text" />

        <label for = "email">Email<span class="required">*</span></label>
        {/* required */}
        <input id="email" name="email" type="text" />

        <label for = "message">Message<span class="required">*</span></label>
        {/* required */}
        <input id="message" name="message" type="text" />

        <div className="submit-btn-container">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </footer>
    </>
  )
}

export default App
