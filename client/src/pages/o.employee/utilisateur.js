import React from 'react'
import image1 from './../o.Signin/o.images/ArriereAvis.gif'
import User from './../../components/o.utilisateur/utilisateur'
import SideBar from './../../components/k.employeeComponents/sidebar'

export default function utilisateur() {
    return (
        <div className="row">
            <div className="col-md-2" >
                <SideBar />
            </div>
            <div className="col-md-10" >
                <User />
            </div>

        </div>
    )
}
