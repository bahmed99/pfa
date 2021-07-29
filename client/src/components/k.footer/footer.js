import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import './footer.css'
import { Button, } from "reactstrap";
function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <h5 className="footer-text">Consultez nos réseaux sociaux</h5>
                        <h6 className="h6-white">Vous y trouverez beaucoup de détails et des offres exclusives.</h6>
                    </Col>
                    <Col xs={6} md={4} className="justify-content-end">
                    <Row>
                       
                        
                            <ul>
                                <Button variant="info"

                                    
                                >
                                    <i className="fa fa-facebook" />
                                </Button>
                                <Button
                                   
                                >
                                    <i className="fa fa-instagram" />
                                </Button>
                                <Button
                                    className="btn"



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