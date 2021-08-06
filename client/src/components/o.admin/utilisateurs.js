import { useState } from 'react'
import { ArrowLeft } from '@material-ui/icons'
import React from 'react'

import image1 from './../../pages/o.Signin/o.images/0004.gif'
import photo from './../../pages/o.Signin/o.images/user.png'
//import './utilisateur.style.css'
//import SignUp from './SignUp'
import Index from './table/index'


export default function Utilisateurs() {
    const [selectedGroupe,setSelectedGroupe]=useState(null)
    const [ajoutSeanceModalOpen,setAjoutSeanceModalOpen]=useState(false)
    const [selectInfoData,setSelectInfoData]=useState(null);

   
    
    return (

        <div >
            <Index />             
        </div>
    )
}