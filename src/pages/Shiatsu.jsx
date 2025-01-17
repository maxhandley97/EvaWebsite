import stretch from '../assets/EvaImages/tall2.jpg';
import '../styling/Shiatsu.css';
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
        <ReviewCarousel/>
        <div>
            <h3>Geschichte des Shiastu</h3>
            <p>
                Die Wurzeln des Shiatsu kommen von  Tuina  – einer medizinische Massage-Technik
                aus China – und von den japanischen Formen des Anma, der traditionellen japanischen
                Massage. Seit der Einführung des westlichen Gesundheitswesens wurden Anfang des 20.
                Jahrhunderts verschiedene Formen manueller Behandlungsmethoden unter dem Namen
                Shiatsu zusammengefasst, um einen Platz im neuen Gesundheitswesen zu erlangen.
                Sowohl Tokujiro Namikoshi als auch Tempeki Tamai bauten die Behandlungsmethoden aus,
                um diese im Gesundheitssystem zu etablieren und bezogen die Meridianlehre mit ein.
                Durch Shizuto Masunaga erlebte das Shiatsu einen weiteren Durchbruch mit der Verbreitung
                auch in den USA und Europa. Er baute das Meridianmodell aus, zu dem auch
                Diagnosepunkte und -bereiche am ganzen Körper gehören.
                Zu den weiteren großen Lehrern ist Wataru Ohashi zu nennen, der auch Kurse in Europa und
                Berlin gab. Seit den 80-er Jahren hat sich das Shiatsu in Europa etabliert, seit den 90-er
                Jahren wurden in Deutschland mehrere Schulen gegründet und die GSD - Gesellschaft für
                Shiatsu Deutschland.
                Heutzutage wird Shiatsu sowohl zur Heilung als auch im Wellnessbereich angewandt. In
                Europa wird es an Privatinstituten gelehrt. Da es zum Wesen des Shiatsu gehört,
                verschiedene physiologische Behandlungsrichtungen zu integrieren, entwickelt es sich
                ständig weiter. Es gibt zahlreiche unterschiedliche Richtungen und Schwerpunkte.
                Ich möchte noch Kōichi Tōhei erwähnen, den Begründer des Ki-Aikidō. Er zeigte eine
                Verbindung von Ki-Aikido und Shiatsu. Er entwickelte das an Shiatsu angelehnte Kiatsu, bei
                dem man zur Entspannung verhärteter Muskeln diesen Ki zuführt.
            </p>
          </div>
        
    </div>
  );
};

export default Shiatsu;


          

  