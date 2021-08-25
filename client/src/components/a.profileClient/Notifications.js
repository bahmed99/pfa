
import axios from "axios"
import "./style.css"
export default function Notifications({data , setNotifications,setIndex,nb}) {
  
    
    if(nb===0){
        return "Messagerie vide."
    }
    function Delete(index){
        setNotifications(data.filter(item => item !== data[index]))
        setIndex(nb-1)
        axios.put("http://localhost:3001/client/removeNotification",data[index],{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }

        )
    }
    return (
        <div className="container" >
            <div>
                <div>
                    <div className="container card card-white mb-5">

                        <div className="card-body">
                            <ul className=" message">
                            {data.map((element, index) => (
                                    <li key={index}>

                                        <div className="media align-items-center">
                                            <div className="msg-img">
                                                <img src={`/uploads/profile/employes/${element.pic}`} alt="" />
                                            </div>
                                            <div className="media-body">
                                                <h5>{element.nom}<span className="float-right text-primary"><i className="fa fa-trash" onClick={()=>Delete(index)} aria-hidden="true" style={{cursor:"pointer"}}></i></span></h5> {element.title}
                                            </div>
                                        </div>

                                    </li>
                                ))}
                                
                            </ul>

                        </div>
                    </div>
                    {/* <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item">
                           
                                <a className="page-link" href="#">Suivant</a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
        </div>
    )
}
