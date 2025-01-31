import React from 'react';
import { Link } from "react-router-dom";
import banner from "../assets/EvaImages/banner.png";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container className="navbar-container">
          {/* Logo */}
          <Navbar.Brand href="/">
            <img src={banner} alt="Logo" className="banner" />
          </Navbar.Brand>

          {/* Navbar Items */}
      
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <i className="fas fa-home"></i> {/* Home Icon */}
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Über mich
              </Nav.Link>
              <Nav.Link as={Link} to="/Shiatsu">
              Methoden und Wirkung
              </Nav.Link>
              <Nav.Link as={Link} to="/sitzung">
                Sitzung und Kosten
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Kontakt
              </Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
