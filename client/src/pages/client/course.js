
import Navbar from '../../components/navbarClient'
import Courses from '../../components/courses/course'
import bg from "../../assets/images/bgScore.jpg"
export default function Course() {
    return (
        <div style={{
            backgroundImage: 'url('+bg+')',
            backgroundSize: "cover",
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
