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
          src="https://www.google.com/maps?q=Berliner+Schule+für+Zen+Shiatsu,+Wittelsbacher+Str.+17,+Berlin&output=embed"
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
