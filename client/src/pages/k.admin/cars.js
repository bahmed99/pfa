import Sidebar from '../../components/k.employeeComponents/sidebar'
import Navbar from '../../components/k.employeeComponents/navbar'
import CarsListAdmin from "../../components/k.cars/carsListAdmin"
import "./cars.css"
import React from 'react'



export default function Car() {
 
  return (
        
        <div className="row">
            <div className="col-md-3">
            <Navbar/>
                <Sidebar />
            </div>
            <div className="col-md-8">
               <br/>
               <br/>
               <br/>
               <br/>
                <CarsListAdmin  />
            </div> 
        </div>
    )
    
}