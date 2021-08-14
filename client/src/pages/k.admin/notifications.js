import Sidebar from '../../components/k.employeeComponents/sidebar'
import Navbar from '../../components/k.employeeComponents/navbar'
import Notification from '../../components/k.notification/Notification'
import React from 'react'



export default function Notifications() {
 
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
                <Notification/>
            </div> 
        </div>
    )
    
}