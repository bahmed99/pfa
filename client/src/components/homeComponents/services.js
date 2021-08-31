import { Fade } from "react-reveal";

function Technologies() {
  return (
    <div
      className="BgContainer"
      style={{
        backgroundColor: "#b4b4b4",
        marginTop: "-180px",
        paddingBottom: "120px",
      }}
    >
      <div className="row justify-content-center div-Style">
        <div className="col-lg-7 col-md-12  ">
          <div className="section-title text-center">
            <Fade bottom>
              <h2 className="h2-Title">Nos Services</h2>
            </Fade>
            <p className="description-technologies">
              Une formation flexible et personnalisée.
            </p>
          </div>
        </div>
      </div>
      <Fade top>
        <div className="row container-technologies ">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="single-serviecs-block container-technologie">
              <i className="fa fa-book"></i>
              <h3 className="title-technologie">
                <a href="services-details.html">
                  Révisez le code où et quand vous voulez
                </a>
              </h3>
              <p className="description-title-style">
                Entraînez-vous au Code de la route intégralement en ligne ou
                dans nos agences.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 container-technologie1">
            <div className="single-serviecs-block">
              <i className="fa fa-car" aria-hidden="true"></i>
              <h3 className="title-technologie">
                <a href="services-details.html">
                  Apprenez à conduire ici, là, ou même ailleurs
                </a>
              </h3>
              <p className="description-title-style">
                Nos moniteurs d'auto école passent vous prendre dans l’un des
                553 points de rendez-vous, partout en Tunisie.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  container-Technologie2">
            <div className="single-serviecs-block">
              <i className="fa fa-pencil"></i>
              <h3 className="title-technologie">
                <a href="services-details.html">
                  Tests de code de la route en ligne.
                </a>
              </h3>
              <p className="description-title-style">
                9 séries de test de code de la route rédigées par des moniteurs
                d'auto-école afin de vous aider à vous entraîner dans les
                conditions réel de l'examen du code de la route et d'assurer
                votre réussite.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Technologies;
