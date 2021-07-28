
import Navbar from '../../components/a.navbarClient'
import Courses from '../../components/a.courses/course'
import bg from "../../assets/images/bgScore.jpg"
export default function Course() {
    return (
        <div style={{
            backgroundImage: 'url('+bg+')',
            backgroundSize: "cover",
            height: "135vh",
            color: "#f5f5f5" ,
            backgroundAttachment:"fixed" ,
            backgroundPosition: "center" ,
            backgroundRepeat:"repeat"
          }} >
             <Navbar />
             <Courses />
        </div>
    )
}
