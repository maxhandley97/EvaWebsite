import React from 'react'
import './Behandlung.css'
import AnimatedList from '../components/AnimatedList'
import low3 from "../assets/EvaImages/low3.jpg"
import evabeach from "../assets/EvaImages/eva-beach.jpg";
import { useNavigate } from "react-router-dom"; 
import { motion } from "framer-motion";
import ReviewCaro from "../components/ReviewCaro"
import low6 from "../assets/EvaImages/low6.jpg"
import low9 from "../assets/EvaImages/low9.jpg"
import low4 from "../assets/EvaImages/low4.jpg"

const shiatsuList = [
    'Kopf- und Rückenschmerzen', 
    'Stress-Symptome',
    'Schlafstörungen',
    'Muskelverspannungen', 
    'Gelenkschmerzen',
    'Verklebung von Faszien',
    'Stärkung des Immunsystems',
    'Gesundheitsprophylaxe'
    
  ];
  
  const jinShinList = [
    'Bedürfnis nach tiefer Entspannung',
    'Unterstützung bei der Heilung von chronischen Problemen',
    'Gesundheitsprophylaxe'
  ];

const Behandlung = () => {
    const navigate = useNavigate();
  return (
    <div className=''>
        <div className="home-top-container">
        <motion.div
          className="home-text-content"
          initial={{ y: "-50px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.2 }}
        >
          <h3>Willkommen </h3>
          <h4>bei Eva Kluge</h4>
          <p>
            Ihrer Ansprechpartnerin für die asiatischen Behandlungsmethoden
            Shiatsu und Jin Shin Jyutsu.
            <br />
            Stärken Sie Ihre Gesundheit und Ihr körperliches Wohlbefinden!
          </p>
          <motion.button
            onClick={() => navigate("/contact")} // Navigate to Contact page
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Kontakt
          </motion.button>
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

        <div className='home-title'>
            <div className='home-title-box'>
                <h3>Behandlungsmethoden</h3>
            </div>

        </div>


        <div className='behandlung-content'>
            <div className='b-shiatsu-top'>

                  <div className='text-img'>

                  
                      <div className='b-shiatsu-text'>
                          <h3>
                          Shiatsu
                          </h3>
                          <h4>(japanische Fingerdruckmassage)</h4>
                          <p>Shiatsu <em><i>(„Fingerdruck“)</i></em> ist eine wohltuende und gesundheitsfördernde Druckpunktmassage.
                              <br />Die Massage basiert auf der Grundannahme der fernöstlichen Medizin, dass die Lebensenergie (Ki) in Energiekanälen, den sogenannten Meridianen fließt. 
                              <br /><br /> Gesundheitliche Dysbalancen werden mit einem blockierten Fluss der Lebensenergie erklärt. Diese Blockierungen zeigen sich als Verhärtungen, Verspannungen und Schmerzen. 
                              Bei der Behandlung wird entlang der Meridiane mit den Händen, Daumen, Ellenbogen und Knien gearbeitet, um die Energieströme zu harmonisieren und Spannungen zu lösen. 
                              <br />Dadurch wird die Körperwahrnehmung sowie die innere Ausgeglichenheit und Vitalität des Klienten gefördert. 
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
                            kann eine Massageliege benutzt werden. <br /> <br />Vorher findet ein kurzes Vorgespräch statt, damit
                            bei der Massage individuell auf Ihre Bedürfnisse eingegangen werden kann. <br /> <br /> Am Ende der
                            Behandlung zeige ich Ihnen einzelne Dehnübungen oder einfache Drucktechniken, die Sie zu
                            Hause anwenden können, um den Erfolg der Behandlung fortzusetzen.
                        </p>
                    </div>
                    </div>

                    
                </div>

            </div>




              <div className='b-middle'>
                      <img className='b-middle-pic' src={low3} alt="" />

              </div>
              <div className='jin-shin'>
                  <div className='jin-text'>
                      <h3>
                      Jin-Shin-Jyutsu <br />(japanisches Heilströmen)
                      </h3>
                      <p>
                      Jin-Shin-Jyutsu beruht ebenfalls auf der asiatischen Meridianlehre. Mit den Händen werden
                      Akupunkturpunkte auf den Meridianlinien gehalten, um die Selbstheilungskräfte und den
                      Energiefluss im Körper anzuregen. <br /> <br />
                      <strong>Die Behandlung</strong> findet traditionell am bekleideten Körper auf einer Massageliege statt. Am
                      Ende der Behandlung zeige ich Ihnen einzelne Übungen für zu Hause, damit Sie Ihre
                      Gesundheit selbst weiter unterstützen können.
                      </p>
                  </div>
              <div className='jin-check'>
              <AnimatedList  title="Indikationen für Jin Shin Jyutsu" items={jinShinList}/>
              </div>
              
        </div> 
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