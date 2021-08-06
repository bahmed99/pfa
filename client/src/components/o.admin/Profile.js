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
        fetch(`http://localhost:3001/admin/admin-utilisateur/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then(result => {
                setData(result)
                setDate(`${result.createdAt[8]}${result.createdAt[9]}/${result.createdAt[5]}${result.createdAt[6]}/${result.createdAt[0]}${result.createdAt[1]}${result.createdAt[2]}${result.createdAt[3]}`)
            })

    }, [])

    console.log(data)
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