import React , {useState} from 'react'
import axios from 'axios'
import image1 from './../../pages/o.Signin/o.images/0004.gif'
import './Cours.style.css'
import Alert from 'react-bootstrap/Alert'

export default function Cours() {
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [nom, setNom] = useState('')
    const [file, setFile] = useState("")
    function Send(){
        let dataform = new FormData()
        dataform.append('nom', nom)
        dataform.append('file', file)
        if(nom !== "" && file !== "")
        {
            axios.post('http://localhost:3001/employe/AjouterCours',dataform,{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                }
            }).then(result=>{ 
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2500)
                
            })
        }
        else
        {
            setError(true)
            setTimeout(() => setError(false), 2500)
        }
    }
    return (
        <div className="py-20 h-screen px-3 firstdiv" >
            <Alert show={error} variant={'danger'} style={{width:"700px",margin:"auto auto"}}>
                    { "veuillez remplir tous les champs"}
            </Alert>
            <Alert show={success} variant={'success'} style={{width:"700px",margin:"auto auto"}}>
                    { "Vous avez Ajouté un cours"}
            </Alert>
            <div className="max-w-md mx-auto rounded-lg  md:max-w-lg div1Style">
                <div className="md:flex">
                    <div className="w-full">
                        <div className="p-4 border-b-2"> <span className="text-lg font-bold text-gray-600">Add documents</span> </div>
                        <div className="p-3">
                            <div className="mb-2"> <p className="text-sm titleInput">Nom</p> <input type="text" className="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"  value={nom} onChange={(e)=>setNom(e.target.value)}/> </div>
                            <div className="mb-2"> <p className="text-sm titleInput">Attachments</p>
                                <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                    <div className="absolute">
                                        <div className="flex flex-col items-center "> <i className="fa fa-cloud-upload fa-3x text-gray-200"></i> <span className="block text-gray-400 font-normal">Attach you files here</span> <span className="block text-gray-400 font-normal">or</span> <span className="block text-blue-400 font-normal">Browse files</span> </div>
                                    </div> <input type="file" className="h-full w-full opacity-0" name="" onChange={(e) => { setFile(e.target.files[0]) }}/>
                                </div>
                                <div className="flex justify-between items-center text-gray-400"> <span>Accepted file type:.doc only</span> <span className="flex items-center "><i className="fa fa-lock mr-1"></i> secure</span> </div>
                            </div>
                            <div className="mt-3 text-center pb-3"> <button className=" h-12 text-lg w-32 rounded boutonStyle " onClick={Send}>Create</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
