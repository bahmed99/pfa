import { useState, useEffect } from "react";
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

export default function ModalClientAjouter(props) {
    const [employee, setEmployee] = useState([])
    const [data, setData] = useState("")
    useEffect(() => {
        fetch(`http://localhost:3001/admin/AffectationEmployee`, {
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setEmployee(result)
            })

    }, [])




    const onClickAffecter = () => {
        if (data !== "") {
            axios.put(`http://localhost:3001/admin/nouveauClients/${props.id}`,{employe:employee[data]._id},{
                method: "get",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            }).then(res=>{
                props.setModal(false)
                props.setClients(props.clients.filter(item=>item[0]!==props.id))
            })
            
        }

    }


    return (
        <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={props.isOpen}

            toggle={() => { props.setModal(!props.isOpen) }}
        >
            <div className="modal-body p-0 row align-self-center">
                <Card className=" shadow border-0 ">
                    <CardHeader className="bg-transparent pb-1 row align-self-center">
                        <h3>Affecter employée</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                        <Form role="form">


                            <FormGroup>
                                <Label>Employées</Label>
                                <Input type='select' onChange={(e) => setData(e.target.value)}  >
                                    <option default value="">
                                    </option>
                                    {employee.map((element, index) => (
                                        <option value={index} key={index}>
                                            {element.name}
                                        </option>

                                    ))}

                                </Input>




                            </FormGroup>


                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="primary"
                                    type="button"
                                    onClick={(e) => onClickAffecter()}
                                >
                                    Affecter
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        </Modal>
    )
}
