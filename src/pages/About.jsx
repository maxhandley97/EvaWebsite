import '../styling/about.css';
import ImageCarousel from '../components/ImageCarousel';
import fb1 from '../assets/EvaImages/CARDS/1.png';
import fb2 from '../assets/EvaImages/CARDS/2.png';
import fb3 from '../assets/EvaImages/CARDS/3.png';
import fb4 from '../assets/EvaImages/CARDS/4.png';
import fb5 from '../assets/EvaImages/CARDS/5.png'

//Sections:

// My Background: Life history, family influences (healthcare background, sports).
// Training and Certifications: Detailed list of Eva’s training in Shiatsu, Jin Shin Jyutsu, and Aikido.
// Philosophy: A personal reflection on Eva’s approach to healing and her practice.


const About = () => {
  const imageArray = [fb1, fb2, fb3, fb4];
  return (
    <div className='article'>

      <div className='container1'>
      <div className='ubermich'>
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
      </div>
      <div className="carousel-wrapper">
            <ImageCarousel images={imageArray} />
      </div>
      </div>

    <div className='container2'>
      <h2>Ausbuildung</h2>
      <div className="ex">
  <div className="item">
    <h5>Shiatsu seit 1979:</h5>
    <p>Ausbildung in der Methode von Namikoshi bei LiIli Reiser, bei Wataru Ohashi und seinen Kursen in Berlin, bei Yoshi Myashita und seinen Kursen in Utrecht, Niederlande, bei der Schule für Zen-Shiatsu in Berlin bei Ulrike Schmidt und Cornelia Elbel.</p>
  </div>
  <div className="item">
    <h5>Jin Shin Jyutsu seit 2003:</h5>
    <p>Ausbildung bei Frau Gunne von Richthofen in Hamburg.</p>
  </div>
  <div className="item">
    <h5>Ki-Aikido seit 1988:</h5>
    <p>Hier steht für mich die Wahrnehmung der eigenen Bewegungsmöglichkeiten, die Kunst des harmonischen Bewegens, der Kontakt mit dem Partner, das Finden einer gemeinsamen Bewegung auch bei Konflikten im Vordergrund.</p>
  </div>
</div>
</div>

     
    </div>
    
  );
};

export default About;
