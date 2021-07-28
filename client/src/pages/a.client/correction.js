
import Navbar from '../../components/a.navbarClient'
import bg from "../../assets/images/bgScore.jpg"
import Corrections from '../../components/a.courses/correction'
export default function Correction() {
    return (
        <div style={{
            backgroundImage: 'url('+bg+')',
            backgroundSize: "cover",
            height: "135vh",
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
