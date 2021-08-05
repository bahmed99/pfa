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
            setNotifications(res.data.notifications)
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
            <div class="containerProfile">
                <div class="profile-header  ">



                    <div class="profile-img " >

                        <img src={`/uploads/profile/clients/${pic}`} width="200" alt="ProfileImage" className="profile-pic" />
                       
                    </div>




                    <div class="profile-nav-info">
                        <h3 class="user-name">{data.name}</h3>

                        <div class="address">
                            <p id="state" class="state">Tunis</p>
                        </div>

                    </div>
                    <div class="profile-option">
                        <div class="notification">
                            <i class="fa fa-bell"></i>
                            <span class="alert-message">{index}</span>
                            
                        </div>
                    </div>
                </div>
                

                <div class="main-bd">
                    <div class="left-side">
                        <div class="profile-side">
                            <p class="mobile-no"><i class="fa fa-phone"></i> +216{data.tel}</p>
                            <p class="user-mail"><i class="fa fa-envelope"></i> {data.email}</p>
                            <p class="user-mail"><i class="fa fa-child"></i> {data.age}</p>
                            <p class="user-mail"><i class="fa fa-sign-in"></i> {`${data.createdAt[8]}${data.createdAt[9]}/${data.createdAt[5]}${data.createdAt[6]}/${data.createdAt[0]}${data.createdAt[1]}${data.createdAt[2]}${data.createdAt[3]}`}</p>
                            <p class="user-mail"><i class="fa fa-address-card"></i> {"Tunis"}</p>
                           
                            <div class="profile-btn">
                                <button class="chatbtn" id="chatBtn" onClick={() => setModifierImageProfileModalOpen(true)}><i class="fa fa-user-circle-o"></i> Image</button>
                                <button class="createbtn" id="Create-post" onClick={() => setModifierProfileModalOpen(true)}><i class="fas fa-edit" ></i> Modifier</button>
                            </div>

                        </div>

                    </div>
                    <div className="container" >

                        <div class="nav1">
                            <ul>
                                <li class="user-post active">Notifications</li>

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



