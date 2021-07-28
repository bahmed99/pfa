import React from 'react'
import { Card } from 'react-bootstrap'
import './home.style.css'

export default function Welcome() {
    return (
        <div className="welcome" >
            <Card>
            <Card.Img src={require("../../assets/images/logo.png").default} />
                <Card.Body>
                    <Card.Title>Welcome to iDrive Gear website ! </Card.Title>
                    <Card.Text>You will master with is the art of driving </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}