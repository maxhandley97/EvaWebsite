import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styling/footer.css'; //

const Footer = () => {
  return (
    <footer>
      <div className='container'>
      <p>Eva Kluge: Heilpraktikerin <br></br></p>
      <p>Tel: 0174 53 99 457</p>
      <p>
        <Link to="/impressum">Impressum</Link> | <Link to="/datenschutz">Datenschutzerklärung</Link>
      </p>
      </div>
    </footer>

  );
};

export default Footer;
