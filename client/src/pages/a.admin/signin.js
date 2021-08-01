import { useState } from "react"
import axios from "axios"
import "./signin.css"
import Alert from 'react-bootstrap/Alert'
import ReactLoading from 'react-loading';
import { Link, useHistory } from 'react-router-dom'
import image1 from '../../assets/images/admin.gif'

export default function Signin() {
    const History = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const PostData = () => {
        setLoading(true)
        fetch("http://localhost:3001/auth/admin/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    setLoading(false)
                    if (password !== "" && email !== "") {
                        setError(true)
                        setTimeout(() => setError(false), 2500)
                    }
                }
                else {
                    setLoading(false)
                    console.log(data.token)
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    setSuccess(true)
                    setTimeout(() => setSuccess(false), 2500)

                    setTimeout(() => History.push('/home'), 500)




                    setTimeout(() => window.location.reload(), 500)

                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (

        <section   style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5" ,
            backgroundAttachment:"fixed" ,
            backgroundPosition: "center" ,
         
          }} className="ftco-section">
            <Alert show={error} variant={'danger'} style={{ width: "700px", margin: "auto auto" }}>
                {"Aucun utilisateur existant avec ce mail"}
            </Alert>
            <Alert show={success} variant={'success'} style={{ width: "700px", margin: "auto auto" }}>
                {"Connection reussite"}
            </Alert>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            <h3 className="text-center mb-4">Compte Admin</h3>
                           
                                <div className="form-group1">
                                    <input type="text" className="FormAdmin form-control rounded-left" placeholder="Email*" onChange={(e)=>{setEmail(e.target.value)}} />
                                </div>
                                <div className="form-group1 d-flex">
                                    <input type="password" className=" FormAdmin form-control " placeholder="Mot de passe*" onChange={(e)=>{setPassword(e.target.value)}} />
                                </div>
                                <div className="form-group1">


                                    <Link to="/admin/forgot-password">Mot de passe oublié ?</Link>

                                </div>
                                <div className="form-group1">
                                    <button type="submit" onClick={PostData} className="btn5  rounded submit p-3 px-5" disabled={loading}>{loading ? <ReactLoading height={'20px'} width={'24px'} className="loading1" type="spin" /> : "Se connecter"}</button>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


