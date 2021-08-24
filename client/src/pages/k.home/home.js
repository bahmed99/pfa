import React from 'react'
import Navbar from '../../components/a.navbarHome'
//import Apropos from '../../components/k.homeComponents/apropos'
import About from '../../components/k.homeComponents/about'
import Services from '../../components/k.homeComponents/services'
import Equipe from '../../components/k.homeComponents/team'
import Funfact from '../../components/k.homeComponents/Counter'
import Contact from '../../components/k.homeComponents/contact'
import Footer from '../../components/k.footer/footer'
import './home.css'
import { useState, useEffect, Fragment } from 'react'
import ChatBot from "../../components/chatBot/index"
import Programme from '../../components/k.homeComponents/programme'


import { Fade } from 'react-reveal';
import Prix from '../../components/k.homeComponents/Prix'
import Sponsors from '../../components/k.homeComponents/Sponsors'



export default function Home() {
    let [screen, setScreen] = useState()
    let [scale, setScale] = useState()
    let [open, setOpen] = useState(false)
    window.onresize = function () {
        if (window.innerWidth > 1200) {
            setScreen(true)
        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }
    }

    useEffect(() => {


        if (window.innerWidth > 1200) {
            setScreen(true)

        }
        else {
            setScreen(false)
        }
        if (window.innerWidth < 450) {
            setScale(100)

        }
        else {
            setScale(40)
        }

    })

    const [y, setY] = useState('')
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 0) {
            setY('rgba(31, 33, 45,0.3)')
        }
        else {
            setY('rgba(0,0,0,0)')
        }

    })
    return (
        <div className="home">
            <Fragment>
                <Navbar y={y} screen={screen} scale={scale} />
                <ChatBot ></ChatBot>

                <div id="apropos">

                    <About />

                </div>
                <div id="services">
                    <Services />
                </div>
                <Funfact />
                <div id="equipe">
                    <Equipe />
                </div>
                <div id="programme" style={{ backgroundColor: "#b4b4b4" }}>
                    <hr style={{ width: "50%", margin: "auto auto" }} />
                    <Programme />
                </div>
                <div id='offre' style={{ backgroundColor: "#b4b4b4" }}>
                    <hr style={{ width: "50%", margin: "auto auto" }} />
                    <Prix />
                </div>
                <div style={{ backgroundColor: "#b4b4b4" }}>
                    <Sponsors />
                </div>
                <Footer />

            </Fragment>
        </div>
    )
}
