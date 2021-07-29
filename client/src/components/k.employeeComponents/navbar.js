import React from 'react'
import { Dropdown } from 'react-bootstrap'
import "./navbar.css"
import { faUser,faCog, faKey} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar(props) {
    return (
        <>
            <div className={props.closeTester? "Navabar-container-open z-depth-1":"Navabar-container-close z-depth-1"} >
                <div className="navbar-left">
                    {props.button}
                </div>
                <div className="navbar-middle">
                    
                </div>
                <div className="navbar-right">
                    <Dropdown>
                        <Dropdown.Toggle as="span" bsPrefix="img-dropdown">
                            <img alt="" className="profile-img-dropdown" src={require("../../assets/images/logo.png").default}/>
                        </Dropdown.Toggle>
                        <div>
                        <Dropdown.Menu className="z-depth-1-half dropdown-container" style={{marginTop:"25px"}}>
                            <Dropdown.Item href="#/action-1"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faUser}/><p className="dropdown-itm">Profil</p></div></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faCog}/><p className="dropdown-itm">Réglage</p></div></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2"><div className="dropdown-item-container"><FontAwesomeIcon className="dropdown-icon" icon={faKey}/><p className="dropdown-itm">Déconnexion</p></div></Dropdown.Item>
                        </Dropdown.Menu>
                        </div>
                    </Dropdown>
                </div>
            </div> 
        </>
    )
}
