import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Timeline2 from '../components/Timeline2'
import evabeach from "../assets/EvaImages/eva-beach.jpg";
import tall from "../assets/EvaImages/TallLow.jpg"
import ReviewCaro from "../components/ReviewCaro"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top-container">
        <motion.div
          className="home-text-content"
          initial={{ y: "-50px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.2 }}
        >
          <h3>Wilkommen </h3>
          <h4>bei Eva Kluge</h4>
          <p>
            Ihrer Ansprechpartnerin für die asiatischen Behandlungsmethoden
            Shiatsu und Jin Shin Jyutsu.
            <br />
            Stärken Sie Ihre Gesundheit und Ihr körperliches Wohlbefinden!
          </p>
          <motion.a 
            href="/contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button>Kontakt</button>
          </motion.a>
        </motion.div>
        
        <motion.img 
          src={evabeach} 
          alt="" 
          className="home-pic" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
        />
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
      <div className="review-caro">
        <h4>Was sagen Andere?</h4>
        <ReviewCaro/>
      </div>
    </div>
  );
};

export default Home;
