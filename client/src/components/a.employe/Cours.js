import React , {useState} from 'react'
import axios from 'axios'
import image1 from './../../pages/o.Signin/o.images/0004.gif'

export default function Cours() {
    const [nom, setNom] = useState('')
    const [file, setFile] = useState("")
    function Send(){
        let dataform = new FormData()
        dataform.append('nom', nom)
        dataform.append('file', file)
        axios.post('http://localhost:3001/employe/AjouterCours',dataform,{
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(result=>{ 
        })
    }
    return (
        <div class="py-20 h-screen px-3" className="firstdiv"  >
            <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg" style={{border:"1px solid black", marginTop:"200px"}}>
                <div class="md:flex">
                    <div class="w-full">
                        <div class="p-4 border-b-2"> <span class="text-lg font-bold text-gray-600">Add documents</span> </div>
                        <div class="p-3">
                            <div class="mb-2"> <span class="text-sm">nom</span> <input type="text" class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"  value={nom} onChange={(e)=>setNom(e.target.value)}/> </div>
                            <div class="mb-2"> <span>Attachments</span>
                                <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                    <div class="absolute">
                                        <div class="flex flex-col items-center "> <i class="fa fa-cloud-upload fa-3x text-gray-200"></i> <span class="block text-gray-400 font-normal">Attach you files here</span> <span class="block text-gray-400 font-normal">or</span> <span class="block text-blue-400 font-normal">Browse files</span> </div>
                                    </div> <input type="file" class="h-full w-full opacity-0" name="" onChange={(e) => { setFile(e.target.files[0]) }}/>
                                </div>
                                <div class="flex justify-between items-center text-gray-400"> <span>Accepted file type:.doc only</span> <span class="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span> </div>
                            </div>
                            <div class="mt-3 text-center pb-3"> <button class="w-full h-12 text-lg w-32 bg-blue-600 rounded text-white hover:bg-blue-700" onClick={Send()}>Create</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
