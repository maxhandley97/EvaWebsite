import '../styling/Home.css';
import IntroCaro from '../components/IntroCaro';

const Home = () => {

  return (
    <div className='home-container'>
      <h2>Willkommen</h2>
      <div className='top-container'>
      <section className="intro-text">
        
        <div className="text-content">
        </div>
      </section>
      <IntroCaro />
      
      </div> 

      <div className='bottom-container'>
      </div>
      <div className="carousel-wrapper">
            <section className="intro">
       
        <h2>Meine Schwerpunkte</h2>
          <div className="text-content">
            <p>Meine Leidenschaft gilt dem Wohlfühlen im eigenen Körper. Ich möchte Menschen darin unterstützen, Ihren Körper besser wahrzunehmen und zu empfinden und damit ihre Gesundheitskompetenz zu stärken und Stress besser zu bewältigen.</p>
            <p>Meine Anliegen ist es, Ihre Verspannungen zu lösen und dadurch Ihre Schmerzen zu lindern, damit Sie Ihre Bewegungsfreiheit wieder erlangen und Haltungsfehler korrigieren können.</p>
            <p>Dabei habe ich verschiedene Möglichkeiten der asiatischen Behandlungs- und Bewegungskunst als sehr effektiv kennen und schätzen gelernt: Ich praktiziere seit 1979 Shiatsu, seit 1988 Aikido und seit 2003 Jin Shin Jyutsu.</p>
            <p>
            Beim Behandeln sind meine Hände die Werkzeuge. Ich arbeite mit den Diagnose- und Behandlungsmöglichkeiten des Shiatsu und des Jin Shin Jyutsu. Bei Bedarf zeige ich Druckpunkte für die Selbstbehandlung und Meridian-Dehnübungen.

            </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;
