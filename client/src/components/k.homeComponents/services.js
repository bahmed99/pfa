import React from 'react'
import { Image, Container, Col, Row } from 'react-bootstrap'

export default function Equipe() {
    return (
        <div className="bg2 ">
            <div className="textCenter">
                <Container>
                    <Row>

                        <h1  >Quels sont nos services?</h1>
                        <h5 >
                            This is the paragraph where you can write more details about
                            your product.
                        </h5>

                    </Row>
                    <br />
                    <br />
                    <br />

                    <Row>

                        <Col>

                            <Image className="cours" src={require("../../assets/images/bgCours.gif").default} />
                            <br />
                            <br />


                            <p >  This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>


                        </Col>
                        <Col>
                            <Image className="cours" src={require("../../assets/images/bgCours.gif").default} />

                            <br />
                            <br />

                            <p >  This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>



                        </Col>
                        </Row>
                        <br/>
                        <br/>
                
                        <Row>
                        <Col>
                            <Image className="cours" src={require("../../assets/images/bgCours.gif").default} />

                            <br />
                            <br />
                            
                                <p >  This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                            

                        </Col>
                        </Row>


                    

                </Container>
                <br />
                <br />
                <br />
                <br />
                <hr style={{
                    marginLeft: "200px",
                    height: 1,
                    width: 1000
                }} />
            </div>

        </div>
    )
}
