import React from 'react'
import Cours from '../../components/employe/Cours'
import Sidebar from "../../components/k.employeeComponents/sidebar";
import Navbar from '../../components/k.employeeComponents/navbar'
import image1 from '../Signin/o.images/backgroundavis.PNG'

export default function AjouterCours() {
    return (
        <div className="row" style={{
            backgroundImage: 'url(' + image1 + ')',
            backgroundSize: "cover",
            height: "100vh",
            color: "#f5f5f5",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
        }}>
            <div className="col-md-3" >
                <Navbar />
                <Sidebar />
            </div>
            <div className="col-md-8">

                <Cours />
            </div>
        </div>
    )
}
