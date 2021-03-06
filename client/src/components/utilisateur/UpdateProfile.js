import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Label
} from "reactstrap";



const UpdateProfile = (props) => {
  
  const onClickAjouterSeance=async ()=>{

  }

        return(
        <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={props.isOpen}
        
        toggle={() => {props.setModal(!props.isOpen)}}
        >
              <div className="modal-body p-0 row align-self-center">
                <Card className="shadow border-0">
                  <CardHeader className="bg-transparent pb-1 row align-self-center">
                    <h3 style={{ color:"#718a8a"}}>Editer le profil</h3>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    
                    <Form role="form">
                            <FormGroup>
                                <Label>Nom</Label>
                                    <Input 
                                    style={{border:"2px solid #369579"}}
                                    type = "text"
                                    placeholder = "Nom" />

                                
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input 
                                style={{border:"2px solid #369579"}}
                                type = "text"
                                placeholder = "Email" />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Cin</Label>
                                <Input 
                                style={{border:"2px solid #369579"}}
                                type = "text"
                                placeholder = "email" />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Image</Label>
                                <Input 
                                style={{border:"2px solid #369579"}}
                                className="form-control" 
                                type="file" 
                                id="formFileMultiple" />
                                
                            </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          style={{backgroundColor:"#369579"}}
                          onClick={(e)=>onClickAjouterSeance()}
                        >
                          
                          ??diter
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>

        </Modal>)

}

export default  UpdateProfile ;