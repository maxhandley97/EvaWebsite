import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-carousel">
      <div className="image-container" onClick={handleClick}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="carousel-image"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
