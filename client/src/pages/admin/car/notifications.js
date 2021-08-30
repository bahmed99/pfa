import Sidebar from '../../../components/employeeComponents/sidebar'
import Navbar from '../../../components/employeeComponents/navbar'
import Notification from '../../../components/notification/Notification'
import React from 'react'
import "../../../assets/css/pages/notification.css"


export default function Notifications() {
 
  return (
        
        <div className="bg row">
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