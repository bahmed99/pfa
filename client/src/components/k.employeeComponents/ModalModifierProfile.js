import {useState} from 'react'
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

export default function ModalModifierProfile(props) {

    const [nom, setNom] = useState(props.fetchData.name)
    const [tel, setTel] = useState(props.fetchData.tel)
    const [cin, setCin] = useState(props.fetchData.cin)
    const [email, setEmail] = useState(props.fetchData.email)
    const [age, setAge] = useState(props.fetchData.age)
    const [update, setUpdate] = useState(false)
   
   
    const onClickAjouterSeance = async () => {

        if (nom !== "" && email !== "" && cin !== ""&& update) {
            const profile = {
                "name": nom,
                "cin": cin,
                "email": email,
                "tel":tel,
                "age":age
            }
           
       
            
            if(props.role==="admin"){
                props.setModal(false)
                setUpdate(false)
                axios.put(`http://localhost:3001/admin/updateAdmin`, profile, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    }
                })
                props.setName(nom)
            }

            else {
                props.setModal(false)
                axios.put(`http://localhost:3001/employe/updateEmploye`, profile, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    }
                })

                props.setName(nom)
                
                setUpdate(false)
    
            }
           

        }
    }

    

    return (
        <div>
            <Modal
            className=" modal-dialog-centered "
            size="sm"
            isOpen={props.isOpen}
            style={{ marginRight: "auto", marginLeft: "auto" }}
            toggle={() => { props.setModal(!props.isOpen) }}
        >
            <div className="modal-body p-0 row align-self-center">
                <Card className=" shadow border-0">
                    <CardHeader className="bg-transparent pb-1">
                        <div style={{display:"flex"}}>
                            <h3 >Modifier votre profile</h3>
                            <i onClick={()=>{setUpdate(!update)}} style={{fontSize:"20px",marginLeft:"290px",cursor:"pointer"}}className="fas fa-edit"></i>
                        </div>

                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                        <Form role="form">

                            <FormGroup>
                                <Label>Nom:</Label>

                                <Input
                                    disabled={!update}
                                    value={nom}
                                    onChange={(e) => { setNom(e.target.value) }}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email:</Label>

                                <Input
                                    disabled={!update}
                                    value={email}

                                    onChange={(e) => { setEmail(e.target.value) }}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Cin:</Label>

                                <Input
                                    disabled={!update}
                                    value={cin}
                                    onChange={(e) => { setCin(e.target.value) }}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Tel:</Label>

                                <Input
                                    disabled={!update}
                                    value={tel}
                                    onChange={(e) => { setTel(e.target.value) }}

                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Age:</Label>

                                <Input
                                    disabled={!update}
                                    value={age}
                                    onChange={(e) => { setAge(e.target.value) }}

                                />
                            </FormGroup>

                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    disabled={!update}
                                    style={{backgroundColor:"red"}}
                                    type="button"
                                    onClick={(e) => onClickAjouterSeance()}
                                >
                                    Modifier
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        </Modal>
        </div>
    )
}
