import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import image2 from './o.images/077.PNG'
import Alert from 'react-bootstrap/Alert'


export default function Signin() {
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const PostData = () =>{
        fetch("http://localhost:3001/auth/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email ,
                password 
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
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="firstdiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5" ,
            backgroundAttachment:"fixed" ,
            backgroundPosition: "center" ,
          }}>
            <br />
            <Alert show={error} variant={'danger'} style={{width:"700px",margin:"auto auto"}}>
                    { "Aucun utilisateur existant avec ce mail"}
            </Alert>
            <Alert show={success} variant={'success'} style={{width:"700px",margin:"auto auto"}}>
                    { "Connection reussite"}
            </Alert>
            <div className="second-div">
                    <img alt="" src={image2} className="photo-Mod"/>
                <div className="mycard">
                
                    <div className="card auth-card input-field #fafafa grey lighten-5">
                        <img alt="" src={image} className="logo-Mod"/>
                        <i className="material-icons firstOne prefix" style={{color:"#3d3e42"}} >person_outline</i>
                        <i className="material-icons secondOne prefix" style={{color:"#3d3e42"}}>lock_outline</i>
                        <input 
                        type="text" 
                        placeholder="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} />
                        <input 
                        type="password" 
                        placeholder="mot de passe"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
                        <button onClick={()=>PostData()} className="btn waves-effect waves-light #369579 " type="submit" name="action" style={{opacity:"100% !important"}}>Login
                        </button>
                        <br />
                        <br />
                        <h6 style={{marginBottom:"50px"}}><Link to='/oussama1'> Mot de passe oublié ?</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
