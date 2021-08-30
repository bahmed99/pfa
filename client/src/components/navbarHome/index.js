import { useState } from 'react'
import { Link } from 'react-scroll'
import { Container } from 'react-bootstrap'
import Animation from './Animation.js'
import { Link as RouterLink } from "react-router-dom";
import Welcome from '../k.homeComponents/welcome'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import "./navbar.css"

export default function Navbar(props) {

    const [visible, setVisible] = useState([false, false]);
    const showDrawer = () => {
        setVisible([true, true]);
    };
    return (
        <div>
            <div className='bar' style={{ backgroundColor: props.y, display: visible[1] && !props.screen ? 'none' : '' }}>
                <Link to="accueil" spy={true} smooth={true}><img style={{ cursor: 'pointer' ,marginLeft: "60px" }} src={require("../../assets/images/logoBlanc.png").default} alt="logo-evenement" className='logo' /></Link>
                <Container>
                    <ul className="list" style={{ display: props.screen ? '' : 'none' }}>
                        <li className="list-e"><Link activeClass="active" to="apropos" spy={true} smooth={true}>À propos</Link></li>
                        <li className="list-e"><Link activeClass="active" to="services" spy={true} smooth={true}>Nos Services</Link></li>
                        <li className="list-e"><Link activeClass="active" to="equipe" spy={true} smooth={true}>Notre Équipe</Link></li>
                        <li className="list-e"><Link activeClass="active" to="programme" spy={true} smooth={true}>Programme</Link></li>
                        <li className="list-e"><Link activeClass="active" to="offre" spy={true} smooth={true}>Nos Offres</Link></li>
                        <li className="list-e"><RouterLink to="/sign-in" style={{ color: 'white' }}>Se Connecter</RouterLink></li>
                    </ul>
                </Container>
               
                <button onClick={showDrawer} className='btn-menu' style={{ fontSize: '30px', color: "white", position: 'absolute', right: '5px', top: '10%', display: props.screen ? 'none' : '' }}><i style={{ height: '180%' }} className="fa fa-bars"></i></button>
            </div>


            <Animation
                type={visible[0] ? 'fadeInRight' : 'fadeOutRight'}
                duration={0.5}
                obj={<ClickAwayListener onClickAway={(event) => { if (event.path[0].className !== 'fa fa-bars') { setVisible([false, false]); setTimeout(() => setVisible([false, false]), 250); } }}>
                    <div className='mobile-menu' style={{ display: visible[1] && !props.screen ? '' : 'none', marginLeft: (100 - props.scale) + '%', width: props.scale + '%' }}>
                        <button className='btn-menu' onClick={() => { setVisible([false, true]); setTimeout(() => setVisible([false, false]), 250); }} style={{ fontSize: '30px', color: "white", position: 'absolute', right: '10px' }}> <i className="fa fa-times"></i></button>
                        <ul className="list-m" >
                            <li className="list-e-m"><Link activeClass="active" to="accueil" spy={true} smooth={true}>Accueil</Link></li>
                            <li className="list-e-m"><Link activeClass="active" to="apropos" spy={true} smooth={true}>À propos</Link></li>
                            <li className="list-e-m"><Link activeClass="active" to="services" spy={true} smooth={true}>Nos Services</Link></li>
                            <li className="list-e-m"><Link activeClass="active" to="equipe" spy={true} smooth={true}>Notre Équipe</Link></li>
                            <li className="list-e-m"><Link activeClass="active" to="programme" spy={true} smooth={true}>Programme</Link></li>
                            <li className="list-e-m"><Link activeClass="active" to="offre" spy={true} smooth={true}>Nos Offre</Link></li>
                            <li className="list-e-m"><RouterLink to="/sign-in" style={{ color: 'white' }}>Se Connecter</RouterLink></li>
                        </ul>
                    </div>
                </ClickAwayListener>} />
                <div className="video-text" style={{textAlign:"center"}} id="accueil">
                    <Welcome />
                </div>
        </div>
    )
}
