import React from 'react'
import { Card } from 'react-bootstrap'
import '../../assets/css/components/home/home.style.css'
import { Fade } from 'react-reveal';
export default function Welcome() {
    return (
        <div className="welcome"  >
            <Fade top>
                <Card className="Welcome-card">
                    <Card.Img src={require("./k.homeimages/Composition.gif").default} />
                    <Card.Body>
                        <Card.Title>Welcome to iDrive Gear website ! </Card.Title>
                        <Card.Text>You will master with is the art of driving </Card.Text>
                    </Card.Body>

                </Card>
            </Fade>
        </div>

    )
}
