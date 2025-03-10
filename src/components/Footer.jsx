import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail} from 'lucide-react'; // Icons from lucide-react
import './Footer.css';
import banner1 from '../assets/EvaImages/Eva-Banner3.png'
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate(); 
  return (
    <footer>
      <div className="footer">
        <div className="left-container">
          <img src={banner1} alt="Banner" className="banner" />
          <div className="left-bottom">
            <div className='footer-but'>
            <button onClick={() => navigate("/contact")}>Kontakt</button>


            </div>
           
            <div className="contact-item">
              <Phone className="icon" />
              <a href="tel:01745399457">0174 53 99 457</a>
            </div>
            <div className="contact-item">
              <Mail className="icon" />
              <a href="mailto:evakluge.praxis@yahoo.com">evakluge.praxis@yahoo.com</a>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7623.572619340567!2d13.287802159250777!3d52.4988528843438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f8a28ff998f%3A0xcbba913254d14980!2sBe%20Your%20Star%20Fitnesscoaching%20-%20Sandra%20M%C3%BCller!5e0!3m2!1sen!2sau!4v1737066928452!5m2!1sen!2sau"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className="bottom">
        <p>
          <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutzerklärung</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
