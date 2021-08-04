import "./style.css"
import { useState, useEffect } from "react"
import axios from "axios"
import ModalModifierProfile from "./ModalModifierProfile"
import Notifications from "./Notifications"
export default function Index() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(true)

    const [notifications, setNotifications] = useState([])

    const [modifierProfileModalOpen, setModifierProfileModalOpen] = useState(false)
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
                    <div class="profile-img">
                       
                        <img src={`/uploads/profile/clients/${data.pic}`} width="200" alt="Profile Image" />
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
                            <p class="mobile-no"><i class="fa fa-phone"></i> +21653530891</p>
                            <p class="user-mail"><i class="fa fa-envelope"></i> {data.email}</p>
                            <div class="user-bio">
                                <h3>Bio</h3>
                                <p class="bio">
                                    Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                                </p>
                            </div>
                            <div class="profile-btn">
                                <button class="chatbtn" id="chatBtn"><i class="fa fa-comment"></i> Chat</button>
                                <button class="createbtn" id="Create-post"><i class="fa fa-plus"></i> Create</button>
                            </div>

                        </div>

                    </div>
                    <div className="container" >

                        <div class="nav1">
                            <ul>
                                <li  class="user-post active">Notifications</li>

                            </ul>
                        </div>
                        <div  >
                        <Notifications data={notifications} setNotifications={setNotifications} nb={index} setIndex={setIndex} />
                           
                        </div>
                    </div>
                </div>
            </div>
            
<br/>< br/>
            <ModalModifierProfile
                setModal={setModifierProfileModalOpen}
                fetchData={data}
                setData={setData}
                isOpen={modifierProfileModalOpen}
            />
        </>

    )
}



