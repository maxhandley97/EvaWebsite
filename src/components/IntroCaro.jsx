import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fb1 from "../assets/EvaImages/1.png";
import fb2 from "../assets/EvaImages/2.png";
import fb3 from "../assets/EvaImages/3.png";
import fb4 from "../assets/EvaImages/4.png";
import fb5 from "../assets/EvaImages/5.png";
import Loading from "./Loading"; // Import Loading component
import "./IntroCaro.css";

const IntroCaro = () => {
  const images = [fb1, fb2, fb3, fb4, fb5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    let loadedImages = 0;
    
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          setIsLoading(false);
        }
      };
    });
  }, [images]);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);
  
      return () => clearInterval(interval);
    }
  }, [isLoading, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) return <Loading />; // Show loading component until images are ready

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
        <motion.div 
          className="title-row"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }} 
        >
          <h1>Willkommen <br /></h1>
          <h5>
            bei Eva Kluge, Ihrer Ansprechpartnerin für asiatische
            Gesundheitsmethoden wie Shiatsu und Jin Shin Jyutsu. <br /> 
            Finden Sie Ihre Stärken und verbessern Sie Ihre Gesundheit und das Wohlfühlen im Körper!
          </h5>
          <Link to="/contact" className="carousel-button">Kontakt</Link>
        </motion.div>
      </div>
      
      <button className="carousel-button-prev" onClick={prevSlide}>&#8592;</button>
      <button className="carousel-button-next" onClick={nextSlide}>&#8594;</button>
    </div>
  );
};

export default IntroCaro;
