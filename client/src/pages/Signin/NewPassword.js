import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import '../../assets/css/pages/Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import Alert from 'react-bootstrap/Alert'
import ReactLoading from 'react-loading';

export default function NewPassword() {
    useEffect(() => {

        localStorage.clear()
    }, [])
    const History = useHistory()
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const { token } = useParams()

    const PostData = () => {
        setLoading(true)
        fetch("http://localhost:3001/auth/newPassword", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                token
            })
        }).then(res => res.json())
            .then(data => {
      
                if (data.error) {
                    setLoading(false)
                    setError(true)
                    setTimeout(() => setError(false), 2500)
                }
                else {
                    setLoading(false)
                    setSuccess(true)
                    setTimeout(() => setSuccess(false), 2500)
                    setInterval(function () { History.push('/sign-in') }, 2000);
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="trydiv" style={{
            backgroundImage: 'url(' + image1 + ')',
            backgroundSize: "cover",
            height: "90vh",
            color: "#f5f5f5"
        }}>
            <br />
            <Alert show={error} variant={'danger'} style={{ width: "450px", margin: "auto auto" }}>
                {"Réessayer session expirée"}
            </Alert>
            <Alert show={success} variant={'success'} style={{ width: "450px", margin: "auto auto" }}>
                {"La mise a jour de votre mot de passe est bien faite"}
            </Alert>
            <br />
            <div className="mycard">

                <div className="card auth-card1 input-field #fafafa grey lighten-5">
                    <img alt="" src={image} className="logo-Mod" />
                    <div>
                        <label><i className="fa fa-lock" style={{ color: "#718a8a", fontSize: "25px", marginLeft: "-50px" }}></i></label>
                        <input
                            type="password"
                            placeholder=" Nouveau mot de passe*"
                            className="input-Mod4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br />
                    <button onClick={() => PostData()} className="waves-effect505" type="submit" name="action" style={{ opacity: "100% !important", backgroundColor: loading ? "#66CDAA" : '' }} disabled={loading}>{loading ? <ReactLoading height={'20px'} width={'24px'} className="loading1" type="spin" /> : "Envoyer"}
                    </button>
                    <br />

                </div>
            </div>
        </div>
    )
}