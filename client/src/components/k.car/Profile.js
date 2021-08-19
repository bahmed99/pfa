import React, { useState, useEffect } from 'react'
import photo from './../../pages/o.Signin/o.images/user.png'
import '../o.utilisateur/Profile.style.css'
import image1 from './../../pages/o.Signin/o.images/0004.gif'
//import UpdateProfile from './UpdateProfile'
import { useParams , useHistory } from 'react-router-dom'

import EmploisAdminUtilisateur from '../a.emplois/EmploisAdminUtilisateur'


export default function Profile() {
   
    const History = useHistory()
    const [date, setDate] = useState("")
    const [data, setData] = useState([])
    const { id } = useParams()
    const [ajoutSeanceModalOpen, setAjoutSeanceModalOpen] = useState(false)
    const [supprimerSeanceModalOpen, setSupprimerSeanceModalOpen] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3001/car/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
        .then(result=>{
            setData(result.car)

            })

    }, [])

    if (!data)
    {
        return ""
    }


    return (
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
                               <img src={data.pic} alt="" className="photo-Mod3" />
                                
                                <h4 style={{ marginTop: "10px", color: "black" }}>{data.model}</h4>
                            </div>
                            <div style={{ float: "left", marginRight: "auto", marginTop: "auto", marginBottom: "auto" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                                    <h5 className="para-Mod1">Model</h5>
                                    <h5 className="para-Mod1">{data.email}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px " }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                                    <h5 className="para-Mod1">Numéro de Série</h5>
                                    <h5 className="para-Mod1">{data.cin}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                                    <h5 className="para-Mod1">Date de la visite technique</h5>
                                    <h5 className="para-Mod1">{date}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
                                    <h5 className="para-Mod1">Téléphone :</h5>
                                    <h5 className="para-Mod1">{data.tel}</h5>
                                </div>
                            </div>
                            <div>
                                <button className="fa-fa-Mod2" onClick={() => setSupprimerSeanceModalOpen(true)}>
                                    <i class="fa fa-calendar" aria-hidden="true" style={{ color: "white" }} ></i>
                                </button>
                            </div>
                            <div>
                                <button className="fa-fa-Mod1">
                                    <i class="fa fa-trash" aria-hidden="true" style={{ color: "white" }} ></i>
                                </button>
                            </div>

                        </div>
                        <br />




                    </div>

                </div>

            </div>
            <div style={{ marginTop: "150px" }}>
                <EmploisAdminUtilisateur data={data.timetable} />
            </div> 

                {/* <UpdateProfile isOpen={ajoutSeanceModalOpen}
                setModal={setAjoutSeanceModalOpen} /> */}
        </div>
    )
}