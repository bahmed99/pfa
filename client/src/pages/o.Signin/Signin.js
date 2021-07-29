import React , {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import image2 from './o.images/077.PNG'
import Alert from 'react-bootstrap/Alert'


export default function Signin() {
    const History = useHistory()
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
            if(data.error )
            {
                if (password !== "" && email !== "")
                {
                    setError(true)
                    setTimeout(() => setError(false), 2500)
                }
            }
            else
            {
                console.log(data.token)
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2500)
                
                setTimeout(() =>History.push('/home'), 500)
                setTimeout(() =>window.location.reload(), 550)
               
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="firstdiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "95vh",
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
                
                    <div className="card auth-card ">
                        <img alt="" src={image} className="logo-Mod"/>

                            <div>
                                <i class="fa fa-user" style={{color:"#718a8a" , fontSize:"22px",marginRight:"20px" ,}}></i>
                                <input 
                                type="text" 
                                className="input-Mod2"
                                placeholder="Email*"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div>
                                <i class="fa fa-lock" style={{color:"#718a8a" , fontSize:"25px",marginRight:"20px"}}></i>
                                <input 
                                type="password" 
                                className="input-Mod1"
                                placeholder="Mot De Passe*"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <button onClick={()=>PostData()} className="waves-effect" type="submit" name="action" style={{opacity:"100% !important"}}>Se connecter
                            </button>
                            <br />
                            <br />
                            <h6 style={{marginBottom:"50px"}}><Link to='/forgot-password'> Mot de passe oublié ?</Link></h6>

                    </div>
                </div>
            </div>
        </div>
    )
}
