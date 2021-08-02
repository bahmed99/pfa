
import EmploisEmployee from '../../components/a.emplois/EmploisEmployee'
import Sidebar from "../../components/k.employeeComponents/sidebar";


export default function Emplois() {
    const id= JSON.parse(localStorage.getItem("user"))._id
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-8">
               
                <EmploisEmployee  id={id}/>
            </div> 
        </div>
    )
}
