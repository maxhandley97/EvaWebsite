import React from 'react';
import './Contact.css';
import ContactForm from '../components/ContactForm'
import headshot from "../assets/EvaImages/profile.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className='contact-l'>
      <div className='blessing' id="blessing">

          <h3>Einladung zur Praxiseinweihung</h3>

          <p>
            Ich lade herzlich zur Einweihung meiner neuen Praxis ein.
          </p>
          
          <p className='strong-text'>
            <strong>Dienstag, 17. März 2026<br/>
            18 – 20 Uhr</strong>
          </p>

          <p><em>
            Es gibt eine Einführung in meine Arbeit, <strong>Gutscheine </strong>und einen kleinen Umtrunk mit Knabbereien.</em>
          </p>

          <p>
            Ich freue mich über eine kurze Anmeldung.
          </p>

          </div>
        <div className='c-contact'>
        <ContactForm/>
        </div>
      </div>
       
      <div className='info-con'>
        <h2 className="contact-title">Kontakt</h2>
        <div className="contact-details modern">
  <div className="praxis praxis-left">
    <h3>Heilpraktikerin <br />Eva Kluge</h3>
    <p>
    
      Horstweg 32,
      14059 Berlin <br />
      U-Bahn Sophie-Charlotte-Platz
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
      andere Zeiten nach Vereinbarung, auch samstags
    </p>
  </div>



  </div>

        </div>
       
    </div>
  );
};

export default Contact;
