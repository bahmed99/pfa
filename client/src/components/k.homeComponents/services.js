
function Technologies() {
  return (
            <div className="BgContainer" style={{backgroundColor:"#b4b4b4" , marginTop:"-180px",paddingBottom:"120px"}}>
               
                <div className="row justify-content-center div-Style" >
                    <div className="col-lg-7 col-md-12  ">
                        <div className="section-title text-center">
                            <h2 className="h2-Title" >Nos Services</h2>
                            <p  className= "description-technologies">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="row container-technologies " >
                    <div className="col-lg-4 col-md-6 col-sm-12 " >
                        <div className="single-serviecs-block container-technologie" >
                            <i className="fa fa-print"></i>
                            <h3 className="title-technologie"><a href="services-details.html">Digital Printing</a></h3>
                            <p className="description-title-style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 container-technologie1"  >
                        <div className="single-serviecs-block">
                            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                            <h3 className="title-technologie"><a href="services-details.html">Design Services</a></h3>
                            <p className="description-title-style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  container-Technologie2" >
                        <div className="single-serviecs-block">
                            <i className="fa fa-envelope"></i>
                            <h3 className="title-technologie"><a href="services-details.html">Mail Services</a></h3>
                            <p  className="description-title-style">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </div>
                
            </div>

  );
}

export default Technologies;