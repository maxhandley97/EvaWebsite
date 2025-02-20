import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fb1 from "../assets/EvaImages/low2.jpg";
import fb2 from "../assets/EvaImages/low5.jpg";
import fb3 from "../assets/EvaImages/low4.jpg";
import fb4 from "../assets/EvaImages/high5.png";
import fb5 from "../assets/EvaImages/low3.jpg";
import "./IntroCaro.css";

const IntroCaro = ({ onFirstImageLoad }) => {
  const images = [fb1, fb2, fb3, fb4, fb5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  // Load the first image first
  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = images[0];
    firstImg.onload = () => {
      setFirstImageLoaded(true);
      if (onFirstImageLoad) onFirstImageLoad(); // Notify parent that the first image is loaded
    };

    // Load remaining images in the background
    images.slice(1).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images, onFirstImageLoad]);

  // Auto-switch slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

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

  if (!firstImageLoaded) return null; // Hide carousel until first image loads

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
      
      
      <button className="carousel-button-prev" onClick={prevSlide}>&#8592;</button>
      <button className="carousel-button-next" onClick={nextSlide}>&#8594;</button>
    </div>
  );
};

export default IntroCaro;
