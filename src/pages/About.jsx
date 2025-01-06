import React from 'react';

//Sections:

// My Background: Life history, family influences (healthcare background, sports).
// Training and Certifications: Detailed list of Eva’s training in Shiatsu, Jin Shin Jyutsu, and Aikido.
// Philosophy: A personal reflection on Eva’s approach to healing and her practice.


const About = () => {
  return (
    <div className='article'>
      <h2>Über mich</h2>
      <p>
        Aus einer Arztfamilie stammend war Gesundheit seit meiner Kindheit immer ein wichtiges Thema.
        Mein Vater war klassischer Hausarzt, meine Mutter dagegen der Naturheilkunde zugetan und achtete auf gesunde Ernährung.
        Alle Ferien und Wochenenden wurden sportlich verbracht.
      </p>
      <p>
        Im ersten Beruf wurde ich Grundschulehrerin mit den Schwerpunkten Geschichte und Theaterpädagogik, auch hier war die Verbindung von Bewegung und Lernen mein Ziel.
      </p>
      <p>
        Im zweiten Beruf wurde ich Heilpraktikerin und widmete mich der naturheilkundlichen und asiatischen Gesundheitslehre:
      </p>
      <ul>
        <li><strong>Shiatsu seit 1979:</strong> Ausbildung in der Methode von Namikoshi bei LiIli Reiser, bei Wataru Ohashi und seinen Kursen in Berlin, bei Yoshi Myashita und seinen Kursen in Utrecht, Niederlande, bei der Schule für Zen-Shiatsu in Berlin bei Ulrike Schmidt und Cornelia Elbel.</li>
        <li><strong>Jin Shin Jyutsu seit 2003:</strong> Ausbildung bei Frau Gunne von Richthofen in Hamburg.</li>
        <li><strong>Ki-Aikido seit 1988:</strong> Hier steht für mich die Wahrnehmung der eigenen Bewegungsmöglichkeiten, die Kunst des harmonischen Bewegens, der Kontakt mit dem Partner, das Finden einer gemeinsamen Bewegung auch bei Konflikten im Vordergrund.</li>
      </ul>
    </div>
  );
};

export default About;
