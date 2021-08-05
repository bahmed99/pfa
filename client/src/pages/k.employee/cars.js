import Sidebar from '../../components/k.employeeComponents/sidebar'
import Navbar from '../../components/k.employeeComponents/navbar'
import Cars from "../../components/k.cars/cars"
import "./cars.css"
import React from 'react'



export default function Employee() {
 
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
               <br/>
               <br/>
               <br/>
               <br/>

                <Cars/>
            </div> 
        </div>
    )
    
}