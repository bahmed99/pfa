import Sidebar from "../../../components/employeeComponents/sidebar";
import Navbar from "../../../components/employeeComponents/navbar";
import NotificationEmployee from "../../../components/notification/notificationEmployee";
import React from "react";
import "../../../assets/css/pages/notification.css";

export default function NotificationsEmployee() {
  return (
    <div className="bg row">
      <div className="col-md-3">
        <Navbar />
        <Sidebar />
      </div>
      <div className="col-md-8">
        <br />
        <br />
        <br />
        <br />
        <NotificationEmployee />
      </div>
    </div>
  );
}
