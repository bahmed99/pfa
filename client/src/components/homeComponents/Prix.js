import React from 'react'
import { Fade } from 'react-reveal';
export default function Prix() {
    return (
        <div>
            <section className='mt-lg-7 container-fluid offres' >
                <div className='container pt-5 f'>
                    <div className='row '>
                        <div className='col-12 col-sm-12 col-lg-12 text-center align-items-center'>
                            <Fade top>
                                <h1 className="title h1 pb-5 ">Nos offres</h1>
                            </Fade>
                            <div className='row no-gutters pt-5'>
                                <Fade left>
                                    <div className='col-6 col-sm-6 col-lg-5 offset-lg-1 mr-xs-1 pr-sm-1'>
                                        <div className='d-flex align-items-center flex-column offres-home offres-home-first h-100'>
                                            <div className="mb-auto">
                                                <img src={require("./stych-code_2.png").default} style={{width:"48%",marginLeft:"auto" ,marginRight:"auto"}} className="img-fluid" alt="" />
                                            </div>
                                            <div className="pt-4">
                                                <p className="h3-small">Code <span className="d-block d-lg-none"></span>de la route</p>
                                                <p className="h5">à partir de <span className="text-primary">70dt</span></p>

                                            </div>
                                        </div>
                                    </div>
                                </Fade>

                                <Fade right>
                                <div className='col-6 col-sm-6  col-lg-5'>
                                    <div className='d-flex align-items-center flex-column offres-home offres-home-second h-100'>
                                        <div className="mb-auto">
                                            <img src={require("./stych-conduite.png").default} style={{width:"44%",marginLeft:"auto" ,marginRight:"auto"}} className="img-fluid" alt="" />
                                        </div>
                                        <div className="pt-4">
                                            <p className="h3-small">Permis <span className="d-block d-lg-none"></span>de conduire</p>
                                            <p className="h5">à partir de <span className="text-primary">600dt</span></p>

                                        </div>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            
                            <p className="my-5">
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
