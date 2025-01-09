import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Eva Kluge Heilpraktikerin</h1>
      <h3>Shiatsu und Jin Shin Jyutsu</h3>
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