import "./style.css"

import { useState, useEffect } from "react"
import axios from "axios"
import ModalModifierProfile from "./ModalModifierProfile"
import ModalModifierImageProfile from "./ModalModifierImageProfile"
import Notifications from "./Notifications"
export default function Index() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(true)
    const [pic, setPic] = useState('')
    const [notifications, setNotifications] = useState([])

    const [modifierProfileModalOpen, setModifierProfileModalOpen] = useState(false)
    const [modifierImageProfileModalOpen, setModifierImageProfileModalOpen] = useState(false)
    const [selectInfoData, setSelectInfoData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/client/client", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => {
            setData(res.data)
            setNotifications(res.data.notifications.reverse())
            setIndex(res.data.notifications.length)
            setPic(res.data.pic)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return "Loading..."
    }

  

    return (
        <>
            <div className="containerProfile">
                <div className="profile-header  ">
                    <div className="profile-img " >
                        <img src={`/uploads/profile/clients/${pic}`} width="200" alt="ProfileImage" className="profile-pic" />
                    </div>

                    <div className="profile-nav-info">
                        <h3 className="user-name">{data.name}</h3>
                        <div className="address">
                            <p id="state" className="state">Tunis</p>
                        </div>
                    </div>
                    <div className="profile-option">
                        <div className="notification">
                            <i className="fa fa-bell"></i>
                            <span className="alert-message">{index}</span>

                        </div>
                    </div>
                </div>


                <div className="main-bd">
                    <div className="left-side">
                        <div className="profile-side">
                            <p className="mobile-no"><i className="fa fa-phone"></i> +216{data.tel}</p>
                            <p className="user-mail"><i className="fa fa-envelope"></i> {data.email}</p>
                            <p className="user-mail"><i className="fa fa-child"></i> {data.age}</p>
                            <p className="user-mail"><i className="fa fa-sign-in"></i> {`${data.createdAt[8]}${data.createdAt[9]}/${data.createdAt[5]}${data.createdAt[6]}/${data.createdAt[0]}${data.createdAt[1]}${data.createdAt[2]}${data.createdAt[3]}`}</p>
                            <p className="user-mail"><i className="fa fa-address-card"></i> {"Tunis"}</p>
                            <p className="user-mail"><i className="fa fa-book"></i> Séances du code : {data.seanceCode}/40</p>
                            <p className="user-mail"><i className="fa fa-money"></i> Séances du code payée : {data.seanceCodePayee}/40</p>
                            <p className="user-mail"><i className="fa fa-car"></i> Séances du permis : {data.seancePermis}/40</p>
                            <p className="user-mail"><i className="fa fa-money"></i> Séances du permis payée : {data.seancePermisPayee}/40</p>
                            <p className="user-mail"><i className="fa fa-money"></i> Montant : {data.montant} dt</p>

                            <div className="profile-btn">
                                <button className="chatbtn" id="chatBtn" onClick={() => setModifierImageProfileModalOpen(true)}><i className="fa fa-user-circle-o"></i> Image</button>
                                <button className="createbtn" id="Create-post" onClick={() => setModifierProfileModalOpen(true)}><i className="fas fa-edit" ></i> Modifier</button>
                            </div>

                        </div>

                    </div>
                    <div className="container" >

                        <div className="nav1">
                            <ul>
                                <li className="user-post active">Notifications</li>

                            </ul>
                        </div>
                        <div  >
                            <Notifications data={notifications} setNotifications={setNotifications} nb={index} setIndex={setIndex}
                                pic={pic}

                            />

                        </div>
                    </div>
                </div>
            </div>

            <br />< br />
            <ModalModifierProfile
                setModal={setModifierProfileModalOpen}
                fetchData={data}
                setData={setData}
                isOpen={modifierProfileModalOpen}
            />
            <ModalModifierImageProfile
                setModal={setModifierImageProfileModalOpen}
                fetchData={pic}
                setData={setPic}
                isOpen={modifierImageProfileModalOpen}
            />
        </>

    )
}



