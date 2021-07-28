import React from 'react'
import { Container,Row } from 'react-bootstrap'
import './home.style.css'

export default function Apropos() {
    return (
        <div className="textCenter">
        <Container>
          <Row>
           
              <h2 className="title">Qui Sommes Nous?</h2>
              <h5 className="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
              <br />
            
          </Row>
          </Container>
          </div>
    )
}
