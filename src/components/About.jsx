import React from 'react';
import '../styles/About.css';
import gabbyHeadShot from '../images/gabby-home-headshot.jpg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-photo-wrap">
          <img
            className="about-photo"
            src={gabbyHeadShot}
            alt="Gabrielle Valencia Brosnan"
          />
        </div>

        <div className="about-text">
          <span className="about-eyebrow">Who we are</span>
          <h2 className="about-heading">About Valencia Financial Group</h2>
          <div className="about-divider" />
          <p className="about-body">
            <strong>Gabrielle Valencia Brosnan</strong> is a CTEC-licensed professional
            with a Bachelor's degree in Accounting and over 10 years of experience
            in tax preparation and accounting.
          </p>
          {/* <div className="about-credentials">
            <div className="credential">
              <span className="credential-value">CTEC</span>
              <span className="credential-label">Licensed</span>
            </div>
            <div className="credential">
              <span className="credential-value">B.S.</span>
              <span className="credential-label">Accounting</span>
            </div>
            <div className="credential">
              <span className="credential-value">10+</span>
              <span className="credential-label">Years Experience</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;