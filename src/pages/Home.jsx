import React from 'react';
import './Home.css';
import IntroCaro from '../components/IntroCaro';
import img1 from '../assets/EvaImages/profile.png'
import ReviewCarousel from '../components/ReviewCaro'

const Home = () => {

  return (
    <div className='home-container'>
      <div className='top-container'>
      <section className="intro-text">
        
        <div className="text-content">
        </div>
      </section>
      <IntroCaro />
      
      </div> 

      <div className="bottom-container">
  <div className="title-row">
    <h2>Meine Schwerpunkte</h2>
    <img src={img1} alt="Headshot of Eva Kluge" />
  </div>
  <div className="text-boxes">
    <div className="text-box">
      <p>Meine Leidenschaft gilt dem Wohlfühlen im eigenen Körper. <br /> Ich möchte Menschen darin unterstützen, Ihren Körper besser wahrzunehmen und zu empfinden und damit ihre Gesundheitskompetenz zu stärken und Stress besser zu bewältigen.</p>
      <p>Beim Behandeln sind meine Hände die Werkzeuge. Ich arbeite mit den Diagnose- und Behandlungsmöglichkeiten des Shiatsu und des Jin Shin Jyutsu. Bei Bedarf zeige ich Druckpunkte für die Selbstbehandlung und Meridian-Dehnübungen.</p>
    </div>
  </div>
</div>
<div className='review'>
  <ReviewCarousel/>
</div>



    </div>
  );
};

export default Home;
