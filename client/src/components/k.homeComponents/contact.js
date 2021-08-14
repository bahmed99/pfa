import React from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, } from "reactstrap";
import './home.style.css'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
export default function Contact() {
    const classes = useStyles();
    return (
        <div className="bg" >
            <div className="textCenter">
                <Container>
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="titleEquipe">Contactez-nous</h1>
                            <br />
                            <br />
                            <br />
                            <br />
                    <Row>
                        <Col >
                            
                            <Form method="POST" action="send" className="contact-form">
                                <Row>
                                    <Col md="6">


                                        <Form.Control type="text" as="textarea" placeholder="Nom et prénom"
                                            style={{ height: '35px' }} />
                                        <br />
                                    </Col>


                                </Row>

                                <Form.Control
                                    as="textarea"
                                    type="text"
                                    placeholder="Votre message"

                                />

                                <Row>

                                    <Col md="6" >
                                        <Button variant="outline-info" size="lg">
                                            Envoyer
                                        </Button>

                                    </Col>
                                    <br />
                                    <br />
                                    <br />
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
