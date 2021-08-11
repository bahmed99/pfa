import { useEffect, useState } from 'react'
import { Dropdown, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "./navbar.css"
import axios from "axios"
import { faUser, faCog, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalModifierProfile from './ModalModifierProfile'
import { setDayOfYear } from 'date-fns'

export default function Navbar(props) {
    const [name, setName] = useState("")
    const [pic, setPic] = useState("")
    const [role, setRole] = useState("")
    const [data, setData] = useState()
    const [afficherModel, setAfficherModel] = useState(false)
    const id = JSON.parse(localStorage.getItem("user"))._id
    useEffect(() => {
        axios.get(`http://localhost:3001/navbar/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }

        }).then(res => {
            setPic(res.data.user.pic)
            setRole(res.data.role)
            setName(res.data.user.name)
            setData(res.data.user)
            
        })

    }, [])

    const history = useHistory()
    if(!data){
        return ""
    }
    function Disconnect() {
        localStorage.clear()
        history.push("/")
        window.location.reload();
    }

    function GoProfile(){
        // eslint-disable-next-line no-template-curly-in-string
        history.push(`/utilisateur-profile/${id}`)

    }
    return (
        <>
            <div className={props.closeTester ? "Navabar-container-open z-depth-1" : "Navabar-container-close z-depth-1"} >
                <div className="navbar-left">
                    {props.button}
                </div>
                <div className="navbar-middle">

                </div>
                <div className="navbar-right">
                    <Row>
                        <Col><h6 className="whitetext">{name}</h6></Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle as="span" bsPrefix="img-dropdown">
                                     {role === "admin" ? <img alt="" className="profile-img-dropdown" src={`./uploads/profile/admin/${pic}`} /> : <img alt="" className="profile-img-dropdown" src={`./uploads/profile/employes/${pic}`} />}                                
                                    </Dropdown.Toggle> 
                                <div>
                                    <Dropdown.Menu className="z-depth-1-half dropdown-container" style={{ marginTop: "25px" }}>
                                        <Dropdown.Item ><div className="dropdown-item-container" onClick={GoProfile}><FontAwesomeIcon className="dropdown-icon" icon={faUser} /><p className="dropdown-itm">Profile</p></div></Dropdown.Item>
                                        <Dropdown.Item ><div className="dropdown-item-container" onClick={()=>setAfficherModel(true)}><FontAwesomeIcon className="dropdown-icon" icon={faCog} /><p className="dropdown-itm">Réglage</p></div></Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={Disconnect}><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faKey} /><p className="dropdown-itm">Déconnexion</p></div></Dropdown.Item>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            </div>
            <ModalModifierProfile  fetchData={data} setName={setName}  setModal={setAfficherModel}  isOpen={afficherModel}  role={role}/>
        </>
    )
}
