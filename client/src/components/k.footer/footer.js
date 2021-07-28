import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './footer.css'
import { Button, } from "reactstrap";
function Footer() {
    return (
        <div className="footer">
            <Container>
                  <Row>
                       <Col xs={12} md={8}>
                            <h5 class="white-text">Consultez nos réseaux sociaux</h5>
                            <p class="grey-text text-lighten-4">Vous y trouverez beaucoup de détails et des offres exclusives.</p>
                            </Col>
                            <Col  xs={6} md={4}  className="justify-content-end">
                            <Row><h5 class="white-text">Liens :</h5></Row>
                            <Row>
                            <ul>
                                <Button
                                    className="btn"

                                    href="#pablo"

                                >
                                    <i className="fa fa-facebook" />
                                </Button>
                              <Button
                                    className="btn"

                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fa fa-instagram" />
                                </Button>
                               <Button
                                    className="btn"

                                    href="#pablo"

                                >
                                    <i className="fa fa-linkedin" />
                                </Button>

                            </ul>
                            </Row>
                            </Col>
                        </Row>
                
                <div class="footer-copyright">
                    <div class="container">
                        © 2021 Copyright iDrive Gears
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Footer;