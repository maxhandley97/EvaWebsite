import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Be Your Star Shiatsu</h1>
      <h3>Eva Kluge – Shiatsu & Jin Shin Jyutsu</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Über mich</Link>
        <Link to="/Shiatsu">Shiatsu</Link>
        <Link to="/jin">Jin Shin Jyutsu</Link>
        <Link to="/contact">Kontakt</Link>

      </nav>
    </header>
  );
};

export default Header;