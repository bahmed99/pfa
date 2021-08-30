
import Navbar from '../../components/navbarClient'
import bg from "../../assets/images/bgScore.jpg"
import Corrections from '../../components/courses/correction.js'
export default function Correction() {
    return (
        <div style={{
            backgroundImage: 'url('+bg+')',
            backgroundSize: "cover",
            color: "#f5f5f5" ,
         
            backgroundAttachment:"fixed" ,
            backgroundPosition: "center" ,
            backgroundRepeat:"repeat"
          }}>          
            <Navbar />
            <Corrections />
        </div>
    )
}
