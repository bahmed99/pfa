import React from "react";
import "./Formulaire.css";
import { Form,Button,Row,Col} from "react-bootstrap";


export default function Formulaire() {
    return (
        <div className="login-box">
            <div className="loginbox-container">
                <div class="left">
                    <input type="text" name="marque" placeholder="Marque" />
                    <input type="text" name="serie" placeholder="Série" />

                    <input type="text" name="service" placeholder="État" />
                    <input type="text" name="mileage" placeholder="Kilométrage" />

                   
                       
                    <Form>
                        <div>
                            <Row>
                            <Col><p>Date Assurance</p></Col>
                            <Col><input id="date" type="date"  /></Col>
                            </Row>
                        </div>
                        
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                        />
                        <div>
                            <Row>
                            <Col><p>Date Visite technique</p></Col>
                            <Col><input id="date" type="date"  /></Col>
                            </Row>
                        </div>
                        
                            <Form.File id="exampleFormControlFile1" label="Photo     :" />
                        
                    </Form>
                    <br/>
                    <Button variant="info" > Save </Button>
                </div>
               
            </div>
        </div>
    );
}
