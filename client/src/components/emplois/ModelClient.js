import { useState } from 'react'
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

import axios from 'axios'


export default function AjoutSeanceModal(props) {
    const [title, setTitle] = useState("")
    const user= JSON.parse(localStorage.getItem("user"))

    const onClickAjouterSeance = async () => {
        if ( title !== "") {
            const seance = {
                "start": props.selectInfoData.startStr,
                "end": props.selectInfoData.endStr,
                "title": title,
                "eventContent": user.name,
                "color": "#FF7F00",
                "employee":user.employee
            }
           
            setTitle('')
           
        }
        setTitle('')
    }
   
  
    return (
        <Modal
            className=" modal-dialog-centered "
            size="sm"
            isOpen={props.isOpen}
            style={{marginRight:"auto",marginLeft:"auto"}}
            toggle={() => { props.setModal(!props.isOpen) }}
        >
            <div className="modal-body p-0 row align-self-center">
                <Card className=" shadow border-0">
                    <CardHeader className="bg-transparent pb-1">
                        <h3>Ajouter une séance</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                        <Form role="form">

                            <FormGroup>
                                <Label>Titre</Label>

                                <Input
                                    onChange={(e) => { setTitle(e.target.value) }}
                               
                                />
                            </FormGroup>
                            
                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="primary"
                                    type="button"
                                    onClick={(e) => onClickAjouterSeance()}
                                >
                                    Ajouter
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        </Modal>
    )
}
