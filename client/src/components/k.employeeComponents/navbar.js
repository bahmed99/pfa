import React from 'react'
import { Dropdown, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import "./navbar.css"
import { faUser, faCog, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar(props) {
    const history = useHistory()
    function Disconnect() {
        localStorage.clear()
        history.push("/")
        window.location.reload();
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
                        <Col><h5 className="whitetext">Username</h5></Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle as="span" bsPrefix="img-dropdown">
                                    <img alt="" className="profile-img-dropdown" src={require("../../assets/images/user.png").default} />
                                </Dropdown.Toggle>
                                <div>
                                    <Dropdown.Menu className="z-depth-1-half dropdown-container" style={{ marginTop: "25px" }}>
                                        <Dropdown.Item href="#/action-1"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faUser} /><p className="dropdown-itm">Profil</p></div></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faCog} /><p className="dropdown-itm">Réglage</p></div></Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={Disconnect}><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faKey} /><p className="dropdown-itm">Déconnexion</p></div></Dropdown.Item>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
