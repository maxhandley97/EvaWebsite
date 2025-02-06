import React from "react";
import "./Loading.css"; // Import the CSS file
import banner from '../assets/EvaImages/banner.png'

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Business Banner */}
      <img 
        src={banner} 
        alt={banner}
        className="loading-banner"
      />

      {/* Three Bouncing Dots */}
      <div className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading;
