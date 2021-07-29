import { useState, useEffect } from 'react'
import './courses.css'
import axios from "axios"
import { Link } from "react-router-dom";

export default function Index() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then(res => {

                setData(res.data)

            }
            )
            .catch(err => {
                throw (err)
            })

    }, [])
    return (
        <div className="container courseContainer">
            <div className="coursesTitle">
                <header className="lead-full-text" >
                    <div className="container textContainerCourses">
                        <div>
                            <div className="breadcrumbs">
                                <div>
                            <h1>Entraînez-vous au code de la route</h1>
                            <p>Étape obligatoire pour décrocher un jour l'examen du permis de conduire, <span className="strong-medium">le code de la route</span> fait peur à beaucoup
                                de candidats, alors que pour le réussir il suffit juste de bien y être préparé. C'est pour vous y aider que
                                iDrive Gears met à votre disposition <span className="strong-medium">des tests de code en ligne</span>, comprenant 30 questions <span className="strong-medium">conformes à
                                    celles de l'examen.</span>
                            </p>
                            </div>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
            <div className="courses">

                {data.map((element, index) => (
                    <Link style={{ textDecoration: 'none' }} to={`/test/${element._id}`} target="_blank" key={index}><div className="card1">
                        <div className="card_image"> <img src={require("../../assets/images/serie.jpg").default} alt="" />
                        </div>
                        <div className="card_title title-white">
                            <p>Serie {index + 1}</p>
                        </div>
                    </div></Link>))}

            </div>
          
        </div>
    )
}
