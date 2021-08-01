import Navbar from '../../components/a.navbarClient'
import EmploisClient from '../../components/a.emplois/EmploisClient'

export default function Emplois() {
    const id= JSON.parse(localStorage.getItem("user"))._id
    return (
        <div>
            <Navbar/>
            <EmploisClient id={id}/>
        </div>
    )
}
