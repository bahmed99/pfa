import React from 'react'
import image1 from './../o.Signin/o.images/ArriereAvis.gif'
import image2 from './../o.Signin/o.images/0004.gif'
import User from './../../components/o.utilisateur/utilisateur'
import SideBar from './../../components/k.employeeComponents/sidebar'
import Navbar from '../../components/k.employeeComponents/navbar'

export default function utilisateur() {
    return (
        <div className="row" style={{
            backgroundImage: 'url('+image2+')',
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center!important" ,
          }}>
            <div className="col-md-2" >
                <Navbar />
                <SideBar />
            </div>
            <div className="col-md-10" >
                <User />
            </div>

        </div>

    )
}
