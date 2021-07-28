import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import Alert from 'react-bootstrap/Alert'

export default function Reset() {
    const History = useHistory()
    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const PostData = () =>{
        fetch("http://localhost:3001/auth/mdpOublier",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email ,
            })
        }).then(res=>res.json())
        .then(data=>{
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
                    { "Aucun utilisateur avec ce mail"}
            </Alert>
            <Alert show={success} variant={'success'} style={{width:"700px",margin:"auto auto"}}>
                    { "visiter votre mail"}
            </Alert>
            <br />
            <div className="mycard">
            
                <div className="card auth-card112 input-field #fafafa grey lighten-5">
                    <img alt="" src={image} className="logo-Mod"/>
                    <i className="material-icons firstOne1 prefix" style={{color:"#3d3e42"}} >person_outline</i>
                    <input 
                    type="text" 
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <button onClick={()=>PostData()} className="btn waves-effect waves-light #369579 " type="submit" name="action" style={{opacity:"100% !important"}}>submit
                    </button>
                </div>
            </div>
        </div>
    )
}