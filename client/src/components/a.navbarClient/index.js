import {useHistory} from 'react-router-dom'
import { Container, Navbar, Nav } from "react-bootstrap"
import "./navbar.css"
import Chat from "../chat/chat"

export default function Index() {
  const history = useHistory()
  function Disconnect() {
    localStorage.clear()
    history.push("/")
    window.location.reload();
  }

  return (
    <div>
      <Navbar className='bgNav' collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="font1">iDrive Gears</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/emplois" className="font">Emplois</Nav.Link>
              <Nav.Link eventKey={2} href="/cours" className="font">Cours</Nav.Link>
              <Nav.Link eventKey={3} href="/tests" className="font">Exercices</Nav.Link>
              <Nav.Link eventKey={4} href="/avis" className="font">Votre avis</Nav.Link>
              <Nav.Link eventKey={5} onClick={Disconnect} className="font">Se déconnecter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{textAlign:"left"}}><Chat  /></div>
      
    </div>
  )
}
