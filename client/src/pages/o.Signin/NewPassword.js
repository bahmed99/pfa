import React, {useState} from 'react'
import {Link, useHistory , useParams} from 'react-router-dom'
import M from 'materialize-css' 
import './Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import Alert from 'react-bootstrap/Alert'


export default function NewPassword() {
    const History = useHistory()
    const [password,setPassword] = useState('')
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const {token} = useParams()
    console.log(token)
    const PostData = () =>{
        fetch("http://localhost:3001/auth/newPassword",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password ,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error)
            {
                setError(true)
                setTimeout(() => setError(false), 2500)
            }
            else
            {
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2500)
                setInterval(function(){ History.push('/oussama') }, 2000);
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="trydiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5"
          }}>
            <br />
            <Alert show={error} variant={'danger'} style={{width:"700px",margin:"auto auto"}}>
                    { "Réessayer session expirée"}
            </Alert>
            <Alert show={success} variant={'success'} style={{width:"700px",margin:"auto auto"}}>
                    {"La mise a jour de votre mot de passe est bien faite"}
            </Alert>
             <br />
            <div className="mycard">
            
                <div className="card auth-card112 input-field #fafafa grey lighten-5">
                    <img alt="" src={image} className="logo-Mod"/>
                    <i className="material-icons firstOne1 prefix" style={{color:"#3d3e42"}}>lock_outline</i>
                    <input 
                    type="password" 
                    placeholder=" Nouveau mot de passe"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
                    <button onClick={()=>PostData()} className="btn waves-effect waves-light #369579 " type="submit" name="action" style={{opacity:"100% !important"}}>Submit
                    </button>

                </div>
            </div>
        </div>
    )
}