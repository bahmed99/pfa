import {useState} from 'react'
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Row,
    Col, Label
} from "reactstrap";

import axios from 'axios'

export default function AjoutSeanceModal(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  

    const onClickAjouterSeance=async ()=>{
        const seance ={ 
            "start" :props.selectInfoData.startStr,
            "end":props.selectInfoData.endStr,
            "title":title ,
            "eventContent":description
           }
           
           props.setModal(false)
         axios.post("http://localhost:3001/test",seance)
         props.setData(prevData=>([...prevData,seance]))
       
      }
    return (
        <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={props.isOpen}

            toggle={() => { props.setModal(!props.isOpen) }}
        >
            <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <h3>Ajouter une seance</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">

                        <Form role="form">

                            <FormGroup>
                                <Label>Titre</Label>

                                <Input 
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Description</Label>
                                <Input 
                                    onChange={(e) => { setDescription(e.target.value) }}
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
