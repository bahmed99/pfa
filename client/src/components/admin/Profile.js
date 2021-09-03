import React, { useState, useEffect } from 'react'

import '../../assets/css/components/utilisateurs/Profile.style.css'
import image1 from './../../pages/Signin/o.images/0004.gif'
//import UpdateProfile from './UpdateProfile'
import { useParams, useHistory } from 'react-router-dom'

import EmploisAdminUtilisateur from '../emplois/EmploisAdminUtilisateur'
import AffectationClient from './AffectationClient'
import Chat from "./chat"
export default function Profile() {

    const History = useHistory()
    const [date, setDate] = useState("")
    const [infoclient, setInfoclient] = useState([])
    const [role, setRole] = useState("")
    const [chat1, setChat1] = useState()
    const [data, setData] = useState([])
    const { id } = useParams()
    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [supprimerSeanceModalOpen, setSupprimerSeanceModalOpen] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3001/admin/admin-utilisateur/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then(result => {
                setData(result.user)
                setRole(result.role)
                if (result.role === 'Employée') {
                    setChat1(result.chat)

                }
                setDate(`${result.user.createdAt[8]}${result.user.createdAt[9]}/${result.user.createdAt[5]}${result.user.createdAt[6]}/${result.user.createdAt[0]}${result.user.createdAt[1]}${result.user.createdAt[2]}${result.user.createdAt[3]}`)
            })

    }, [])

    const deleteClient = () => {
        fetch(`http://localhost:3001/admin/deleteEmployee/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setInfoclient(result)
               
                if (result && result.length > 0) { setAjoutSeanceModalOpen(true) }
                else {History.push('/ressources-humaine')}
            })
       
    }


    if (!chat1 && role === "Employée") {
        return "Loading..."
    }

    return (
        <div>
            <div className="firstdiv" style={{
                backgroundImage: 'url(' + image1 + ')',
                backgroundSize: "cover",
                height: "100vh",
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
                                    {(role === "Client") ? <img src={`/uploads/profile/clients/${data.pic}`} alt="" className="photo-Mod3" />
                                        : (role === "Employée") ? <img src={`/uploads/profile/employes/${data.pic}`} alt="" className="photo-Mod3" />
                                            : <img src={`/uploads/profile/admin/${data.pic}`} alt="" className="photo-Mod3" />}
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
                                        <h5 className="para-Mod1">Téléphone :</h5>
                                        <h5 className="para-Mod1">{data.tel}</h5>
                                    </div>
                                </div>
                                {/* <div>
                                <button className="fa-fa-Mod2" onClick={() => setSupprimerSeanceModalOpen(true)}>
                                    <i class="fa fa-calendar" aria-hidden="true" style={{ color: "white" }} ></i>
                                </button>
                            </div> */}

                                {(role === "Employée" && id !== JSON.parse(localStorage.getItem("user"))._id) ? <div>
                                    <button className="fa-fa-Mod1" onClick={() => deleteClient(id)}>
                                        <i class="fa fa-trash" aria-hidden="true" style={{ color: "white" }} ></i>
                                    </button>
                                </div> : ""}

                            </div>
                            <br />
                      { role==="Client"   ?  <div><hr style={{width:"40%" , margin:"auto"}} />
                        <br />
                        <div style={{display:"flex" , justifyContent:"space-between" , width:"85%" , margin:"auto"}}>
                            <div>
                                <h6>Nombre de séances du code</h6>
                                <h4>{data.seanceCode}/40</h4>
                                <h6>Nombre de séances du code payée</h6>
                                <h4>{data.seanceCodePayee}/40</h4>

                            </div>
                            <div>
                                <h6>Nombre de séances du permis</h6>
                                <h4>{data.seancePermis}/40</h4>
                                <h6>Nombre de séances du permis payée</h6>
                                <h4>{data.seancePermisPayee}/40</h4>
                            </div>
                            <div>
                                <h6>Le montant à payée</h6>
                                <h4>{data.montantAPaye} dt</h4>
                                <h6>Le montant déja payée</h6>
                                <h4>{data.montant} dt</h4>
                            </div>
                        </div></div> :""}

                            {role === "Employée" ? <div style={{ textAlign: "left !important" }}> <Chat id={id} name={data.name} pic={data.pic} Chat={chat1}
                            /> </div> : ""}


                        </div>

                    </div>

                </div>



                {role !== "Admin" ? <div style={{ marginTop: "150px" }}>

                    <EmploisAdminUtilisateur data={data.timetable} />

                </div> : ""}

                {<AffectationClient isOpen={ajoutSeanceModalOpen}
                    setModal={setAjoutSeanceModalOpen}
                    infoclient={infoclient}
                    setInfoclient={setInfoclient}
                    id={id} />}
            </div>

        </div>

    )
}