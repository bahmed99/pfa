import React from 'react'
import image2 from './../Signin/o.images/0004.gif'
import User from './../../components/utilisateur/utilisateur'
import SideBar from './../../components/employeeComponents/sidebar'
import Navbar from '../../components/employeeComponents/navbar'

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
