import React from 'react'
import './courses.css'
import { Link } from 'react-router-dom'

export default function Score({ score, data }) {
    
    return (
        <div className="score">
            <section >
                <div className="">
                    <div className="row">
                        <div className="d-none d-lg-block col-md-2 "></div>
                        <div className="col-12 col-md-12 col-lg-8">
                            <div className="containerCorrige register-table rlp-table bg-white p-3" >

                                <br />
                                <div style={{ fontSize: " 40px", color: "#000" }}
                                    className="">Votre résultat est:  <span style={{ color: "#b91949;" }} className="font-weight-bold">{score}/30</span><span>  {score < 24 ? <i className="fa fa-thumbs-down icon_down"></i> : <i className="fa fa-thumbs-up icon_down"></i>} </span></div>
                                <div className="alert alert-danger " role="alert" style={{ fontSize: "18px;" }}>
                                    {score < 24 ? "Il faut avoir un minimum de 24 bonnes réponses pour réussir l'examen officiel" : "Vous avez réussi votre examen"}
                                </div>
                                <h5 className="m-txt8" style={{ fontSize: "24px" }}>Statistique

                                    <div className="trait"></div>

                                </h5>
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="pb-2 color-black text-center">Cliquer sur un num&eacute;ro pour visualiser la correction
                                        </p>

                                    </div>
                                    <div className="corrige col-md-8 ml-auto mr-auto mt-3" style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)", padding: "20px 0px" }}>

                                        <div className="row ">
                                            <div className="col-md-12 ml-auto mr-auto">
                                                <div className="row">
                                                    <div className="col-1 col-md-1 "></div>

                                                    {data.slice(0,5).map((element, index) => (
                                                        <div className="col-2 col-md-2"><Link to={`/test/reponse/${index}`} target="_blank"> <div className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`}>{index + 1}</div></Link >  </div>
                                                    ))
                                                    }





                                                    <div className="col-1 col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-t-15">
                                            <div className="col-md-12 ml-auto mr-auto">
                                                <div className="row">
                                                    <div className="col-1 col-md-1 "></div>

                                                    {data.slice(5, 10).map((element, index) => (
                                                        <div className="col-2 col-md-2"><Link to={`/test/reponse/${index+6}`} target="_blank" > <div className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`}>{index + 6}</div></Link >  </div>
                                                    ))
                                                    }




                                                    <div className="col-1 col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-t-15">
                                            <div className="col-md-12 ml-auto mr-auto">
                                                <div className="row">
                                                    <div className="col-1 col-md-1 "></div>

                                                    {data.slice(10, 15).map((element, index) => (
                                                        <div className="col-2 col-md-2"><Link to={`/test/reponse/${index+11}`} target="_blank"> <div className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`}>{index + 11}</div></Link >  </div>
                                                    ))
                                                    }





                                                    <div className="col-1 col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-t-15">
                                            <div className="col-md-12 ml-auto mr-auto">
                                                <div className="row">
                                                    <div className="col-1 col-md-1 "></div>

                                                    {data.slice(15, 20).map((element, index) => (
                                                        <div className="col-2 col-md-2"><Link to={`/test/reponse/${index+16}`} target="_blank"> <div className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`}>{index + 16}</div></Link >  </div>
                                                    ))
                                                    }





                                                    <div className="col-1 col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-t-15">
                                            <div className="col-md-12 ml-auto mr-auto">
                                                <div className="row">
                                                    <div className="col-1 col-md-1 "></div>

                                                    {data.slice(20, 25).map((element, index) => (
                                                        <div className="col-2 col-md-2"><Link to={`/test/reponse/${index+21}`} target="_blank"> <div className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`}>{index + 21}</div></Link >  </div>
                                                    ))
                                                    }





                                                    <div className="col-1 col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-t-15">
                                            <div className="col-md-12 ml-auto mr-auto">
                                                <div className="row">
                                                    <div className="col-1 col-md-1 "></div>

                                                    {data.slice(25,30).map((element, index) => (
                                                        <div className="col-2 col-md-2"><Link to={`/test/reponse/${index+26}`} target="_blank"> <div className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`}>{index + 26}</div></Link >  </div>
                                                    ))
                                                    }





                                                    <div className="col-1 col-md-1"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <br /><br /></div>
                                <div className="row mt-3  ">
                                    <div className="cleRep col-md-6">

                                        <div className="row">
                                            <div className="col-md-6" >
                                                <div className="div_bn_reponse_res dis-inline-block"></div><span className="text-center bonne">Bonne réponse</span>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="div_vt_reponse_res dis-inline-block" ></div><span className="text-center mauvaise">Mauvaise réponse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-2"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
