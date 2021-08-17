import React from 'react'
import Dashboard from '../../../components/Dashboard/Dashboard'
import SideBar from '../../../components/k.employeeComponents/sidebar'
import Navbar from '../../../components/k.employeeComponents/navbar'

export default function HomeAdmin() {
    return (
        <div className="row">
        <div className="col-md-2" >
            <Navbar />
            <SideBar />
        </div>
        <div className="col-md-10" style={{marginTop:"100px" , maxWidth:"1425px"}}>
            <Dashboard />
        </div>

    </div>
    )
}


