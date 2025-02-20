import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../assets/EvaImages/homepage-tall.jpg";
import ReviewCarousel from "../components/ReviewCaro";
import background from "../assets/EvaImages/evabackground.png";
import ContactForm from "../components/ContactForm";
import IntroCaro from "../components/IntroCaro";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-top-container">
        {/* Animated Text - Appears from behind above */}
        <motion.div
  className="home-text-content"
  initial={{ y: "-50px", opacity: 0 }} // Start above
  animate={{ y: 0, opacity: 1 }} // Move into view
  transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.5 }}
>
  <h3>Wilkommen </h3>
  <h4>bei Eva Kluge</h4>
  <p>
    Ihrer Ansprechpartnerin für die asiatischen Behandlungsmethoden
    Shiatsu und Jin Shin Jyutsu.
    <br />
    Stärken Sie Ihre Gesundheit und Ihr körperliches Wohlbefinden!
  </p>
</motion.div>
        <img src={background} alt="" className="home-pic" />
      </div>

      <div className="home-bottom-container">
        {/* Animated Headshot - Comes from the left */}
        <motion.img
          src={img1}
          alt="Headshot of Eva Kluge"
          className="eva-long"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.5 }}
        />

        {/* Animated Text Box */}
        <motion.div
          className="home-text-box"
          initial={{ x: "100vw", opacity: 0 }} // Start from the right
          animate={{ x: 0, opacity: 1 }} // Slide into view
          transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.5 }}
        >
          <h2>Ihre Reise zu mehr Wohlbefinden beginnt hier</h2>
          {/* Animated paragraph */}
          <motion.p
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.7 }}
          >
            Meine Leidenschaft gilt der Gesunderhaltung des Menschen. <br />
            Ich unterstütze Sie darin, Ihren Körper besser wahrzunehmen, damit
            Sie Ihre Gesundheit in die eigene Hand nehmen und Ihre
            Selbstheilungskräfte aktivieren können.
          </motion.p>

          {/* Button with the same animation */}
          <motion.button
            className="about-button"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 25, delay: 1 }}
          >
            <Link to="/about">Mehr über mich</Link>
          </motion.button>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="kontact-form-container"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, delay: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Review Carousel */}
      <div className="review-caro-home">
        <h4>Was sagen andere?</h4>
        <ReviewCarousel />
      </div>
      <div className="home-bottom-caro">
      <IntroCaro/>
      </div>
      
    </div>
  );
};

export default Home;
