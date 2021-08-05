
import EmploisEmployee from '../../components/a.emplois/EmploisEmployee'
import Sidebar from "../../components/k.employeeComponents/sidebar";
import Navbar from '../../components/k.employeeComponents/navbar'


export default function Emplois() {

    return (
        <div className="row">
            <div className="col-md-3">
            <Navbar/>
                <Sidebar />
            </div>
            <div className="col-md-8">
               
                <EmploisEmployee  />
            </div> 
        </div>
    )
}
