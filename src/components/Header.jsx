import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import banner from "../assets/eva-banner.png";
import "../styling/Header.module.css"

const Header = () => {
  return (
    <header className="styles.navbar">
      <Navbar bg="light" expand="lg">
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Far Left: Logo Image */}
          <Navbar.Brand href="/">
            <div>
              <img src={banner} alt="Logo" className="syles.banner" width='500rem'/>
            </div>
          </Navbar.Brand>

          {/* Far Right: Nav Items */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Über mich
            </Nav.Link>
            <Nav.Link as={Link} to="/Shiatsu">
              Shiatsu
            </Nav.Link>
            <Nav.Link as={Link} to="/jin">
              Jin Shin Jyutsu
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Kontakt
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
