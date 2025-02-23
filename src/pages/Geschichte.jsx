import React from 'react';
import './Geschichte.css';
import low2 from "../assets/EvaImages/low2.jpg";


const Geschichte = () => {
  return (
    <div>
      <div className='geschichte-top'>
        <div className='g-top-pic'>
          <img src={low2} alt="Geschichte" />
        </div>
        <div className='g-heading'>
          <h2>Geschichte der Methoden</h2>
        </div>
      </div>

      <div className='geschichte-content'>
        <div className='geschichte-section'>
          <div className='g-border-box'>
            <div className='geschichte-text'>
              <h3>Shiatsu</h3>
              <p>
                Die Wurzeln des Shiatsu kommen von Tuina, einer medizinischen Massage-Technik aus China und den japanischen Formen des Anma, der traditionellen japanischen Massage. Seit der Einführung des westlichen Gesundheitswesens wurden Anfang des 20. Jahrhunderts verschiedene Formen manueller Behandlungsmethoden unter dem Namen Shiatsu zusammengefasst, um einen Platz im neuen Gesundheitswesen zu erlangen.
                <br /><br />
                Sowohl Tokujiro Namikoshi als auch Tempeki Tamai erweiterten die Behandlungsmethoden mit westlichen physiotherapeutischen Ansätzen und bezogen die Meridianlehre mit ein. Durch Shizuto Masunaga erlebte Shiatsu einen Durchbruch mit der Verbreitung in den USA und Europa. Er baute das Meridianmodell aus, zu dem auch Diagnosepunkte und -bereiche am ganzen Körper gehören. Zu den weiteren großen Lehrern gehört Wataru Ohashi, der auch Kurse in Europa und Berlin gibt.
                <br /><br />
                Seit den 80er Jahren hat sich Shiatsu in Europa etabliert, und in den 90er Jahren wurden in Deutschland mehrere Schulen gegründet, darunter die GSD - Gesellschaft für Shiatsu Deutschland.
              </p>
            </div>
          </div>
        </div>

        <div className='geschichte-section g-bottom-con'>
          <div className='g-border-box g-bottom'>
            <div className='geschichte-text'>
              <h3>Jin Shin Jyutsu</h3>
              <p>
                Jin Shin Jyutsu geht auf den Japaner Jirō Murai zurück. Er hat in einem alten japanischen Geschichtswerk spezielle Meridianpunkte wiederentdeckt, die beim Jin Shin Jyutsu in verschiedenen Abfolgen berührt und gehalten werden, je nachdem, welche Gesundheitsprobleme behandelt werden sollen.
                <br /><br />
                In den Westen gelangte diese Kunst durch seine Schülerin Mary Burmeister in New York.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geschichte;
