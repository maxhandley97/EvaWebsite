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
import CourseCard from "../components/CourseCard"
import { courses } from "../data/courses"


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

          <div className="courses-container">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
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
        {/* --- ceremony --- */}
        <div>

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
                  <h4>Faszientraining – Fit durch Bewegung</h4>

                  <p>
                    Entdecke die Kraft deiner Faszien – dein unsichtbares Netzwerk für Beweglichkeit,
                    Stabilität und Schmerzfreiheit.
                  </p>

                  <p>
                    Durch gezielte Übungen lösen wir Verklebungen, verbessern die Haltung und fördern
                    die natürliche Beweglichkeit des Körpers.
                  </p>

                  <hr />

                  <div className="course-table">

                    <div className="row">
                      <span className="label">🕒 Zeit</span>
                      <span className="value">11.30-12.30 Uhr</span>
                    </div>

                    <div className="row">
                      <span className="label">📅 Termine</span>
                      <span className="value">
                     1.6. Hier müssen bitte die neuen Kurszeiten rein , 
29.5. | 5.6. | 12.6. | 19.6. | 26.6. 
11.30-12.30
                      </span>
                    </div>

                    <div className="row">
                      <span className="label">💶 Preis</span>
                      <span className="value">
                        Schnupperstunde: 5 €<br />
                        Ganzer Kurs (10 Termine): 60 €<br />
                        Einzelstunde: 15 €<br />
                        Ermäßigung möglich
                      </span>
                    </div>

                  </div>

                  <hr />

                  <p>
                    <strong>📍 Ort und Anmeldung:</strong><br />
                    Enna Herzraum<br />
                    Seelingstr. 33<br />
                    14059 Berlin
                  </p>

                  <p>
                    <strong>ℹ️ Mehr Infos:</strong><br />
                    Faszien-Training stärkt das Bindegewebe, verbessert Beweglichkeit und löst Verspannungen.<br />
                    Faszien umhüllen alle Muskeln und Muskelfasern – ohne Bewegung verkleben sie.
                  </p>

                  <p>
                    <strong>✉️ Anmeldung:</strong><br />
                    evakluge.praxis@yahoo.com<br />
                    0174 53 99 457
                  </p>
                </div>


                {/* Right AnimatedList */}
                <div className='faszien-lists right'>
                  <AnimatedList title={'Für wen:'} items={faszienFuerWen} />
                </div>

              </div>




      </div>




{/* new area */}



     
      <div className="section-line"></div>

      <div className='shiatsu' id='eltern-shiatsu'>
        <div className='shiatsu-title'>
          <h3>
            <span className='shiatsu-highlight'>Shiatsu-Kurs:</span>
           
          </h3>
          <h4>Shiatsu-Rückenmassage auch für Eltern mit Kindern</h4>
          <p className='shiatsu-subtitle'>
          </p>
        </div>

        <div className='shiatsu-text'>
          {/* Left list */}
          <div className='shiatsu-lists left'>
          <AnimatedList title={'Ist dieser Kurs richtig für Sie?'} items={offerShiatsu} />
          </div>

          {/* Center info box */}
          <div className='shiatsu-box'>
            <h4>
              Shiatsu Rückenmassage: <br />
              Entspannung lernen & weitergeben
            </h4>

            <p>
              In diesem Kurs zeige ich Ihnen, wie Sie mit einfachen Shiatsu-Techniken den Rücken lockern und tiefe Entspannung schenken können.
            </p>

            <p>
              Shiatsu ist eine japanische Druckmassage, sie wirkt stresslösend, ausgleichend & belebend – perfekt gegen den Alltagsstress. 
              Keine Vorkenntnisse erforderlich. Alleine oder zu zweit buchbar.
            </p>

            <div className="shiatsu-info">

              <div className="info-block l-g">
                <p><strong>📅 Wann:</strong></p>

                <table className="date-table">
                  <tbody>
                    <tr>
                      <td>16:30–17:30</td>
                    </tr>
                    <tr>
                      
                      <td>
                        Fr 29.5.2026<br />
                        Fr 5.6.2026<br />
                        Fr 12.6.2026<br />
                        Fr 19.6.2026<br />
                        Fr 26.6.2026
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='r-g'>
                <div className="info-block">
                  <p><strong>📍 Ort und Anmeldung:</strong></p>
                  <p>
                    Enna Herzraum<br />
                    Seelingstr. 33<br />
                    14059 Berlin
                  </p>
                </div>

                <div className="info-block">
                  <p><strong>💶 Kosten:</strong></p>
                  <p>
                   Ganzer Kurs <strong> 60 € </strong> 
                   <br />
                    Einzelstunde 15.-
                    <br />
                    Ermäßigung möglich
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right list */}
          <div className='shiatsu-lists right'>
          <AnimatedList title={'Was Sie erwartet:'} items={wasErwartet} />
            
          </div>
        </div>
      </div>

      <div className="section-line"></div>




            {/* new area!!! */}



      <div className="shiatsu" id="babymassage">

  {/* Title */}
  <div className="shiatsu-title">
    <h3>
      <span className="shiatsu-highlight">Babymassage</span>
    </h3>
    <h4>Nähe und Geborgenheit vermitteln</h4>

    <p className="shiatsu-subtitle">
      ab Fr 29.5.2026, 13:00–14:00 Uhr
    </p>
  </div>

  <div className="shiatsu-text">

    {/* Left list */}
    <div className="shiatsu-lists left">
      <AnimatedList
        title="Für wen ist der Kurs?"
        items={[
          "Eltern mit Babys (0–12 Monate)",
          "Eltern, die Bindung stärken möchten",
          "Babys mit Unruhe oder Schlafproblemen"
        ]}
      />
    </div>

    {/* Center box */}
    <div className="shiatsu-box">

      <h4>
        Babymassage: <br />
        Liebevolle Berührung & Bindung
      </h4>

      <p>
        In diesem Kurs lernen Sie sanfte Massagegriffe, die Ihrem Baby Sicherheit,
        Entspannung und Nähe schenken.
      </p>

      <p>
        Babymassage stärkt die Eltern-Kind-Bindung, unterstützt die Verdauung
        und kann beim Einschlafen helfen.
      </p>

      <div className="shiatsu-info">

        <div className="info-block">
          <p><strong>📅 Wann:</strong></p>

          <table className="date-table">
            <tbody>
              <tr>
                <td>13:00–14:00</td>
              </tr>
              <tr>
                <td>
                  Fr 29.5.2026<br />
                  Fr 5.6.2026<br />
                  Fr 12.6.2026<br />
                  Fr 19.6.2026<br />
                  Fr 26.6.2026
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-block">
          <p><strong>📍 Ort:</strong></p>
          <p>
            Enna Herzraum<br />
            Seelingstr. 33<br />
            14059 Berlin
          </p>
        </div>

        <div className="info-block">
          <p><strong>💶 Kosten:</strong></p>
          <p><strong>50 €</strong> <br />
          Ermäßigung möglich
          </p>
        </div>

      </div>

      <p className="shiatsu-cta">
        <strong>Anmeldung:</strong><br />
        📞 0174 53 99 457<br />
        📧 evakluge.praxis@yahoo.com
      </p>

    </div>

    {/* Right list */}
    <div className="shiatsu-lists right">
      <AnimatedList
        title="Was erwartet Sie?"
        items={[
          "Sanfte Massagegriffe für Babys",
          "Ruhe und Bindung zwischen Eltern & Kind",
          "Anleitung zum sicheren Üben zu Hause"
        ]}
      />
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
