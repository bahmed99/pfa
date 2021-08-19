import React, { useState , useEffect} from "react";
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
import {useHistory} from 'react-router-dom'



const AffectationClient = (props) => {
    const [infoclient,setInfoclient]=useState([])
    const [infoemployee,setInfoemployee]=useState([])
    const History = useHistory()
    const [data1 , setData1] = useState('')
    const [data2 , setData2] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3001/admin/AffectationEmployee`,{
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result=>{
            //setInfoemployee(result)
            setInfoemployee(result.filter(item => item._id !== props.id))
        })
    //     fetch(`http://localhost:3001/admin/AffectationClient`,{
    //         method: "get",
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem("jwt")
    //         }
    //     }).then(res => res.json())
    //     .then(result1=>{
    //         setInfoclient(result1)
    //     })
     }, [])
  const onClickAjouterSeance=async ()=>{
    
    if (data1 !=="" && data2 !=="")
    {
        
        props.setInfoclient(props.infoclient.filter(item => item.cin !== data1))
        fetch(`http://localhost:3001/admin/choixclient-employee`, {
            method: "put",
            headers: {
                "Content-Type":"application/json" ,
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            } ,
            body:JSON.stringify({
                data1:data1 ,
                data2:data2
            })
        }).then(res => res.json())
        .then(result=>{
    
        })
    }
    if(props.infoclient.length === 1 )
    {
        History.push('/ressources-humaine')
    }
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
                    <h3 style={{ color:"#718a8a"}}>Affecter les clients</h3>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    
                    <Form role="form">
                            <FormGroup>
                                <Label>Choisir le client</Label>
                                <Input type='select' onChange={(e) => setData1(e.target.value)}  >
                                    <option default value="">
                                    </option>
                                    {props.infoclient.map((element,index)=>(
                                       <option value={element.cin}  key={index}>
                                       {element.cin}
                                       </option>
                                        
                                ))}
                                
                                </Input>

                            </FormGroup>

                            <FormGroup>
                                <Label>Choisir l'employée</Label>
                                <Input type='select' onChange={(e) => setData2(e.target.value)}  >
                                    <option default value="">
                                    </option>
                                    {infoemployee.map((element,index)=>(
                                        <option value={element.cin}  key={index}>
                                        {element.cin}
                                        </option>
                                        
                                    ))}
                                
                                </Input>

                            </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          style={{backgroundColor:"#369579"}}
                          onClick={(e)=>onClickAjouterSeance()}
                        >
                          
                          Éditer
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>

        </Modal>)

}

export default  AffectationClient ;