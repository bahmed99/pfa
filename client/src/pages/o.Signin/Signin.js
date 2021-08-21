import React , {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import image2 from './o.images/077.PNG'
import Alert from 'react-bootstrap/Alert'
import ReactLoading from 'react-loading';


export default function Signin() {
    const History = useHistory()
    const [loading,setLoading]=useState(false)
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [payee,setPayee] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const PostData = () =>{
        setLoading(true)
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

            if(data.error )
            {
                setLoading(false)
                if (password !== "" && email !== "")
                {
                    setError(true)
                    setTimeout(() => setError(false), 2500)
                }
            }
            // else if (data.user.status === "Payé")
            else
            {
                if (data.detect === 2)
                {
                    setLoading(false)
              
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    localStorage.setItem("detect",data.detect)
                    setSuccess(true)
                    setTimeout(() => setSuccess(false), 2500)

                    setTimeout(() => History.push('/home'), 500)
                }
                else if (data.detect === 1 && data.user.status === "Payé")
                {
                    setLoading(false)
           
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    localStorage.setItem("detect",data.detect)
                    setSuccess(true)
                    setTimeout(() => setSuccess(false), 2500)

                    setTimeout(() => History.push('/home'), 500)

                }
                else
                {
                    setPayee(true)
                    setTimeout(() => setPayee(false), 2500)
                }
                setTimeout(() =>window.location.reload(), 2000)
               
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="firstdiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "90vh",
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
            <Alert show={payee} variant={'danger'} style={{width:"700px",margin:"auto auto"}}>
                    { "Il faut Payer pour se connecter"}
            </Alert>
            <div className="second-div">
                    <img alt="" src={image2} className="photo-Mod"/>
                <div className="mycard">
                
                    <div className="card auth-card ">
                        <img alt="" src={image} className="logo-Mod"/>

                            <div style={{display:"flex"}}>
                                <i class="fa fa-user" style={{color:"#718a8a" , fontSize:"22px"  , marginLeft:"30px" , marginTop:"20px"}}></i>
                                <input 
                                type="text" 
                                className="input-input-Mod2"
                                placeholder="Email*"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div style={{display:"flex"}}>
                                <i class="fa fa-lock" style={{color:"#718a8a" , fontSize:"25px" , marginLeft:"30px" , marginTop:"20px"}}></i>
                                <input 
                                type="password" 
                                className="input-input-Mod1"
                                placeholder="Mot de passe*"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <button onClick={()=>PostData()} className="waves-effect505" type="submit" name="action" style={{opacity:"100% !important",backgroundColor:loading? "#66CDAA" :''}} disabled={loading}>{loading? <ReactLoading height={'20px'} width={'24px'} className="loading1" type="spin"/>:"Se connecter"}
                            </button>
                            <h6 style={{marginBottom:"50px"}}><Link to='/forgot-password'> Mot de passe oublié ?</Link></h6>

                    </div>
                </div>
            </div>
        </div>
    )
}
