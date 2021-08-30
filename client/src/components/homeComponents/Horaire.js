import {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Horaire() {
    const [section1, setSection1] = useState("")
    const [section2, setSection2] = useState("none")
    const [section3, setSection3] = useState("none")

    return (
        <>
            <div className="horaires">
                <div className="container">
                    <h1 className="title1">Nos Horaires</h1>
                    <div className="contenu-horaire">
                        <div className="col-md-3">
                            <div className="left-horaire">
                                <ul>
                                    <li><button onClick={()=>{ setSection1('');setSection2('none');setSection3('none')}} className={`btnHoraire btn-horaire ${section1===''?"active":''} `} >L'Accueil</button></li>
                                    <li><button onClick={()=>{ setSection1('none');setSection2('block');setSection3('none')}} className={`btnHoraire btn-horaire ${section2==='block'?"active":''} `} >Séance de code</button></li>
                           
                                    <li><button onClick={()=>{ setSection1('none');setSection2('none');setSection3('block')}} className={`btnHoraire btn-horaire ${section3==='block'?"active":''} `} >Leçons de conduite</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-11">
                            <div className="right-horaire" >
                                <div className="detail-horaire active" style={{display:section1}}>
                                    <ul className="list-inline">
                                        <li><i>Lundi</i><br /><span>08h-00h 18h-19h30</span></li>
                                        <li><i>Mardi</i><br /><span>08h-00h 18h-20h</span></li>
                                        <li><i>Mercredi</i><br /><span>08h-11h 18h-19h30</span></li>
                                        <li><i>Jeudi</i><br /><span>08h-00h 15h-18h30</span></li>
                                        <li><i>Vendredi</i><br /><span>08h-11h 18h-20h</span></li>
                                        <li><i>Samedi</i><br /><span>8H00 à 12H30</span></li>

                                    </ul>
                                </div>
                                <div className="detail-horaire" style={{display:section2}}>
                                    <ul className="list-inline">
                                        <li><i>Lundi</i><br /><span>09h-11h 15h-19h30</span></li>
                                        <li><i>Mardi</i><br /><span>09h-11h 15h-20h</span></li>
                                        <li><i>Mercredi</i><br /><span>09h-11h 15h-19h30</span></li>
                                        <li><i>Jeudi</i><br /><span>09h-11h 15h-19h30</span></li>
                                        <li><i>Vendredi</i><br /><span>09h-11h 15h-20h</span></li>
                                        <li><i>Samedi</i><br /><span>10H00 à 12H30</span></li>

                                    </ul>
                                </div>
                                <div className="detail-horaire" style={{display:section3}}>
                                    <ul className="list-inline">
                                        <li><i>Lundi</i><br /><span>07h-13h 18h-00h</span></li>
                                        <li><i>Mardi</i><br /><span>07h-13h 18h-00h</span></li>
                                        <li><i>Mercredi</i><br /><span>07h-13h 18h-00h</span></li>
                                        <li><i>Jeudi</i><br /><span>07h-13h 18h-00h</span></li>
                                        <li><i>Vendredi</i><br /><span>07h-13h 18h-00h</span></li>
                                        <li><i>Samedi</i><br /><span>07H00 à 18h-00h</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
