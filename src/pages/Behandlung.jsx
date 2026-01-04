import React from 'react'
import './Behandlung.css'
import AnimatedList from '../components/AnimatedList'
import low3 from "../assets/EvaImages/low3.jpg"
import evabeach from "../assets/EvaImages/eva-beach.jpg"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import ReviewCaro from "../components/ReviewCaro"
import low6 from "../assets/EvaImages/low6.jpg"
import low9 from "../assets/EvaImages/low9.jpg"
import low4 from "../assets/EvaImages/low4.jpg"
import ShiatsuSticker from '../components/ShiatsuSticker'


const offerShiatsu = ['Haben Sie öfter Rückenschmerzen nach der Arbeit?',
  'Können Ihre Kinder manchmal schlecht einschlafen?']

const wasErwartet = ['Einführung in die Grundlagen des Shiatsu',
  'Praktische Massagegriffe speziell für den Rücken',
  'Kleine Gruppengröße für individuelles Lernen'
]

const shiatsuList = [
  'Kopf- und Rückenschmerzen', 
  'Stress-Symptome',
  'Schlafstörungen',
  'Muskelverspannungen', 
  'Gelenkschmerzen',
  'Verklebung von Faszien',
  'Stärkung des Immunsystems',
  'Gesundheitsprophylaxe'
]

const jinShinList = [
  'Bedürfnis nach tiefer Entspannung',
  'Unterstützung bei der Heilung von chronischen Problemen',
  'Gesundheitsprophylaxe'
]

const faszienZiele = [
  'Mobilisieren der Faszien',
  'Verbesserung der Haltung',
  'Hydration des Gewebes',
  'Verbesserte Beweglichkeit'

];


const faszienFuerWen = [
  'Sportler',
  'Büroangestellte',
  'Senioren',
  'Alle, die beweglich bleiben wollen'
];

const Behandlung = () => {
  const navigate = useNavigate()

  return (
    <div className=''>

      {/* --- Hero Section --- */}
      <div className="home-top-container">
        <motion.div
          className="home-text-content"
          initial={{ y: "-50px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.2 }}
        >
          <h3>Willkommen</h3>
          <h4>bei Eva Kluge</h4>
          
          <p className='home-p'>
            Ihrer Ansprechpartnerin für die asiatischen Behandlungsmethoden
            Shiatsu und Jin Shin Jyutsu.
            <br />
            Stärken Sie Ihre Gesundheit und Ihr körperliches Wohlbefinden!
          </p>
        

          <motion.button
            onClick={() => navigate("/contact")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Kontakt
          </motion.button>
          <div className="offers-container">
            <ShiatsuSticker />

            <div className='new-offer'>
              <motion.div
                className="offer-box"
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.8 }}
                onClick={() => {
                  const section = document.getElementById("faszien");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <h4>Neuer Kurs:</h4>
                <p>
                  <strong>Faszientraining – Fit ins neue Jahr</strong><br />
                  Lockerung – Dehnung – Kräftigung<br />
                  für mehr Beweglichkeit<br />
                  Aktueller Kurs <br/>
                  <em>Montags 19.15–20.15 Uhr · ab 5.1.2026</em>
                </p>
              </motion.div>
            </div>
          </div>

         
        </motion.div>

        <motion.img 
          src={evabeach} 
          alt="" 
          className="home-pic" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
        />
      </div>

      {/* --- Title Section --- */}
      <div className='home-title'>
        <div className='home-title-box'>
          <h3>Behandlungsmethoden</h3>
        </div>
      </div>

      {/* --- Shiatsu Section --- */}
      <div className='behandlung-content'>
        <div className='b-shiatsu-top'>

          <div className='text-img'>
            <div className='b-shiatsu-text'>
              <h3>Shiatsu</h3>
              <h4>(japanische Fingerdruckmassage)</h4>
              <p>
                Shiatsu <em><i>(„Fingerdruck“)</i></em> ist eine wohltuende und gesundheitsfördernde Druckpunktmassage.
                <br />
                Die Massage basiert auf der Grundannahme der fernöstlichen Medizin, dass die Lebensenergie (Ki) in Energiekanälen, den sogenannten Meridianen fließt. 
                <br /><br />
                Gesundheitliche Dysbalancen werden mit einem blockierten Fluss der Lebensenergie erklärt. Diese Blockierungen zeigen sich als Verhärtungen, Verspannungen und Schmerzen. 
                Bei der Behandlung wird entlang der Meridiane mit den Händen, Daumen, Ellenbogen und Knien gearbeitet, um die Energieströme zu harmonisieren und Spannungen zu lösen. 
                <br />
                Dadurch wird die Körperwahrnehmung sowie die innere Ausgeglichenheit und Vitalität des Klienten gefördert. 
              </p>
            </div>  
            <img src={low6} alt="" />
          </div>

          <div className='top-r-side'>
            <div className='b-list-box'>
              <AnimatedList title="Indikationen für Shiatsu" items={shiatsuList} />
            </div>
            <div className='ablauf'>
              <h2>Shiatsu kann sowohl bei Kindern als auch bei Erwachsenen angewendet werden.</h2>
              <p>
                <strong>Die Behandlung</strong> findet traditionell am bekleideten Körper auf Bodenmatten statt, bei Bedarf
                kann eine Massageliege benutzt werden.
                <br /><br />
                Vorher findet ein kurzes Vorgespräch statt, damit bei der Massage individuell auf Ihre Bedürfnisse eingegangen werden kann.
                <br /><br />
                Am Ende der Behandlung zeige ich Ihnen einzelne Dehnübungen oder einfache Drucktechniken, die Sie zu
                Hause anwenden können, um den Erfolg der Behandlung fortzusetzen.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- Image Break --- */}
      <div className='b-middle'>
        <img className='b-middle-pic' src={low3} alt="" />
      </div>
            {/* --- Faszienkurse Section --- */}
     
            <div className='faszien' id='faszien'>
              {/* Title */}
              <div className='faszien-title'>
                <h3>Fit durch Faszientraining</h3>
              </div>

              {/* Subtitle */}
              <div className='faszien-subtitle'>
                <h4>Die Grundlage für schmerzfreie Bewegung.</h4>
              </div>

              <div className='faszien-text'>

                {/* Left AnimatedList */}
                <div className='faszien-lists left'>
                  <AnimatedList title={'Ziele:'} items={faszienZiele} />
                </div>

                {/* Text box */}
                <div className='aktueller-box'>
                  <h4>Zeit</h4>

                  <div className="course-table">
                    <div className="row">
                      <span className="label">Termine</span>
                      <span className="value">
                        5.1. | 12.1. | 19.1. | 26.1. | 2.2. | 9.2.
                      </span>
                    </div>

                    <div className="row">
                      <span className="label">Uhrzeit</span>
                      <span className="value">19.15–20.15 Uhr</span>
                    </div>

                    <div className="row">
                      <span className="label">Preis</span>
                      <span className="value">
                        Schnupperstunde (5.1.): 5 €<br />
                        Ganzer Kurs: 50 €
                      </span>
                    </div>
                  </div>

                  <hr />

                  <p>
                    <strong>Wo:</strong><br />
                    Berliner Schule für Zen Shiatsu<br />
                    Wittelsbacher Str. 17<br />
                    (U-Bahn Konstanzer Straße)<br />
                    10711 Berlin
                  </p>

                  <p>
                    <strong>Was:</strong> Entdecke die Kraft deiner Faszien – dein unsichtbares Netz, das Bewegung flüssig macht.
                  </p>

                  <p>
                    <strong>Warum:</strong> Faszien-Training stärkt das Bindegewebe, verbessert Beweglichkeit und löst Verspannungen.
                  </p>

                  <p>
                    <strong>Weil:</strong> Faszien umhüllen alle Muskeln und Muskelfasern.  
                    Sie haben mehr Schmerzrezeptoren als die Muskeln. Ohne Bewegung verkleben sie,  
                    bewegliche Faszien helfen Muskelfaserrissen vorzubeugen.
                  </p>
                  <p><strong>Registrierung:</strong> <br /> <strong>Email:</strong> evakluge.praxis@yahoo.com <br />
                    <strong>Phone:</strong> 0174 53 99 457
                  </p>
                </div>


                {/* Right AnimatedList */}
                <div className='faszien-lists right'>
                  <AnimatedList title={'Für wen:'} items={faszienFuerWen} />
                </div>

              </div>




      </div>
      <div className="section-line"></div>

      <div className='shiatsu' id='shiatsu'>
        <div className='shiatsu-title'>
          <h3>
            <span className='shiatsu-highlight'>Shiatsu-Kurs:</span>
           
          </h3>
          <h4> Rückenmassage für Einsteiger</h4>
          <p className='shiatsu-subtitle'>
            Fr. 7.11. und 14.11.25, 17.30–19.30 Uhr, 60.- €
          </p>
        </div>

        <div className='shiatsu-text'>
          {/* Left list */}
          <div className='shiatsu-lists left'>
          <AnimatedList title={'Ist dieser Kurs richtig für Sie?'} items={offerShiatsu} />
          </div>

          {/* Center info box */}
          <div className='shiatsu-box'>
            <h4>Shiatsu Rückenmassage: <br />Entspannung lernen & weitergeben</h4>
            <p>In diesem Kurs zeige ich Ihnen, wie Sie mit einfachen Shiatsu-Techniken Rückenschmerzen lindern und echte Tiefenentspannung schenken können – für sich selbst oder andere.</p>
            <p>Shiatsu ist eine japanische Druckmassage, sie wirkt stresslösend, ausgleichend & belebend – perfekt gegen den Alltagsstress. Keine Vorkenntnisse erforderlich. Alleine oder zu zweit buchbar.</p>

            <div className='shiatsu-info'>
              <p><strong>📍 Ort:</strong> Berliner Schule für Zen Shiatsu
              <br/> Wittelsbacher Str. 17
              (U-Bahn Konstanzer Straße)</p>
              <p><strong>📅 Termine:</strong> Sa 31.1.26 · 10.30–13 Uhr <br />
                So 1.2.26 · 10.30–13 Uhr</p>
              <p><strong>💶 Kosten:</strong> 75.-</p>
              <p><strong>!!! Anmeldung:</strong> Anmeldung bis 24.1.26</p>
            </div>

            <p className='shiatsu-cta'>
              Jetzt anmelden & Rückenwohl verschenken – an sich selbst oder andere!<br />
              📞  0174 53 99 457
              <br />
              📧 evakluge.praxis@yahoo.com<br />
              🌐 evaklugeshiatsuberlin.com
            </p>
          </div>

          {/* Right list */}
          <div className='shiatsu-lists right'>
          <AnimatedList title={'Was Sie erwartet:'} items={wasErwartet} />
            
          </div>
        </div>
      </div>

      <div className="section-line"></div>

      {/* --- Jin Shin Jyutsu Section --- */}
      <div className='jin-shin'>
        <div className='jin-text'>
          <h3>
            Jin-Shin-Jyutsu <br />
            (japanisches Heilströmen)
          </h3>
          <p>
            Jin-Shin-Jyutsu beruht ebenfalls auf der asiatischen Meridianlehre. Mit den Händen werden
            Akupunkturpunkte auf den Meridianlinien gehalten, um die Selbstheilungskräfte und den
            Energiefluss im Körper anzuregen.
            <br /><br />
            <strong>Die Behandlung</strong> findet traditionell am bekleideten Körper auf einer Massageliege statt. 
            Am Ende der Behandlung zeige ich Ihnen einzelne Übungen für zu Hause, damit Sie Ihre
            Gesundheit selbst weiter unterstützen können.
          </p>
        </div>
        <div className='jin-check'>
          <AnimatedList title="Indikationen für Jin Shin Jyutsu" items={jinShinList}/>
        </div>
      </div> 

    
      {/* --- Reviews Section --- */}
      <div className='home-bottom-review'>
        <div className='box-b-review'>
          <img src={low9} alt="" className="side-image" />
          <div className='center-review'>
            <h3>Was sagen Klienten dazu:</h3>
            <div className='review-div'>
              <ReviewCaro />
            </div>  
          </div>
          <img src={low4} alt="" className="side-image2" />
        </div>
      </div>

      

    </div>
  )
}

export default Behandlung
