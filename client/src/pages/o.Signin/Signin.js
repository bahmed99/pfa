import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './Signin.style.css'
import image from './o.images/0.png'
import image1 from './o.images/011.gif'
import M from 'materialize-css'


export default function Signin() {
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
                M.toast({html:data.error,classes:"#e53935 red darken-1"})
            }
            else
            {
                M.toast({html:"Signedin success",classes:"#43a047 green darken-1"})
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
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
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
                    <h6 style={{marginBottom:"50px"}}><Link to='/signup'> Mot de passe oublier ?</Link></h6>
                </div>
            </div>
        </div>
    )
}
