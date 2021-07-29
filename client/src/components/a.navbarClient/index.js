import {useHistory} from 'react-router-dom'
import { Container, Navbar, Nav } from "react-bootstrap"
import "./navbar.css"

export default function Index() {
  const history = useHistory()
  function Disconnect() {
    localStorage.clear()
    history.push("/")
    window.location.reload();
  }

  return (
    <Navbar className='bgNav' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/ahmed" className="font1">iDrive Gears</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="font">Emploi</Nav.Link>
            <Nav.Link eventKey={2} href="/cours" className="font">Cours</Nav.Link>
            <Nav.Link eventKey={3} href="/tests" className="font">Exercices</Nav.Link>
            <Nav.Link eventKey={4} href="/avis" className="font">Votre avis</Nav.Link>
            <Nav.Link eventKey={5} onClick={Disconnect} className="font">Se déconnecter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
