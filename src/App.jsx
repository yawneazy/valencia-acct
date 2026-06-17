import { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
// import Pricing from './components/Pricing.jsx';
import About from './components/About.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>

    <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              {/* <Pricing /> */}
              <About />
              {/* <Connect /> */}
            </>
          }
        />

      {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;