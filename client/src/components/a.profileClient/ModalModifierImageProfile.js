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
    const [nom, setNom] = useState("")
    
    const [update, setUpdate] = useState(false)
    const [pic, setPic] = useState("")



    const onClickAjouterSeance = async () => {

        if (nom!==""&& update) {
           
       
            
            const fd= new FormData()
            fd.append("pic",pic)

            props.setModal(false)
            axios.put(`http://localhost:3001/client/updateClientPicture`, fd, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            }).then(res=>{
                props.setData(nom)
            })
          
            setUpdate(false)


        }
        setNom("")
        setPic("")
    }

console.log(nom)
    return (
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
                            <h3 >Modifier votre photo</h3>
                            <i onClick={()=>{setUpdate(!update)}} style={{fontSize:"20px",marginLeft:"290px",cursor:"pointer"}}className="fas fa-edit"></i>
                        </div>

                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                        <Form role="form">

                            <FormGroup>
                                

                                <Input
                                    type="file"
                                    disabled={!update}
                                   
                                    onChange={(e) => { setPic(e.target.files[0]); setNom(e.target.value.replace('C:\\fakepath\\',''))}}

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
    )
}
