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







export default function Home() {
    let [screen, setScreen] = useState()
    let [scale, setScale] = useState()
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
                <div id="contact">
                    <Contact />
                </div>
                <Footer />
            </Fragment>
        </div>
    )
}
