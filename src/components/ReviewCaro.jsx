import React, { useState, useEffect } from "react";
import "./ReviewCaro.css";

const ReviewCarousel = () => {
  const reviews = [
    {
      quote:
        "Ich habe mich nach der Shiatsu-Behandlung im ganzen Körper sehr belebt und energetisiert gefühlt. Eine sehr angenehme Erfahrung, die ich unbedingt wiederholen möchte.",
      initial: "M",
    },
    {
      quote:
        "Nach der Behandlung habe ich eine ganzkörperliche Entspannung gespürt, wie nach mehreren Saunagängen. Meine sinnliche Wahrnehmung war intensiver. Gerne öfter.",
      initial: "R",
    },
    {
      quote:
        "Ich habe die Kräfte meines eigenen Körper so intensiv gespürt, dass ich danach die Kraft fand, mich aus einer unpassenden Beziehung zu lösen.",
      initial: "E",
    },
    {
      quote:
        "Nach der Behandlung fühle ich mich immer leicht und frei in meinem Körper, ein sehr angenehmes Gefühl.",
      initial: "G",
    },
    {
      quote:
        "Meine Rückenschmerzen waren danach deutlich besser, so hatte ich wieder mehr Energie für meine Kinder.",
      initial: "L",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="review-carousel-container">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="review-slide"
          style={{
            left: `${(index - currentIndex) * 100}%`,
          }}
        >
          <p className="review-quote">&quot;{review.quote}&quot;</p>
          <p className="review-initial">- {review.initial}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCarousel;
