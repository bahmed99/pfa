import React, { useState, useEffect } from 'react'
import photo from './../../pages/Signin/o.images/user.png'
import '../utilisateur/Profile.style.css'
import { StatusPill } from "./table/Table.js"
import Modifier from './Modifier'
import image1 from './../../pages/Signin/o.images/0004.gif'
//import UpdateProfile from './UpdateProfile'
import { useParams , useHistory } from 'react-router-dom'
import EmploisCar from "../emplois/EmploisCar"
import EmploisAdminUtilisateur from '../emplois/EmploisAdminUtilisateur'




export default function CarProfile() {
   
    const History = useHistory()
    const [date, setDate] = useState("")
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/car/${id}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
        .then(result=>{
            setData(result)
            console.log(data)

            })

    }, [])

    if (!data)
    {
        return ""
    }

    const deleteCar = (id) => {
        fetch(`http://localhost:3001/car/${id}`, {
            method: "delete",
           /* headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }*/
        }).then(res => res.json())
            .then(result => {
            
            })
        
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
                                <h4 style={{ marginTop: "10px", color: "black" }}>{data.model} : {data.serie}</h4>
                            </div>
                            <div style={{ float: "left", marginRight: "auto", marginTop: "auto", marginBottom: "auto" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                                    <h5 className="para-Mod1">Date de la visite technique :</h5>
                                    <h5 className="para-Mod1">{data.technicVisitDate}</h5>
                                </div>
                                <hr style={{ color: 'black', width: "120%", border: "1px" }} />
                                <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                                    <h5 className="para-Mod1">Date de l'assurance :</h5>
                                    <h5 className="para-Mod1">{data.assuranceDate}</h5>
                                </div>
                               
                            </div>
                            <div>
                                
                            </div>
                            <div>
                                <button  className="fa-fa-Mod1" onClick={() => deleteCar(data.id)}>
                                    <i class="fa fa-trash" aria-hidden="true"  style={{ color: "white" }} ></i>
                                </button>
                                <Modifier id={data.id}/>
                            </div>

                        </div>
                        <br />




                    </div>

                </div>

            </div>
            <div style={{ marginTop: "150px" }}>
           
            </div> 

                {/* <UpdateProfile isOpen={ajoutSeanceModalOpen}
                setModal={setAjoutSeanceModalOpen} /> */}
        </div>
    )
}