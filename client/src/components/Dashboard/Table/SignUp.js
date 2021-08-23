import { useState } from "react";
import Alert from 'react-bootstrap/Alert'
import ReactLoading from 'react-loading';
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

import axios from "axios"



const SignUp = (props) => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)




  const onClickAjouterClient = () => {
    setLoading(true)
    const data = { name: props.users[1], email: props.users[5], cin: props.users[3], status: 'Payé', age: props.users[2], tel: props.users[4] }
    axios.post("http://localhost:3001/auth/client/signup", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    })
      .then(result => {
      
          setLoading(false)
          props.setModal(false)
          props.setClients(props.clients.filter(item => item[0] !== props.id))
          setTimeout(() => setSuccess(false), 2500)

        
      }).catch(err => {
        setLoading(false)
          setError(true)
          setTimeout(() => setError(false), 2500)
          
        
      })

    axios.delete(`http://localhost:3001/employe/removeClientNouveau/${props.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => {

    }).catch(err => {
      console.log(err)
    })

  }



  return (
    <Modal
      className="modal-dialog-centered"
      size="sm"
      isOpen={props.isOpen}

      toggle={() => { props.setModal(!props.isOpen) }}
    >
      <div className="modal-body p-0 row align-self-center">

        <Card className="shadow border-0">
          <CardHeader className="bg-transparent pb-1">
            <h3 style={{ marginLeft: "180px", color: "#718a8a" }}>Ajouter un client</h3>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Alert show={error} variant={'danger'} >
              {"Il existe un autre utilisateur avec cet email"}
            </Alert>
            <Alert show={success} variant={'success'} >
              {"Le compte est bien créé"}
            </Alert>
            <Form role="form">
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  type="text"
                  placeholder="Nom*"
                  value={props.users[1]}
                  disabled={true}
                />

              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  placeholder="Email*"
                  value={props.users[5]}
                  disabled={true}
                />

              </FormGroup>
              <FormGroup>
                <Label>Cin</Label>
                <Input
                  type="text"
                  placeholder="Cin*"
                  value={props.users[3]}
                  disabled={true}
                />

              </FormGroup>
              <FormGroup>
                <Label>Age</Label>
                <Input
                  type="text"
                  placeholder="Age*"
                  value={props.users[2]}
                  disabled={true}
                />

              </FormGroup>
              <FormGroup>
                <Label>Téléphone</Label>
                <Input
                  type="text"
                  placeholder="Tel*"
                  value={props.users[4]}
                  disabled={true}
                />

              </FormGroup>

              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  style={{ backgroundColor: "#369579" }}
                  onClick={onClickAjouterClient}
                  style={{ opacity: "100% !important", backgroundColor: loading ? "#66CDAA" : '#369579' }} disabled={loading}
                >
                  {loading ? <ReactLoading height={'20px'} width={'24px'} className="loading1" type="spin" /> : "Ajouter"}
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>

    </Modal>)

}

export default SignUp;