import { useState, React } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar expand="md" className="custom-navbar" fixed="top">
      <Container>
      <div className="navbar-title"><p>Eva Kluge: Heilpraktikerin</p> <p>für Shiatsu und Jin Shin Jyutsu </p></div>
        {/* Burger Button */}
        <button
          className={`burger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links */}
        <Navbar.Collapse className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <Nav>
            {[
              { path: "/", label: "Behandlungsmethoden" },
              { path: "/about", label: "Über mich" },
              { path: "/geschichte", label: "Geschichte der Methoden" },
              { path: "/sitzung", label: "Kosten" },
              { path: "/contact", label: "Kontakt" }
            ].map(({ path, label }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                className={location.pathname === path ? "active-link" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
