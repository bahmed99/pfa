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
import Alert from 'react-bootstrap/Alert'
import axios from "axios"



const SignUp = (props) => {
  const [tel,setTel]= useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [cin,setCin]=useState("")
  const [age,setAge]=useState("")
  const [image,setImage]=useState("")

  const [imagename,setImagename] = useState("")
  const onClickAjouterSeance=async ()=>{
    if(name && email && cin && image )
    {
      let dataform = new FormData()
      dataform.append('name', name)
      dataform.append('email', email)
      dataform.append('cin', cin)
      dataform.append('image',image)
      dataform.append("tel",tel)
      dataform.append("age",age)

      const data = {name:name, email:email, cin:cin , imgUrl : imagename ,status:'Payé',age:age ,tel:tel }
      axios.post("http://localhost:3001/auth/client/signup",dataform,{
              headers:{
                  "Content-Type":"application/json" ,
                  "Authorization": "Bearer " + localStorage.getItem("jwt")
              }
          })
          .then(result=>{
              if(result.data.error)
              {
              }
              else
              {
                props.setData1(prevData => ([...prevData, data]))
                props.setModal(false)
                setName('')
                setEmail('')
                setCin('')
                setImage('')
                setImagename('')
                setTel('')
                setAge('')
              }
          }).catch(err=>{
              console.log(err)
        })
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
                  <CardHeader className="bg-transparent pb-1">
                    <h3 style={{marginLeft:"180px", color:"#718a8a"}}>Ajouter un client</h3>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    
                    <Form role="form">
                            <FormGroup>
                                <Label>Nom</Label>
                                    <Input 
                                    type = "text"
                                    placeholder = "Nom*"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)} />
                                
                            </FormGroup>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input 
                                type = "text"
                                placeholder = "Email*"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Cin</Label>
                                <Input 
                                type = "text"
                                placeholder = "Cin*"
                                value={cin}
                                onChange={(e)=>setCin(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Age</Label>
                                <Input 
                                type = "text"
                                placeholder = "Age*"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Télephone</Label>
                                <Input 
                                type = "text"
                                placeholder = "Tel*"
                                value={tel}
                                onChange={(e)=>setTel(e.target.value)} />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label>Image</Label>
                                <Input 
                                className="form-control" 
                                type="file" 
                                id="formFileMultiple"
                                onChange={(e)=>{setImage(e.target.files[0]) ; setImagename(e.target.value.replace('C:\\fakepath\\',''))}} />
                                
                            </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          style={{backgroundColor:"#369579"}}
                          onClick={(e)=>onClickAjouterSeance()}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>

        </Modal>)

}

export default  SignUp;