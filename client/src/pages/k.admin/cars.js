import Sidebar from '../../components/k.employeeComponents/sidebar'
import Navbar from '../../components/k.employeeComponents/navbar'
import CarsListAdmin from "../../components/k.cars/carsListAdmin"
import User from "../../components/k.car/utilisateurs"
import "./cars.css"
import React from 'react'
import image2 from './../o.Signin/o.images/0004.gif'



export default function Car() {
 
  return (
        
        <div className="row" style={{
            backgroundImage: 'url('+image2+')',
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center!important" ,
          }}>
            <div className="col-md-3">
            <Navbar/>
                <Sidebar />
            </div>
            <div className="col-md-8" style={{marginTop:"80px"}}>
              
                <User />
            </div> 
        </div>
    )
    
}