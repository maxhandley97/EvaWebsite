
//Sections:

// My Background: Life history, family influences (healthcare background, sports).
// Training and Certifications: Detailed list import fb3 from '../assets/EvaImages/3.png';of Eva’s training in Shiatsu, Jin Shin Jyutsu, and Aikido.
// Philosophy: A personal reflection on Eva’s approach to healing and her practice.

import React from 'react';
import './About.css';
import oil from '../assets/EvaImages/massage-oil.jpg'
import headshot from '../assets/EvaImages/profile.png'

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


      <section className='background'>
        <h2>Lebenslauf</h2>
        <p>
          Aus einer Arztfamilie stammend war Gesundheit seit meiner Kindheit immer ein wichtiges Thema.
          Mein Vater war klassischer Hausarzt, meine Mutter dagegen der Naturheilkunde zugetan und achtete auf gesunde Ernährung.
          Alle Ferien und Wochenenden wurden sportlich verbracht.
        </p>
        <p>
          Im ersten Beruf wurde ich Grundschulehrerin mit den Schwerpunkten Geschichte und Theaterpädagogik, auch hier war die Verbindung von Bewegung und Lernen mein Ziel.
          Im zweiten Beruf wurde ich Heilpraktikerin und widmete mich der naturheilkundlichen und asiatischen Gesundheitslehre:
        </p>
      </section>

      {/* Training and Certifications Section */}
      <section className='training'>
        <h2>Ausbildung</h2>
        <ul className='training-list'>
          <li className='training-item'>
            <h5>Shiatsu seit 1979:</h5>
            <p>
              Ausbildung in der Methode von Namikoshi bei Lili Reiser, bei Wataru Ohashi und seinen Kursen in Berlin, 
              bei Yoshi Myashita und seinen Kursen in Utrecht, Niederlande, bei der Schule für Zen-Shiatsu in Berlin 
              bei Ulrike Schmidt und Cornelia Elbel.
            </p>
          </li>
          <li className='training-item'>
            <h5>Jin Shin Jyutsu seit 2003:</h5>
            <p>Ausbildung bei Frau Gunne von Richthofen in Hamburg.</p>
          </li>
          <li className='training-item'>
            <h5>Ki-Aikido seit 1988:</h5>
            <p>
              Hier steht für mich die Wahrnehmung der eigenen Bewegungsmöglichkeiten, die Kunst des harmonischen Bewegens, 
              der Kontakt mit dem Partner, das Finden einer gemeinsamen Bewegung auch bei Konflikten im Vordergrund.
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
