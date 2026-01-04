import React from 'react';
import './Contact.css';
import ContactForm from '../components/ContactForm'
import headshot from "../assets/EvaImages/profile.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className='info-con'>
        <h2 className="contact-title">Kontakt</h2>
        <div className="contact-details modern">
  <div className="praxis praxis-left">
    <h3>Praxis .1</h3>
    <p>
      <strong>Berliner Schule für Zen Shiatsu</strong><br />
      Wittelsbacher Str. 17<br />
      (U-Bahn Konstanzer Straße) <br />
      10711 Berlin
    </p>
  </div>

  <div className="contact-center">
    <img src={headshot} alt="Eva Kluge" />

    <p>
      <strong>Mail:</strong><br />
      <a href="mailto:evakluge.praxis@yahoo.com" className="contact-link">
        evakluge.praxis@yahoo.com
      </a>
    </p>

    <p>
      <strong>Telefon:</strong><br />
      <a href="tel:+491745399457" className="contact-link">
        0174 53 99 457
      </a>
    </p>

    <p>
      <strong>Praxiszeiten:</strong><br />
      Mo, Di, Do · 13–18 Uhr<br />
      andere Zeiten nach Vereinbarung
    </p>
  </div>

  <div className="praxis praxis-right">
    <h3>Praxis .2</h3>
    <p>
    <strong>Privat Praxis</strong><br />
      Bautzener Platz 2<br />
      10829 Berlin
    </p>
  </div>


  </div>

        </div>
        <div className='c-contact'>
        <ContactForm/>
        </div>
    </div>
  );
};

export default Contact;
