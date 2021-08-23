import React, { useEffect, useState } from "react";
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
import axios from "axios"
import ReactLoading from 'react-loading';
import Alert from 'react-bootstrap/Alert'


const SignUp = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [cars, setCars] = useState("")
  const [car, setCar] = useState("")
  const [tel, setTel] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cin, setCin] = useState("")
  const [age, setAge] = useState("")
  const [image, setImage] = useState("")
  const [role, setRole] = useState("")

  const [imagename, setImagename] = useState("")
  useEffect(() => {
    axios.get("http://localhost:3001/car/all", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(result => {
      setCars(result.data)
    })


  }, [])

  const onClickAjouterSeance =async  () => {
    if (name && email && cin && image && role) {
      let dataform = new FormData()
      dataform.append('name', name)
      dataform.append('email', email)
      dataform.append('cin', cin)
      dataform.append('image', image)
      dataform.append("tel", tel)
      dataform.append("age", age)
      setLoading(true)

      const data = { name: name, email: email, cin: cin, imgUrl: imagename,age:age,tel:tel }
      if (role === "Employée") {
        dataform.append("car", cars[car].id)
        axios.post("http://localhost:3001/auth/employee/signup", dataform, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
        })
          .then(result => {
            setLoading(false)

            props.setData1(prevData => ([...prevData, data]))
            setTimeout(() => setSuccess(false), 2500)
            props.setModal(false)
            setName('')
            setEmail('')
            setCin('')
            setImage('')
            setImagename('')
            setTel('')
            setAge('')
            setCar('')

          }).catch(err => {
            setName('')
            setEmail('')
            setCin('')
            setImage('')
            setImagename('')
            setTel('')
            setAge('')
            setCar('')
            setLoading(false)
            setError(true)
            setTimeout(() => setError(false), 2500)

          })



      }
      else {
        axios.post("http://localhost:3001/auth/admin/signup", dataform, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
        })
          .then(result => {
            setLoading(false)
            setTimeout(() => setSuccess(false), 2500)
            props.setData1(prevData => ([...prevData, data]))
            props.setModal(false)
            setName('')
            setEmail('')
            setCin('')
            setImage('')
            setImagename('')
            setTel('')
            setAge('')
            setCar('')

          }).catch(err => {
            setLoading(false)
            setError(true)
            setTimeout(() => setError(false), 2500)
            setName('')
            setEmail('')
            setCin('')
            setImage('')
            setImagename('')
            setTel('')
            setAge('')
            setCar('')
          })


      }

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
        <Card className="shadow border-0">
          <CardHeader className="bg-transparent pb-1">
            <h3 style={{ marginLeft: "180px", color: "#718a8a" }}>Ajouter un utilisateur</h3>
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
                <Label>Rôle</Label>
                <Input type="select" value={role} onChange={(e) => setRole(e.target.value)} >
                  <option default value=""></option>
                  <option value="Admin" key="Admin">Admin</option>
                  <option value="Employée" key="Employée">Employée</option>

                </Input>
                {/* <select name="pets" id="pet-select" style={{width:"530px",height:"38px" , backgroundColor:"white" , border:"2px solid #DCDCDC"}}>
                            <option value=""></option>
                            <option value="dog">Admin</option>
                            <option value="cat">Employee</option>
                        </select> */}
              </FormGroup>
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  type="text"
                  placeholder="Nom*"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />

              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />

              </FormGroup>
              <FormGroup>
                <Label>Cin</Label>
                <Input
                  type="text"
                  placeholder="Cin*"
                  value={cin}
                  onChange={(e) => setCin(e.target.value)} />

              </FormGroup>
              <FormGroup>
                <Label>Age</Label>
                <Input
                  type="text"
                  placeholder="Age*"
                  value={age}
                  onChange={(e) => setAge(e.target.value)} />

              </FormGroup>
              <FormGroup>
                <Label>Télephone</Label>
                <Input
                  type="text"
                  placeholder="Tel*"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)} />

              </FormGroup>
              {(role === "Employée") ? <FormGroup>
                <Label> Choisir Une voiture </Label>
                <Input type='select' onChange={(e) => setCar(e.target.value)}  >
                  <option default value="">
                  </option>
                  {cars.map((element, index) => (
                    <option value={index} key={index}>
                      {element.serie}
                    </option>

                  ))}

                </Input>

              </FormGroup> : ""}
              <FormGroup>
                <Label>Image</Label>
                <Input
                  className="form-control"
                  type="file"
                  id="formFileMultiple"
                  onChange={(e) => { setImage(e.target.files[0]); setImagename(e.target.value.replace('C:\\fakepath\\', '')) }} />

              </FormGroup>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={(e) => onClickAjouterSeance()}
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