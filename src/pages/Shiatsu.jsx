import React from 'react';
import stretch from '../assets/EvaImages/tall2.jpg';
import './Shiatsu.css';
import ReviewCarousel from '../components/ReviewCaro.jsx'

const Shiatsu = () => {
  return (
    <div className="article">
      <h1>Methoden und Wirkung</h1>
      <div className="content">
        {/* Left Section */}
        <div className="text-sections">
        <div className="text">
            <h3>Was ist Shiatsu?</h3>
            <p>
              Shiatsu ist eine wohltuende und gesundheitsfördernde Druckpunktmassage auf Grundlage
              der asiatischen Medizin, kombiniert mit westlichen Massagegriffen und
              physiotherapeutischen Übungen. Beim Berühren, Abtasten des Körpers werden
              Verhärtungen, Verspannungen spürbar, die man laut östlicher Medizin auch als
              Aufstauungen des Ki oder Ungleichgewicht der Lebensenergie bezeichnet.
            </p>
            <p>
              Entlang der Meridianlinien (Energiebahnen) werden Akupunkturpunkte mit Fingerdruck
              (shi = Finger, atsu = Druck), Handflächendruck und Dehnung bearbeitet. Dadurch werden
              Ihre Energieströme harmonisiert und Ihre Selbstheilungskräfte angeregt.
            </p>
            <ul>
              <li>Kopf-, Rücken- und Kreuzschmerzen</li>
              <li>Menstruations- und Wechseljahresbeschwerden</li>
              <li>Muskelverspannungen</li>
              <li>Gelenkschmerzen</li>
              <li>Schlafstörungen</li>
            </ul>
          </div>
          <div className="text">
            <h3>Indikationen für Shiatsu:</h3>
            <p>
              Die Massage hilft, zu einer inneren Ausgeglichenheit zu kommen, Stress besser zu
              bewältigen und damit der Entstehung von Krankheiten vorzubeugen. Es ist bei zahlreichen
              Beschwerden wirksam, wie zum Beispiel:
            </p>
            <ul>
              <li>Kopf-, Rücken- und Kreuzschmerzen</li>
              <li>Menstruations- und Wechseljahresbeschwerden</li>
              <li>Muskelverspannungen</li>
              <li>Gelenkschmerzen</li>
              <li>Schlafstörungen</li>
            </ul>
            <p>
              Shiatsu ist für jede Altersgruppe geeignet, sowohl für junge Sportler, als auch Senioren,
              sogar bei Kindern kann es angewendet werden, da der Druck nach Bedarf von leicht bis
              intensiv variiert werden kann.
            </p>
          </div>
          
        </div>
        {/* Right Section */}
        <img src={stretch} alt="Stretch example" className="image" />
      </div>
      {/* Next Article */}
      <div className='behandlung'>
            <h2>Behandlung</h2>
            <div className='behandlung-text'>
              <div>
                <h3>Shiatsu</h3>
                <p>Die Behandlung findet traditionell am bekleideten Körper auf Bodenmatten statt, bei Bedarf
                kann auch eine Massageliege benutzt werden. Am Ende der Behandlung zeige ich Ihnen
                einzelne Dehnübungen oder einfache Drucktechniken, die Sie zu Hause anwenden können,
                um den Erfolg der Behandlung fortzusetzen.
                </p>
              </div>
              <div>
                <h3>Jin-Shin-Jyutsu (japanisches Heilströmen)</h3>
                <p>Jin-Shin-Jyutsu beruht ebenfalls auf der asiatischen Meridianlehre. Entlang der
                  Meridianlinien werden die Akkupunkturpunkte gehalten, um die Selbstheilungskräfte zu
                  aktivieren und den Energiefluss im Körper anzuregen. Dies führt zu tiefer Entspannung und
                  ist insbesondere wirksam, um die Heilung von zahlreichen chronischen Problemen oder
                  stumpfen Verletzungen anzuregen.
                  Die Behandlung findet traditionell am bekleideten Körper auf einer Massageliege statt.</p>
              </div>
            </div>
          
        </div>
       
         
        
    </div>
  );
};

export default Shiatsu;


          

  