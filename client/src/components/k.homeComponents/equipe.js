import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import './home.style.css'

export default function Equipe() {
    return (
        <div className="bg2">
            <div className="textCenter">
            <Container>
            <h1  classname="titleEquipe">Notre équipe</h1>
            <br/>
            <br/>
            <br/>
            <br/>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../assets/images/2.jpg").default}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Ahmed Bahri</h3>
                            <p>Instructeur Code et Conduite</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../assets/images/3.jpg").default}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Khadija Makhlouf</h3>
                            <p>Instructeur Code et Conduite</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../assets/images/2.jpg").default}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Oussama Kordoghli</h3>
                            <p>Instructeur Code et Conduite</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr style={{
                marginLeft: "200px",
                height: 1,
                width: 900
            }} />
            </div>
       
        </div>
    )
}
