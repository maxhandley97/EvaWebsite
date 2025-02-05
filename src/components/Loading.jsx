import React from "react";
import "./Loading.css"; // Import the CSS file

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Business Banner */}
      <img 
        src="/path-to-your-banner.jpg" 
        alt="Business Banner" 
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
