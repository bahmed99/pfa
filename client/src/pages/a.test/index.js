import { useState, useEffect, Fragment } from 'react'
import Navbar from '../../components/a.navbarHome'


export default function Index() {
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

        <Fragment>
            <Navbar y={y} screen={screen} scale={scale} />
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>

            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>

            <h1>eherherh</h1>
            <h1>eherherh</h1>
            <h1>eherherh</h1>
           
        </Fragment>

    )
}
