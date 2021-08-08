import Sidebar from '../../components/k.employeeComponents/sidebar'
import Navbar from '../../components/k.employeeComponents/navbar'
import CarsListEmployee from "../../components/k.cars/carsListEmployee"
import "./cars.css"
import React from 'react'



export default function Cars() {
 
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
                <CarsListEmployee  />
            </div> 
        </div>
    )
    
}