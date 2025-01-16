import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styling/footer.css'; //
import banner from '../assets/EvaImages/banner.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
      <div className='left-container'>
        <div className='top'>
          <img src={banner} alt="" className='banner'/>
          <h4>Tel: 0174 53 99 457</h4>
          <h4>Mail: evakluge.praxis@yahoo.com</h4>
          <p>Nutzen Sie gerne die Möglichkeit, mir eine Mail zu schreiben oder mich anzurufen. Offene Fragen und Termine können wir direkt klären.</p>
        </div>
        
        
      </div>
      <div className='map-container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7623.572619340567!2d13.287802159250777!3d52.4988528843438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f8a28ff998f%3A0xcbba913254d14980!2sBe%20Your%20Star%20Fitnesscoaching%20-%20Sandra%20M%C3%BCller!5e0!3m2!1sen!2sau!4v1737066928452!5m2!1sen!2sau" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" ></iframe>
      </div>
      </div>
      <div className='bottom'>
          <p>
            <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutzerklärung</Link>
          </p>
        </div>
    </footer>

  );
};

export default Footer;
