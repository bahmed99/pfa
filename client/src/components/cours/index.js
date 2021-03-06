import { Link } from "react-router-dom";

import '../../assets/css/components/cours/cours.css'

import data from "../../data/cours.json"
export default function Index() {
    return (
        <div className="container">
            <div className="coursesTitle">
                <header className="lead-full-text" >
                    <div className="container textContainerCourses">
                        <div>
                            <div className="container breadcrumbs">
                                <div>
                                    <h1>Révisez votre code de la route</h1>
                                    <p>Étape obligatoire pour décrocher un jour l'examen du permis de conduire, <span className="strong-medium">le code de la route</span> fait peur à beaucoup
                                        de candidats, alors que pour le réussir il suffit juste de bien y être préparé. C'est pour vous y aider que
                                        iDrive Gears met à votre disposition <span className="strong-medium">des cours de code en ligne</span>. 

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
            <div className="courses">

                {data.map((element, index) => (
                    <Link  to={`/cours/${element.id}`} target="_blank"><div className="card3" key={index}>
                        <div className="card_image3"> <img src={require("../../assets/images/bgCours.gif").default} alt="" />
                        </div>
                        <div className="card_title3 title-white">
                            <p>{element.nom}</p>
                        </div>
                    </div></Link>))}

            </div>

        </div>
    )
}
