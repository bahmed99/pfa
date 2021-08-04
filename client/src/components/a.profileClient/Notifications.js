
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
        <div class="container" >
            <div>
                <div>
                    <div class="container card card-white mb-5">

                        <div class="card-body">
                            <ul class=" message">
                            {data.map((element, index) => (
                                    <li key={index}>

                                        <div class="media align-items-center">
                                            <div class="msg-img">
                                                <img src={`/uploads/profile/employes/${element.pic}`} alt="" />
                                            </div>
                                            <div class="media-body">
                                                <h5>{element.nom}<span class="float-right text-primary"><i class="fa fa-trash" onClick={()=>Delete(index)} aria-hidden="true" style={{cursor:"pointer"}}></i></span></h5> {element.title}
                                            </div>
                                        </div>

                                    </li>
                                ))}
                                
                            </ul>

                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li class="page-item">
                           
                                <a class="page-link" href="#">Suivant</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
