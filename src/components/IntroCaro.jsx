import React from 'react';
import { Link } from 'react-router-dom';
import fb1 from '../assets/EvaImages/1.png';
import fb2 from '../assets/EvaImages/2.png';
import fb3 from '../assets/EvaImages/3.png';
import fb4 from '../assets/EvaImages/4.png';
import fb5 from '../assets/EvaImages/5.png';
import { useState, useEffect } from "react";
import '../styling/IntroCaro.css';

const IntroCaro = () => {
  const images = [
    fb1, fb2, fb3, fb4, fb5
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            backgroundImage: `url(${image})`,
            left: `${(index - currentIndex) * 100}%`,
          }}
        ></div>
      ))}
      <div className="carousel-banner">
        <h1>
          Willkommen <br />
        </h1>
        <h5>bei Eva Kluge, Ihrer Ansprechpartnerin für asiatische
          Gesundheitsmethoden wie Shiatsu und Jin Shin Jyutsu. <br /> Finden Sie Ihre
          Balance und Wohlbefinden im eigenen Körper.</h5>
        <Link to="/contact" className="carousel-button">Kontakt</Link>
      </div>
      <button className="carousel-button-prev" onClick={prevSlide}>&#8592;</button>
      <button className="carousel-button-next" onClick={nextSlide}>&#8594;</button>
    </div>
  );
};

export default IntroCaro;
