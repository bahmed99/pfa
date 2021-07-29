import React from 'react'
import { Image, Container, Col, Row } from 'react-bootstrap'

export default function Equipe() {
    return (
        <div className="dark">
            <Container>
                <Row>

                    <h2 className="h2-white" >Quels sont nos services?</h2>
                    <h5 className="h5-white">
                        This is the paragraph where you can write more details about
                        your product.
                    </h5>

                </Row>
                <br/>
                   
                <Row>
                  
                    <Col>
                  
                        <Image className="cours" src={require("../../assets/images/serie.jpg").default}  />
                        <br/>
                        <br/>

                        <h4 className="white-text">Cours de code de la route</h4>
                        <p className="white-text">  This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                  

                    </Col>
                    <Col>
                        <Image className="cours" src={require("../../assets/images/serie.jpg").default}  />

                        <br/>
                        <br/>
                        <h4 className="white-text">Cours de Conduite</h4>
                        <p className="white-text">  This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                       


                    </Col>
                    <Col>
                        <Image className="cours" src={require("../../assets/images/serie.jpg").default} />

                        <br/>
                        <br/>
                        <h4 className="white-text">Cours de code en ligne</h4>
                        <p className="white-text">  This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>


                    </Col>



                </Row>

            </Container>
        </div>
    )
}
