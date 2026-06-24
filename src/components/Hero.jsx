import React, { useEffect } from 'react';
import '../styles/Hero.css';
 
function Hero() {
    return (
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
                    {/* <button className="cta-button">
                        Request a Consultation
                    </button> */}
                              <div className="cta-btn">
           <a href="#contact" className="cta-button"> Request a Consultation</a>
          </div>

                    <a href="#services" className="secondary-link">
                        Explore Services ↓
                    </a>
                    </div>
                </div>
        </section> 
    );
}
export default Hero;