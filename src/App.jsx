import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import valenciaAcctLogo from './images/valencia-acct-logo.png'

function App() {

  return (
    <>
    <header>
      <div class="header">
        <div class="logo-container">
        <img class="main-logo" src={valenciaAcctLogo} alt="valencia-acct-logo"/>
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
      <div class="phone-number-container">
        <p>(555)555-5555</p>
      </div>
    </header>
    <main>
      <div class="services-container">

      </div>
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

        <div class="submit-btn-container">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </footer>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
