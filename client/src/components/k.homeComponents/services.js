import React from 'react'
import { Card , CardGroup,Image,Container,Col,Row,Button} from 'react-bootstrap'
import './home.style.css'

export default function Services() {
    return (
        <div className="dark ">
        <Container>
          <Row>
           
              <h2  className="h2-white">Quels sont nos services?</h2>
              <h5 className="h5-white" >
                This is the paragraph where you can write more details about
                your product.
              </h5>

                </Row>
                <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={require("../../assets/images/serie.jpg").default } />
                            <Card.Body>
                                <Card.Title>Cours de Code de la route</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                       </Card>
                        <Card>
                            <Card.Img variant="top" src={require("../../assets/images/images.jpg").default} />
                            <Card.Body>
                                <Card.Title>Cours de conduite</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={require("../../assets/images/serie.jpg").default } />
                            <Card.Body>
                                <Card.Title>Card cours de code de la route en ligne</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. 
                                </Card.Text>
                            </Card.Body>
            
                        </Card>
                    </CardGroup>
                    <br/>
            </Container>
          </div>
    )
}
