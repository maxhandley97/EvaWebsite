import React from 'react'
import './Behandlung.css'
import high5 from "../assets/EvaImages/low6.jpg"
import AnimatedList from '../components/AnimatedList'
import low3 from "../assets/EvaImages/low3.jpg"


const shiatsuList = [
    'Kopf-, Rücken- und Kreuzschmerzen', 
    'Menstruations- und Wechseljahresbeschwerden', 
    'Muskelverspannungen', 
    'Gelenkschmerzen', 
    'Schlafstörungen'
  ];
  
  const jinShinList = [
    'Bedürfnis nach tiefer Entspannung',
    'Unterstützung bei der Heilung von chronischen Problemen'
  ];

const Behandlung = () => {
  return (
    <div className=''>
        <div className='behandlung-top'>
            <div className='behandlung-top-image'>
                        <img src={high5} alt="" />
            </div>
            <div className='behandlung-heading'>
                <h2>Behandlungsmethode: <br />Shiatsu</h2>
                
            </div>
        </div>
        <div className='behandlung-content'>
            <div className='b-shiatsu-top'>
                <div className='b-border-box'>
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
                </div>
                <div className='b-list-kinder'>
                    <div className='b-list-box'>
                    <AnimatedList title="Indikationen für Shiatsu" items={shiatsuList} />
                    </div>
                    <div className='b-kinder'><h4>Shiatsu kann sowohl bei Kindern als auch bei Erwachsenen angewendet werden.</h4></div>
                    <div className='ablauf'>
                <h3>Ablauf der Shiatsu Behandlung</h3>
                <p>
                    Die Behandlung findet traditionell am bekleideten Körper auf Bodenmatten statt, bei Bedarf
                    kann eine Massageliege benutzt werden. <br /> <br />Vorher findet ein kurzes Vorgespräch statt, damit
                    bei der Massage individuell auf Ihre Bedürfnisse eingegangen werden kann. <br /> <br /> Am Ende der
                    Behandlung zeige ich Ihnen einzelne Dehnübungen oder einfache Drucktechniken, die Sie zu
                    Hause anwenden können, um den Erfolg der Behandlung fortzusetzen.
                </p>
            </div>
                    
                </div>

                
                
            </div>
            <div className='b-middle'>
                    <img className='b-middle-pic' src={low3} alt="" />
                    <h2 className='jin-shin-heading'>Behandlungsmethode: <br /> Jin Shin Jitsu</h2>
            </div>
            <div className='jin-shin'>
                <div className='jin-text'>
                    <h3>
                    Jin-Shin-Jyutsu <br />(japanisches Heilströmen)
                    </h3>
                    <p>
                    Jin-Shin-Jyutsu beruht ebenfalls auf der asiatischen Meridianlehre. Mit den Händen werden
                    Akkupunkturpunkte auf den Meridianlinien gehalten, um die Selbstheilungskräfte und den
                    Energiefluss im Körper anzuregen. <br /> <br />
                    Die Behandlung findet traditionell am bekleideten Körper auf einer Massageliege statt. Am
                    Ende der Behandlung zeige ich Ihnen einzelne Übungen für zu Hause, damit Sie Ihre
                    Gesundheit selbst weiter unterstützen können.
                    </p>
                </div>
            <div className='jin-check'>
            <AnimatedList  title="Indikationen für Jin Shin Jyutsu" items={jinShinList}/>
            </div>
            </div> 
            
        </div>

    </div>
  )
}

export default Behandlung