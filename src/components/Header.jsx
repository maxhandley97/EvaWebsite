import React from 'react';
import { Link } from "react-router-dom";
import banner from "../assets/EvaImages/Eva-Banner3.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <a href="/" className="navbar-brand">
            <img src={banner} alt="Logo" className="header-banner" />
          </a>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Über mich
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Behandlung" className="nav-link">
                Behandlungsmethoden
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Geschichte" className="nav-link">
                  Geschichte der Methoden
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sitzung" className="nav-link">
                  Sitzung und Kosten
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
