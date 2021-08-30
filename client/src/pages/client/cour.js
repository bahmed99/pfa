import Navbar from '../../components/navbarClient'
import bg from "../../assets/images/bgScore.jpg"
import Cour from '../../components/cours/cour'

export default function cour() {
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
            <Cour />
         
        </div>
    )
}
