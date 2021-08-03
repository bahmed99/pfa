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

export default function ModalSupprimerSeance(props) {
    
  
    const [client, setClient] = useState("")
    

    const onClickSupprimerUneSeance = async () => {
        if (client!=="") {
            const seance = {
                "start": props.fetchSeances[client].start,
                "end": props.fetchSeances[client].end,    
            }
            props.setModal(false)
            axios.put(`http://localhost:3001/employe/emplois-delete/${props.id}`, seance, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            })
            
         const start =props.fetchSeances[client].start
            props.setData(props.fetchSeances.filter(item => item.start !== start))
            setClient("")

           
        }
    }


    function HandleChange(e) {
        setClient(e.target.value)
       
    }
    function Convertion(str){
       return (str.substring(8, 10) + '/' + str.substring(5, 7) + "/" + str.substring(0, 4))
    }
    function ConvertionHeure(str){
    
        // eslint-disable-next-line no-useless-concat
        return (str.substring(11, 13) +"h"+ ':' + str.substring(14, 16) )
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
                        <h3>Supprimer une séance</h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-10">

                        <Form role="form">


                            <FormGroup>
                                <Label>Choisir la date</Label>
                                <Input type='select' onChange={HandleChange} >
                                    <option default value="">
                                    </option>
                                {props.fetchSeances.map((element,index)=>(
                                    <option value={index}  key={index}>
                                       {"De "+ConvertionHeure(element.start) +` jusqu'à ` + ConvertionHeure(element.end) +" le " +Convertion(element.start) }
                                      
                                      
                                    </option>
                                ))}
                                
                                </Input>

                            </FormGroup>
                           

                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="danger"
                                    type="button"
                                    onClick={(e) => onClickSupprimerUneSeance()}
                                >
                                    Supprimer
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>

        </Modal>
    )
}
