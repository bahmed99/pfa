import { useState } from 'react'
import { ArrowLeft } from '@material-ui/icons'
import React from 'react'


import '../../assets/css/components/utilisateurs/utilisateur.style.css'

import Index from './table/index'


export default function Utilisateur() {
    const [selectedGroupe,setSelectedGroupe]=useState(null)
    const [ajoutSeanceModalOpen,setAjoutSeanceModalOpen]=useState(false)
    const [selectInfoData,setSelectInfoData]=useState(null);

   
    
    return (

        <div >
            <Index />
           
            {/* <div className="second-div" >
                <div className="mycard1" >
                
                    <div className="card auth-card-Mod ">
                        <div style={{display:"flex"}}>
                            <h5 style={{float:"left" , color:"black", marginLeft:"10px",marginTop:"15px "}}>Liste des clients</h5>
                            <button className="bouton-Mod11" onClick={()=>setAjoutSeanceModalOpen(true)} > 
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <hr  style={{color:"black" , width:"80%", marginLeft:"auto", marginRight:"auto"}}/>
                        <table >
                            <thead>
                                <tr>
                                    <td >Photo</td>
                                    <td>Nom</td>
                                    <td>Email</td>
                                    <td>Cin</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  style={{cursor:"pointer"}}>
                                    <td ><img src={photo} alt=""  style={{width:"25px",height:"25px" }}/></td>
                                    <td>Oussama</td>
                                    <td>Oussama.kordoghli@ensi-uma.tn</td>
                                    <td>09892160</td>
                                </tr>
                                <tr onClick={()=>Change()} style={{cursor:"pointer"}}>
                                    <td ><img src={photo} alt=""  style={{width:"25px",height:"25px" }}/></td>
                                    <td>Oussama</td>
                                    <td>Oussama.kordoghli@ensi-uma.tn</td>
                                    <td>09892160</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        <br />
            
                        


                    </div>
                </div>
            </div>
            <br /> <br /> <br />
            <SignUp isOpen={ajoutSeanceModalOpen} 
                    setModal={setAjoutSeanceModalOpen}  /> */}
                          
        </div>
    )
}
