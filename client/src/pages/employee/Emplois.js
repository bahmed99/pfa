
import EmploisEmployee from '../../components/emplois/EmploisEmployee'
import Sidebar from "../../components/k.employeeComponents/sidebar";
import Navbar from '../../components/k.employeeComponents/navbar'
import image2 from './../Signin/o.images/0004.gif'

export default function Emplois() {

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
            <div className="col-md-8" style={{marginTop:"100px"}}> 
               
                <EmploisEmployee  />
            </div> 
        </div>
    )
}
