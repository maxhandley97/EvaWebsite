import React, { useState, useEffect } from "react";
import "../styling/ReviewCaro.css";

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
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

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
          <p className="review-quote">"{review.quote}"</p>
          <p className="review-initial">- {review.initial}</p>
        </div>
      ))}
      <button className="review-button-prev" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="review-button-next" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

export default ReviewCarousel;
