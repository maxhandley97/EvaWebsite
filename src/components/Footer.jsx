import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Footer = () => {
  return (
    <footer>
      <p>© 2025 Eva Kluge: Heilpraktikerin <br></br>Tel: 0174 53 99 457</p>
      <p>
        <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutzerklärung</Link>
      </p>
    </footer>
  );
};

export default Footer;
