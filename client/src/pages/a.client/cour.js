import Navbar from '../../components/a.navbarClient'
import bg from "../../assets/images/bgScore.jpg"
import Cour from '../../components/a.cours/cour'
import Footer from '../../components/k.footer/footer'
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
            <Footer />
        </div>
    )
}
