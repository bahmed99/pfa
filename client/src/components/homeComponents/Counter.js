import {useEffect,useState} from 'react';
import FunfactItem from "./funfactItem";
import axios from 'axios'

import funfactbg from './k.homeimages/fanfact.jpg'


function Funfact() {
    const [client, setClient] = useState()
    const [employee, setEmployee] = useState()
    const [car, setCar] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/counter').then(res=>{
            setCar(res.data.car)
            setClient(res.data.client)
            setEmployee(res.data.employee)
        


        }).catch(err=>{
            console.log(err)
        })
       
    }, [])
    if(!client || !employee || !car){
        return ""
    }



    return (
        <div className="fun-fact-area sm-top parallax" style={{backgroundImage: `url(${funfactbg})`}} >
            <div className="container">
                <div className="row mtn-40">
               
                            <FunfactItem key={1} before={"+"} after={""} counterNumber={client} counterText={"Clients"} />
                            <FunfactItem key={2} before={"+"} after={""} counterNumber={employee} counterText={"Employées"} />
                            <FunfactItem key={3} before={"+"} after={""} counterNumber={car} counterText={"Voitures"} />
                      
                    
                </div>
            </div>
        </div>
    );
}

export default Funfact;