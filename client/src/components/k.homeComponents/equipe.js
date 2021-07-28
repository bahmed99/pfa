import React from 'react'
import { Card, CardGroup, Image, Container, Col, Row, Button } from 'react-bootstrap'

export default function Equipe() {
    return (
        <div className=" text-center">
            <Container>
                <Row>

                    <h2 >Voici notre equipe</h2>
                    <h5 >
                        This is the paragraph where you can write more details about
                        your product.
                    </h5>

                </Row>
                <Row>
                    <Col>
                        <Image className="card-avatar" src={require("../../assets/images/ahmed.jpg").default} roundedCircle />


                        <h4>Ahmed Bahri</h4>
                  

                    </Col>
                    <Col>
                        <Image className="card-avatar" src={require("../../assets/images/khadija.jpg").default} roundedCircle />


                        <h4>Khadija Makhlouf</h4>
                       


                    </Col>
                    <Col>
                        <Image className="card-avatar" src={require("../../assets/images/oussama.png").default} roundedCircle />


                        <h4>Oussama Kordoghli</h4>
                 


                    </Col>



                </Row>

            </Container>
        </div>
    )
}
