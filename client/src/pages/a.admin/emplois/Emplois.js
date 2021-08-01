import React from 'react'
import Sidebar from "../../../components/k.employeeComponents/sidebar";
import EmploisAdmin from '../../../components/a.emplois/EmploisAdmin'
export default function Emplois() {
    return (

        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-8 align-self-center">
                <EmploisAdmin />
            </div>
        </div>

    )
}
