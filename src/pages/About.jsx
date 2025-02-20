
//Sections:

// My Background: Life history, family influences (healthcare background, sports).
// Training and Certifications: Detailed list import fb3 from '../assets/EvaImages/3.png';of Eva’s training in Shiatsu, Jin Shin Jyutsu, and Aikido.
// Philosophy: A personal reflection on Eva’s approach to healing and her practice.

import React from 'react';
import './About.css';
import oil from '../assets/EvaImages/stock/massage-oil.jpg'
import headshot from '../assets/EvaImages/profile.png'
import Timeline from '../components/Timeline.jsx'

const About = () => {
  return (
    <article className='about-page'>
      {/* My Background Section */}
      <div className='intro-image'>
        <img src={oil} alt="Oil image" className="about-background-image" />
        <div className="about-content">
          <div className="about-top-right">
          <img src={headshot} alt="Headshot" className="about-headshot" />
            <h2>Über Mich</h2>
          </div>
          <h5>Erfahren Sie mehr über die Frau hinter der Kunst des Shiatsu.</h5>
        </div>
      </div>




      {/* Training and Certifications Section */}
      <Timeline/>
          
      

    </article>
  );
};

export default About;
