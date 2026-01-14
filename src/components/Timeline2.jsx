import React, { useEffect, useState } from "react";
import "./Timeline2.css";

const timelineData = [
  { title: "Wie alles begann", description: "Aus einer Arztfamilie stammend war Gesundheit seit meiner Kindheit ein wichtiges Thema. Mein Vater war klassischer Hausarzt, meine Mutter war der Naturheilkunde zugetan und achtete auf gesunde Ernährung. Alle Ferien und Wochenenden wurden sportlich verbracht." },
  { title: "Beruflicher Werdegang", description: "Parallel zu meinem Beruf als passionierte Grundschullehrerin erwarb ich die Qualifikation zur Heilpraktikerin und befasste mich mit verschiedenen Aspekten der Naturheilkunde und der asiatischen Gesundheitslehre." },
  {
    title: "Seit 1979 Shiatsu",
    description:
      "In der Methode von Namikoshi und Masunaga bei meinen Lehrern: Wataru Ohashi, Pamela Ferguson, Yoshi Myashita, Ulrike Schmidt, Cornelia Elbel (Schule für Zen-Shiatsu in Berlin), Mike Mandl (mit Shiatsu in Krisen begleiten), Meike Lucht (Faszien im Shiatsu) und Oskar Peter (Shiatsu bei Krebs)."
  },
  { title: "2000 Heilpraktikerin", description: "" },
  {
    title: "Seit 2003 Jin Shin Jyutsu",
    description: "Bei Frau Gunne von Richthofen in Hamburg."
  }
];

const Timeline = ({ animationDelay = 0 }) => {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const startAnimation = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
      }, 4000);

      return () => clearInterval(interval);
    }, animationDelay * 1000); // Convert delay to milliseconds

    return () => clearTimeout(startAnimation);
  }, [animationDelay]);

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item"
          style={{
            animationDelay: `${index * 2 + animationDelay}s`, // Start after home-timeline delay
          }}
        >
          <div className="timeline-dot-and-content">
            <div
              className={`timeline-dot ${animationIndex >= index ? "explode" : ""}`}
            ></div>
            <div
              className={`timeline-content ${animationIndex >= index ? "fade-in" : ""}`}
              style={{
                animationDelay: `${index * 2 + 1 + animationDelay}s`,
              }}
            >
              <h3 className={animationIndex >= index ? "fade-in-title" : ""}>
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
