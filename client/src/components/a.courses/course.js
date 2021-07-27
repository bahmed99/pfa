import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./courses.css"
export default function Course() {
   const { id } = useParams();
   const [data, setData] = useState([])
   useEffect(() => {
      axios.get(`http://localhost:3001/courses/${id}`)
         .then(res => {

            setData(res.data.course)

         }
         )
         .catch(err => {
            throw (err)
         })

   }, [])

   console.log(data)


   return (
      <div className="course container">
         <div className="questionZone">
            <div className="card">
               <div className="cardImage">
                  <img src="/uploads/courses/1.1.gif" alt="" />
               </div>
               <div className="card-content">
                  <p>Pour tourner a droite:</p>
               </div>
               <div className="action">
                  <button className="btnQ"><span className="cadreQ">A</span>   a droite</button><br /><br />
                  <button className="btnQ"><span className="cadreQ">B</span>   a gaucher</button><br /><br />
                  <button className="btnQ"><span className="cadreQ">C</span>   stop</button><br /><br />
               </div>
               <div className="btnValiderContainer">
                  <button className="btnValider"><strong>VALIDER</strong> </button>
               </div>
            </div>
         </div>
         <div className="timer">
            <h6>Question</h6>
            <p className="textQ">11 / 30</p>
            <div className="containerCercle">
               <div className="timerCercle">
                  <p className="textTimer">00:30</p>

               </div>
            </div>
         </div>
      </div>
   )
}
