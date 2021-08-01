import React , {useState} from 'react'
import photo from './../../pages/o.Signin/o.images/user.png'
import './Profile.style.css'
import image1 from './../../pages/o.Signin/o.images/0004.gif'
import UpdateProfile from './UpdateProfile'

export default function Profile() {
    const [selectedGroupe,setSelectedGroupe]=useState(null)
    const [ajoutSeanceModalOpen,setAjoutSeanceModalOpen]=useState(false)
    const [selectInfoData,setSelectInfoData]=useState(null);
    return (
        <div className="firstdiv" style={{
            backgroundImage: 'url('+image1+')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5" ,
            backgroundPosition: "center !important" ,
          }}>
              <br />
            <div className="second-div1" >
                <br />
                    <div className="mycard1" >
                        <div className="card auth-card-Mod-style1 ">
                            <br />
                            <div style={{display:"flex"}}>
                                <div style={{float:"left !important", marginRight:"auto" , marginTop:"auto" , marginBottom:"auto" ,marginLeft:"20px" }} >
                                    <img src={photo} alt ="" style={{}}  className="photo-Mod3"/>
                                    <h4 style={{marginLeft:"10px" , color:"black"}}>Oussama Kordoghli</h4>
                                </div>
                                <div style={{float:"left" , marginRight:"auto" , marginTop:"auto" , marginBottom:"auto"}}>
                                    <div style={{display:"flex", justifyContent:"space-between" , width:"108%"}}>
                                        <h5 className="para-Mod1">Email :</h5>
                                        <h5 className="para-Mod1">Oussama.kordoghli@ensi-uma.tn</h5>
                                    </div>
                                    <hr style={{color:'black' , width:"120%", border:"1px "}} />
                                    <div style={{display:"flex", justifyContent:"space-between" , width:"76%"}}>
                                        <h5 className="para-Mod1">Cin :</h5>
                                        <h5 className="para-Mod1">09892160</h5>
                                    </div>
                                    <hr style={{color:'black' , width:"120%" , border:"1px !important"}} />
                                    <div style={{display:"flex", justifyContent:"space-between" , width:"80%"}}>
                                        <h5 className="para-Mod1">Date d'inscription :</h5>
                                        <h5 className="para-Mod1">06/07/2021</h5>
                                    </div>
                                </div>
                                <div>
                                   <button className="fa-fa-Mod2" onClick={()=>setAjoutSeanceModalOpen(true)}>
                                        <i class="fas fa-edit" aria-hidden="true" style={{color:"black"}} ></i>
                                   </button>
                                </div>
                                <div>
                                   <button className="fa-fa-Mod1">
                                        <i class="fa fa-trash" aria-hidden="true" style={{color:"black"}} ></i>
                                   </button>
                                </div>
                                
                            </div>
                            <br />

                
                            


                        </div>
                    </div>
                </div>
                <UpdateProfile isOpen={ajoutSeanceModalOpen} 
                    setModal={setAjoutSeanceModalOpen}  />
        </div>
    )
}
