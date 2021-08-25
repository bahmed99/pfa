import React, { useState, useEffect } from 'react'
import photo from './../../pages/o.Signin/o.images/user.png'
import './Profile.style.css'
import image1 from './../../pages/o.Signin/o.images/0004.gif'
import UpdateProfile from './UpdateProfile'
import { useParams, useHistory } from 'react-router-dom'
import { date } from 'date-arithmetic'
import EmploisClientUtilisateur from '../a.emplois/EmploisClientUtilisateur'
import ModalSupprimerSeance from '../a.emplois/ModalSupprimerSeance'

import Chat from './chat'

export default function Profile() {
    const History = useHistory()
    const [date, setDate] = useState("")
    const [data, setData] = useState([])
    const [status,setStatus] = useState("")
    const { id } = useParams()
    const [selectedGroupe, setSelectedGroupe] = useState(null)
    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [supprimerSeanceModalOpen, setSupprimerSeanceModalOpen] = useState(false)
    const [selectInfoData, setSelectInfoData] = useState(null);

    const [chat1 , setChat1] = useState()



    useEffect(() => {
        fetch(`http://localhost:3001/employe/employee-client/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then(result => {
                setData(result.result)
                setChat1(result.result1._id)
                //setChat(result.Chat)
                setDate(`${result.result.createdAt[8]}${result.result.createdAt[9]}/${result.result.createdAt[5]}${result.result.createdAt[6]}/${result.result.createdAt[0]}${result.result.createdAt[1]}${result.result.createdAt[2]}${result.result.createdAt[3]}`)
            })
    }, [])


    const deleteClient = (id) => {
        fetch(`http://localhost:3001/employe/deleteClient/${id}`, {
            method: "delete",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
            
            })
        setTimeout(() => History.push('/utilisateurs'), 1000)
        // fetch("http://localhost:3001/employe/employee-clients",{
        // headers:{
        //     "Content-Type":"application/json" ,
        //     "Authorization":"Bearer "+localStorage.getItem("jwt")
        // }
        // }).then(res=>res.json())
        // .then(result1=>{
        //     setData(result1)
        // })
    }

    const ChangeStatus = (id) =>{
        fetch(`http://localhost:3001/employe/updateStatus/${id}`, {
            method: "put",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setStatus(result)
            setTimeout(() =>window.location.reload(), 500)
        })
    }

    if(!chat1){
        return "Loading..."
    }


    return (
        <div className="firstdiv" style={{
            backgroundImage: 'url(' + image1 + ')',
            backgroundSize: "cover",
            height: "120vh",
            backgroundPosition: "center !important",
        }}>
            <br />
            <div className="second-div1">
                <br />
                <div className="mycard1" >
                    <div className="card auth-card-Mod-style1" >
                        <br />
                        <div style={{ display: "flex" }} >

                            <div style={{ float: "left !important", marginRight: "auto", marginTop: "auto", marginBottom: "auto", marginLeft: "80px" }} >
                                <img src={`/uploads/profile/clients/${data.pic}`} alt="" className="photo-Mod3" />
                                <h4 style={{ marginTop: "10px", color: "black" }}>{data.name}</h4>
                            </div>
                            <div style={{ float: "left", marginRight: "auto", marginTop: "auto", marginBottom: "auto" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                                    <h5 className="para-Mod1">Email :</h5>
                                    <h5 className="para-Mod1">{data.email}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px " }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                                    <h5 className="para-Mod1">Cin :</h5>
                                    <h5 className="para-Mod1">{data.cin}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                                    <h5 className="para-Mod1">Date d'inscription :</h5>
                                    <h5 className="para-Mod1">{date}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
                                    <h5 className="para-Mod1">Telephone :</h5>
                                    <h5 className="para-Mod1">{data.tel}</h5>
                                    
                                </div>
                                
                            </div>
                            
                            <div>
                                <button className="fa-fa-Mod2" onClick={() => setSupprimerSeanceModalOpen(true)}>
                                    <i class="fa fa-calendar" aria-hidden="true" style={{ color: "white" }} ></i>
                                </button>
                            </div>
                            <div>
                                <button className="fa-fa-Mod1" onClick={() => deleteClient(id)}>
                                    <i class="fa fa-trash" aria-hidden="true" style={{ color: "white" }} ></i>
                                </button>
                            </div>

                        </div>
                        {(data.status === "Payé")?<button className="button-Mod-Style" onClick={() => ChangeStatus(id)}>Payé</button>
                        :(data.status === "Non payé")?<button className="button-Mod-Style1" onClick={() => ChangeStatus(id)}>Non Payée</button>
                        :""}
                        
                        <br />
                        <hr style={{width:"40%" , margin:"auto"}} />
                        <br />
                        <div style={{display:"flex" , justifyContent:"space-between" , width:"85%" , margin:"auto"}}>
                            <div>
                                <h6>Nombre de séances du code</h6>
                                <h4>{data.seanceCode}/40</h4>
                                <h6>Nombre de séances du code payée</h6>
                                <h4><span style={{color:"red" , cursor:"pointer"}}>-</span> {data.seanceCodePayee}/40 <span style={{color:"green", cursor:"pointer"}}>+</span></h4>

                            </div>
                            <div>
                                <h6>Nombre de séances du permis</h6>
                                <h4>{data.seancePermis}/40</h4>
                                <h6>Nombre de séances du permis payée</h6>
                                <h4><span style={{color:"red" , cursor:"pointer"}}>-</span> {data.seancePermisPayee}/40 <span style={{color:"green" , cursor:"pointer"}}>+</span></h4>
                            </div>
                            <div>
                                <h6>le montant à payée</h6>
                                <h4>200 000 dt</h4>
                                <h6>le montant déja payée</h6>
                                <h4>{data.montant} dt</h4>
                            </div>
                        </div>
                        <br />
                    </div>
                   
                </div>

            </div>

            <div style={{ marginTop: "150px" }}>
                <EmploisClientUtilisateur dataUtilisateur={data} setDataUtilisateur={setData} id={id} supprimerSeanceModalOpen={supprimerSeanceModalOpen} setSupprimerSeanceModalOpen={setSupprimerSeanceModalOpen} />
            </div>          <UpdateProfile isOpen={ajoutSeanceModalOpen}
                setModal={setAjoutSeanceModalOpen} />


            <Chat id={id} pic={data.pic} name={data.name}  Chat={chat1} />

          

        </div>
    )
}
