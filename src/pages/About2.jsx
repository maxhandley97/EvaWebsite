import React from "react";
import { motion } from "framer-motion";
// Import useNavigate
import "./About2.css";
import Timeline2 from '../components/Timeline2';

import tall from "../assets/EvaImages/TallLow.jpg";

const Home = () => {
  // Initialize navigate function

  return (
    <div className="home-container">
      <div className="about-img">
        <img src="" alt="" />
      </div>

      <div className="home-below">
        <motion.div 
          className='home-timeline'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h4>Über Mich</h4>
          <Timeline2 animationDelay={1} />
        </motion.div>

        <motion.img 
          className="eva-long" 
          src={tall} 
          alt="" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .7 }}
        />
      </div>
    </div>
  );
};

export default Home;
