import React , {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import image1 from '../../o.Signin/o.images/backgroundavis.PNG'
import photo from "../../o.Signin/o.images/feedback.gif"
import './Avis.style.css'


export default function Avis() {
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [message,setMessage]=useState('')
    const [vote,setVote]=useState(0)
    const PostData = () =>{
        fetch("http://localhost:3001/client/avis",{
            method:"post",
            headers:{
                "Content-Type":"application/json" ,
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                message ,
                vote 
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error)
            {
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                setError(true)
                setTimeout(() => setError(false), 2500)
            }
            else
            {
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2500)
                setMessage("")
                setOpacity1('40%')
                setFsize1('1.5rem')
                setOpacity2('40%')
                setFsize2('1.5rem')
                setOpacity3('40%')
                setFsize3('1.5rem')
                setOpacity4('40%')
                setFsize4('1.5rem')
                setOpacity5('40%')
                setFsize5('1.5rem')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    const [opacity1,setOpacity1]= useState('40%')
    const [prevoir,setPrevoir]= useState(0)
    const [fsize1,setFsize1]=useState('1.5rem')
    function Change1()
    {
        setOpacity1('100%')
        setFsize1('2.5rem')
        setOpacity2('40%')
        setFsize2('1.5rem')
        setOpacity3('40%')
        setFsize3('1.5rem')
        setOpacity4('40%')
        setFsize4('1.5rem')
        setOpacity5('40%')
        setFsize5('1.5rem')
        setPrevoir(1)
        setVote(1)
    }
    const [opacity2,setOpacity2]= useState('40%')
    const [fsize2,setFsize2]=useState('1.5rem')
    function Change2()
    {
        setOpacity1('40%')
        setFsize1('1.5rem')
        setOpacity2('100%')
        setFsize2('2.5rem')
        setOpacity3('40%')
        setFsize3('1.5rem')
        setOpacity4('40%')
        setFsize4('1.5rem')
        setOpacity5('40%')
        setFsize5('1.5rem')
        setPrevoir(1)
        setVote(2)
    }
    const [opacity3,setOpacity3]= useState('40%')
    const [fsize3,setFsize3]=useState('1.5rem')
    function Change3()
    {
        setOpacity1('40%')
        setFsize1('1.5rem')
        setOpacity2('40%')
        setFsize2('1.5rem')
        setOpacity3('100%')
        setFsize3('2.5rem')
        setOpacity4('40%')
        setFsize4('1.5rem')
        setOpacity5('40%')
        setFsize5('1.5rem')
        setPrevoir(1)
        setVote(3)
    }
    const [opacity4,setOpacity4]= useState('40%')
    const [fsize4,setFsize4]=useState('1.5rem')
    function Change4()
    {
        setOpacity1('40%')
        setFsize1('1.5rem')
        setOpacity2('40%')
        setFsize2('1.5rem')
        setOpacity3('40%')
        setFsize3('1.5rem')
        setOpacity4('100%')
        setFsize4('2.5rem')
        setOpacity5('40%')
        setFsize5('1.5rem')
        setPrevoir(1)
        setVote(4)
    }
    const [opacity5,setOpacity5]= useState('40%')
    const [fsize5,setFsize5]=useState('1.5rem')
    function Change5()
    {
        setOpacity1('40%')
        setFsize1('1.5rem')
        setOpacity2('40%')
        setFsize2('1.5rem')
        setOpacity3('40%')
        setFsize3('1.5rem')
        setOpacity4('40%')
        setFsize4('1.5rem')
        setOpacity5('100%')
        setFsize5('2.5rem')
        setPrevoir(1)
        setVote(5)
    }

    function stable()
    {
        if(prevoir === 0)
        {
            setOpacity1('40%')
            setFsize1('1.5rem')
            setOpacity2('40%')
            setFsize2('1.5rem')
            setOpacity3('40%')
            setFsize3('1.5rem')
            setOpacity4('40%')
            setFsize4('1.5rem')
            setOpacity5('40%')
            setFsize5('1.5rem')
        }

    }
    function Change11()
    {
        if(prevoir === 0)
        {
            setOpacity1('100%')
            setFsize1('2.5rem')
            setOpacity2('40%')
            setFsize2('1.5rem')
            setOpacity3('40%')
            setFsize3('1.5rem')
            setOpacity4('40%')
            setFsize4('1.5rem')
            setOpacity5('40%')
            setFsize5('1.5rem')
        }
    }
    function Change22()
    {
        if(prevoir === 0)
        {
            setOpacity1('40%')
            setFsize1('1.5rem')
            setOpacity2('100%')
            setFsize2('2.5rem')
            setOpacity3('40%')
            setFsize3('1.5rem')
            setOpacity4('40%')
            setFsize4('1.5rem')
            setOpacity5('40%')
            setFsize5('1.5rem')
        }
    }

    function Change33()
    {
        if(prevoir === 0)
        {
            setOpacity1('40%')
            setFsize1('1.5rem')
            setOpacity2('40%')
            setFsize2('1.5rem')
            setOpacity3('100%')
            setFsize3('2.5rem')
            setOpacity4('40%')
            setFsize4('1.5rem')
            setOpacity5('40%')
            setFsize5('1.5rem')
        }
    }

    function Change44()
    {
        if(prevoir === 0)
        {
            setOpacity1('40%')
            setFsize1('1.5rem')
            setOpacity2('40%')
            setFsize2('1.5rem')
            setOpacity3('40%')
            setFsize3('1.5rem')
            setOpacity4('100%')
            setFsize4('2.5rem')
            setOpacity5('40%')
            setFsize5('1.5rem')
        }
    }
    function Change55()
    {
        if(prevoir === 0)
        {
            setOpacity1('40%')
            setFsize1('1.5rem')
            setOpacity2('40%')
            setFsize2('1.5rem')
            setOpacity3('40%')
            setFsize3('1.5rem')
            setOpacity4('40%')
            setFsize4('1.5rem')
            setOpacity5('100%')
            setFsize5('2.5rem')
        }
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
            <Alert show={error} variant={'danger'} style={{maxWidth:"450px",margin:"auto auto"}}>
                    { "Veuillez remplir tous les champs"}
            </Alert>
            <Alert show={success} variant={'success'} style={{maxWidth:"450px",margin:"auto auto"}}>
                    { "Message Envoyé"}
            </Alert>
            <br />
           
            <div className="mycard">
                
                <div className="card auth-card55 input-field #fafafa grey lighten-5">
                    <img alt="" src={photo} className="photo-Model"/>
                    <br />
                    <p className="parag-Mod">Choisir un émoji pour exprimer votre taux de satisfaction : </p>
                    <div class="container-Mod">
                        <p className="item" style={{opacity:opacity1 , fontSize:fsize1}} onClick={()=>Change1()} onMouseEnter={()=>Change11()} onMouseLeave={()=>stable()}>🤬</p>
                        <p className="item" style={{opacity:opacity2 , fontSize:fsize2}} onClick={()=>Change2()} onMouseEnter={()=>Change22()} onMouseLeave={()=>stable()}>🙁</p>
                        <p className="item" style={{opacity:opacity3 , fontSize:fsize3}} onClick={()=>Change3()} onMouseEnter={()=>Change33()} onMouseLeave={()=>stable()}>😶</p>
                        <p className="item" style={{opacity:opacity4 , fontSize:fsize4}} onClick={()=>Change4()} onMouseEnter={()=>Change44()} onMouseLeave={()=>stable()}>😁</p>
                        <p className="item" style={{opacity:opacity5 , fontSize:fsize5}} onClick={()=>Change5()} onMouseEnter={()=>Change55()} onMouseLeave={()=>stable()}>😍</p>
                    </div>
                    <p className="parag-Mod">Ecrire votre avis ici : </p>
                    <br />
                    <textarea
                      placeholder=""
                      className="textArea-Mod"
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)} />
                    <br />
                    <button onClick={()=>PostData()} className="waves-effect225" type="submit" name="action">Envoyer 
                    <i class="fa fa-paper-plane" aria-hidden="true" style={{marginLeft:"5px"}}></i>
                    </button>
                    <br />
                    
                </div>
            </div>
        </div>
    )
}