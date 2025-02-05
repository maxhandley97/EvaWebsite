import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakt</h2>
      <div className="contact-details">
        <p>
          <strong>Studio:</strong> Be Your Star<br />
          <strong>Adresse:</strong> Joachim-Friedrichstr. 41, 10711 Berlin<br />
          <strong>Mail:</strong> <a href="mailto:evakluge.praxis@yahoo.com" className="contact-link">evakluge.praxis@yahoo.com</a><br />
          <strong>Telefon:</strong> <a href="tel:+491745399457" className="contact-link">0174 53 99 457</a>
        </p>
      </div>
      <div className="contact-message">
        <p>
          Nutzen Sie gerne die Möglichkeit, mir eine Mail zu schreiben oder mich anzurufen. 
          Offene Fragen und Termine können wir direkt klären.
        </p>
      </div>
    </div>
  );
};

export default Contact;
