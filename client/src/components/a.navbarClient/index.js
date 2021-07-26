
import { Container, Navbar,Nav } from "react-bootstrap"
import "./navbar.css"
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <Navbar className='bgNav' collapseOnSelect expand="lg"  variant="dark">
        <Container>
        <Navbar.Brand href="#home">iDrive Gears</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link  href="#deets">Emploi</Nav.Link>
            <Nav.Link  eventKey={2} href="#deets">Cours</Nav.Link>
            <Nav.Link  eventKey={3} href="#deets">Exercices</Nav.Link>
            <Nav.Link eventKey={4} href="#memes">
              Se déconnecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
