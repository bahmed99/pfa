import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../../assets/css/pages/Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/01234.gif'
import Alert from 'react-bootstrap/Alert'
import ReactLoading from 'react-loading';


export default function Reset() {
    const History = useHistory()
    const [loading,setLoading]=useState(false)
    const [email,setEmail] = useState('')
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const PostData = () =>{
        setLoading(true)
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
            { setLoading(false)
                setError(true)
                setTimeout(() => setError(false), 2500)
            }
            else
            {
                setLoading(false)
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2500)
                setInterval(function(){ History.push('/sign-in') }, 2000);
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="trydiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "90vh",
            color: "#f5f5f5"
          }}>
            <br /> 
            <Alert show={error} variant={'danger'} style={{width:"450px",margin:"auto auto"}}>
                    { "Aucun utilisateur avec ce mail"}
            </Alert>
            <Alert show={success} variant={'success'} style={{width:"450px",margin:"auto auto"}}>
                    { "visiter votre mail"}
            </Alert>
            <br />
            <div className="mycard">
            
                <div className="card auth-card112 input-field ">
                    <img alt="" src={image} className="logo-Mod"/>
                    <div style={{justifyContent:"center"}}>
                        <i class="fa fa-user" style={{color:"#718a8a" , fontSize:"22px",marginLeft:"-20px" }}></i>
                        <input 
                        type="text"
                        className="input-Mod3"
                        placeholder="Email*"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <br />
                    <button onClick={()=>PostData()} className="waves-effect12 " type="submit" name="action"  style={{opacity:"100% !important",backgroundColor:loading? "#66CDAA" :''}} disabled={loading}>{loading? <ReactLoading height={'20px'} width={'24px'} className="loading1" type="spin"/>:"Envoyer"}
                    </button>
                    <br />
                </div>
            </div>
        </div>
    )
}