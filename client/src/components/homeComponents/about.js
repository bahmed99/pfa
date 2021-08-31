import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import "../../assets/css/components/home/home.style.css";
import { Fade } from "react-reveal";

export default function About() {
  return (
    <div className="bg2 textCenter">
      {" "}
      <Fade right>
        <h1 className="title">Qui Sommes-nous? </h1>
      </Fade>
      <div className="about" style={{ marginRight: "100px" }}>
        <Fade left>
          <div className="inner">
            <p>
              Présente depuis plus de 50 ans dans le 94, Auto Moto École de
              Tunis propose de nombreuses formations pour les futurs
              conducteurs de véhicules. Une formation
              supervisée est proposée avec une formule adaptée, incluant des
              leçons théoriques et des leçons de conduite accompagnées pour se
              préparer à l’examen pratique. L’établissement est reconnu pour son
              expertise et ses compétences. Les moniteurs accompagnent les
              candidats dans leur apprentissage et donnent le meilleur
              d’eux-mêmes afin de garantir leur réussite. Auto Moto École de
              Tunisie est reconnu par un esprit familial et traditionnel qui
              vous entoure dès le début de la formation. Les moniteurs ont des
              années d’expérience et sont tous d’abord des pédagogues qui font
              tout leur possible pour votre réussite dans les meilleurs délais.
            </p>
          </div>
        </Fade>
      </div>
      <hr style={{ width: "50%", margin: "auto auto" }} />
    </div>
  );
}
