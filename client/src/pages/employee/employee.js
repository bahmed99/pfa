
import Sidebar from '../../components/employeeComponents/sidebar'
import Navbar from '../../components/employeeComponents/navbar'
import DashboardEmployee from '../../components/Dashboard/DashboardEmployee'
import image1 from '../Signin/o.images/backgroundavis.PNG'


export default function Employee() {

  return (
    <div className="row" style={{
      backgroundImage: 'url(' + image1 + ')',
      backgroundSize: "cover",
      height: "100%",
      backgroundPosition: "center!important",
    }}>
      <div className="col-md-2" >
        <Navbar />
        <Sidebar />
      </div>
      <div className="col-md-10" style={{ marginTop: "100px", maxWidth: "1425px" }}>
        <DashboardEmployee />
      </div>

    </div>
  )
}
