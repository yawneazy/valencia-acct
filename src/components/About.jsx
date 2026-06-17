import React, { useEffect } from 'react';
import '../styles/About.css';
import gabbyHeadShot from '../images/gabby-home-headshot.jpg';

 function About() {
    return (

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
    );
 }
 export default About;