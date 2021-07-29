import React from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import { Button, } from "reactstrap";
import './home.style.css'

export default function Contact() {
    return (
        <div className="dark">

                <Container>
                    <Row>
                        <Col >
                            <h2 className="h2-white" >Contactez-nous</h2>
                            <Form method="POST" action="send" className="contact-form">
                                <Row>
                                    <Col md="6">
                                        
                                       
                                        <Form.Control type="text" as="textarea"  placeholder="Nom et prénom"
                                        style={{ height: '35px' }} />
                                        <br/>
                                    </Col>
                                   
                                    
                                </Row>
                             
                                    <Form.Control
                                    as="textarea"
                                    type="text"
                                    placeholder="Votre message"
                                    
                                />
                            
                                <Row>
                                   
                                    <Col md="6" >
                                        <Button  variant="outline-info" size="lg">
                                          Envoyer
                                        </Button>
                                   
                                    </Col>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
