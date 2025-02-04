import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import IntroCaro from "../components/IntroCaro";
import img1 from "../assets/EvaImages/profile.png";
import ReviewCarousel from "../components/ReviewCaro";

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-container">
        <section className="intro-text">
          <div className="text-content"></div>
        </section>
        <IntroCaro />
      </div>

      <div className="bottom-container">
        {/* Animated title row - slides in from the left */}
        <motion.div 
          className="title-row"
          initial={{ x: "-100vw", opacity: 0 }}  // Start from off-screen left
          animate={{ x: 0, opacity: 1 }}        // Animate to normal position
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }} // Smooth animation
        >
          <h2>Meine Schwerpunkte</h2>
          <img src={img1} alt="Headshot of Eva Kluge" />
        </motion.div>

        <div className="text-boxes">
        <div className="text-box">
            {/* First paragraph slides in from the right */}
            <motion.p
              initial={{ x: "100vw", opacity: 0 }}  // Start off-screen (right)
              animate={{ x: 0, opacity: 1 }}       // Always animate when the page loads
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.7 }} 
            >
              Meine Leidenschaft gilt dem Wohlfühlen im eigenen Körper. <br /> 
              Ich möchte Menschen darin unterstützen, Ihren Körper besser wahrzunehmen 
              und zu empfinden und damit ihre Gesundheitskompetenz zu stärken und 
              Stress besser zu bewältigen. 
            </motion.p>

            <motion.p
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1 }} 
              className="second-paragraph"  // Add a custom class
            >
              Beim Behandeln sind meine Hände die Werkzeuge. Ich arbeite mit den Diagnose- 
              und Behandlungsmöglichkeiten des Shiatsu und des Jin Shin Jyutsu. 
              Bei Bedarf zeige ich Druckpunkte für die Selbstbehandlung und Meridian-Dehnübungen.
            </motion.p>
          </div>

        </div>
      </div>

      <div className="review">
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Home;
