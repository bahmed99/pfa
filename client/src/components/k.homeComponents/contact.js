import React from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import './home.style.css'

export default function Contact() {
    return (
        <div className="dark">

                <Container>
                    <Row>
                        <Col >
                            <h2 className="h2-white" >Contactez-nous</h2>
                            <Form className="contact-form">
                                <Row>
                                    <Col md="6">
                                        
                                        <i className="nc-icon nc-single-02" />
                                        <Form.Control as="textarea" placeholder="Nom et prénom" />
                                    </Col>
                                    <Col md="6">
                                    
                                        <i className="nc-icon nc-single-02" />
                                        <Form.Control as="textarea" placeholder="Votre adresse email" />
                                    </Col>
                                    
                                </Row>
                             
                                    <Form.Control
                                    as="textarea"
                                    placeholder="Votre message"
                                    style={{ height: '100px' }}
                                />
                            <br/>
                                <Row>
                                    <Col className="ml-auto mr-auto" md="4">
                                        <Button  color="danger" size="lg">
                                          Envoyer
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
