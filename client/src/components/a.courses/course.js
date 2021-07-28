import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./courses.css"
import Alert from 'react-bootstrap/Alert'

import Score from "./score"

export default function Course() {
   const { id } = useParams();
   const [data, setData] = useState([])
   const [seconde, setSeconde] = useState(0)
   const [border, setBorder] = useState("#369579 #369579 #369579 #369579")
  
   
   const [isActive, setIsActive] = useState(false);
   const [q, setQ] = useState("");

   const [score, setScore] = useState(0);

   const [error, setError] = useState(false);

   const [displayScore, setDisplayScore] = useState(false);
   const [displayCorrection, setDisplayCorrection] = useState(false);

   const [choice, setChoice] = useState({})
   const [nb, setNb] = useState(1)
   const [pic, setPic] = useState("")
   const [reponses, setReponses] = useState([])

   const [r1, setR1] = useState({})
   const [r2, setR2] = useState({})
   const [r3, setR3] = useState({})

   // const {datas,setDatas,reponse,setReponse}=useContext(Courses)


   function shuffleArray(inputArray) {
      inputArray.sort(() => Math.random() - 0.5);
   }
   useEffect(() => {
      let interval = null;
      if (isActive) {
         interval = setInterval(() => {
            setSeconde(seconds => seconds + 1);
         }, 1000);
         if (seconde === 8) { setBorder("#369579 white #369579 #369579") }
         else if (seconde === 16) { setBorder("white white #369579 #369579") }
         else if (seconde === 24) { setBorder("white white #369579 white") }
         else if (seconde === 29) {
            setBorder("white white white white")
         }
         else if (seconde === 30) {
            setBorder("#369579 #369579 #369579 #369579")
            setSeconde(0)
            if (nb < 30) {

               const tab = [...reponses]
               tab.push({valid:false,r:""})
               setReponses(tab)


               setNb(nb + 1)
               let rep = [
                  { "r": data[nb].answer, valid: true }, { "r": data[nb].wrongAnswer1, valid: false }, { "r": data[nb].wrongAnswer2, valid: false }
               ]

               shuffleArray(rep)
               setR1(rep[0])
               setR2(rep[1])
               setR3(rep[2])
               setChoice({})
               setPic(data[nb].pic)
               setQ(data[nb].question)
            }
            else if (nb === 30) {
               setDisplayCorrection(true)
               const tab = [...reponses]
               tab.push({valid:false,r:""})
               setReponses(tab)
               // setReponse(reponses)
               localStorage.setItem("reponse", JSON.stringify(reponses));
               setSeconde(0)
               setIsActive(false)

            }

         }


      } else if (!isActive && seconde !== 0) {
         clearInterval(interval);
      }
      return () => clearInterval(interval);
   }, [isActive, seconde]);

console.log(data)

   useEffect(() => {
      axios.get(`http://localhost:3001/courses/${id}`)
         .then(res => {
            const d = res.data.course
            shuffleArray(d)
            setData(d)
            setPic(d[0].pic)
            setQ(d[0].question)
            let rep = [
               { "r": d[0].answer, valid: true }, { "r": d[0].wrongAnswer1, valid: false }, { "r": d[0].wrongAnswer2, valid: false }
            ]
            shuffleArray(rep)
            setR1(rep[0])
            setR2(rep[1])
            setR3(rep[2])
            setIsActive(!isActive);
            // setDatas(d)
            localStorage.setItem("datas", JSON.stringify(d));
         }
         )
         .catch(err => {
            throw (err)
         })
   }, [])


   function Next() {

      if (Object.keys(choice).length === 0) {
         setError(true)

         setTimeout(() => setError(false), 1000)
      }

      else {
         if (nb < 30) {
            if (choice.valid) {
               setScore(score + 1)
            }

            const tab = [...reponses]
            tab.push(choice)
            setReponses(tab)

            setNb(nb + 1)
            let rep = [
               { "r": data[nb].answer, valid: true }, { "r": data[nb].wrongAnswer1, valid: false }, { "r": data[nb].wrongAnswer2, valid: false }
            ]
            shuffleArray(rep)
            setR1(rep[0])
            setR2(rep[1])
            setR3(rep[2])

            setPic(data[nb].pic)
            setQ(data[nb].question)
            setBorder("#369579 #369579 #369579 #369579")

            setSeconde(0)
            setChoice({})
         }
         else if (nb === 30) {
            const tab = [...reponses]
            tab.push(choice)
            setReponses(tab)

            setChoice({})
            setSeconde(0)
            setBorder("#369579 #369579 #369579 #369579")
            setDisplayScore(true)
            if (choice.valid) {
               setScore(score + 1)

            }
            // setReponse(reponses)
            localStorage.setItem("reponse", JSON.stringify(reponses));
         }
      }


   }


   function zeroPad(value) {
      return value < 10 ? `0${value}` : value;
   }
   
   if(displayScore){
      return <Score  score={score} data={reponses}  />
   }

   return (
      <div >
      <div className="course container" >
         <div className="questionZone">
         <Alert show={error} variant={'danger'}>
                { "Veuillez choisir une réponse"}
            </Alert>
            <div className="card">
               <div className="cardImage">
                  <img src={`/uploads/tests/${pic}`} alt="" />
               </div>
               <div className="card-content Q">
                  <p>{q} :</p>
               </div>
               
               <div className="action">
                  {r1.r !== "" ? <div><button className="btnQ" onClick={() => { setChoice(r1) }} value={r1.r}><span className="cadreQ">A</span> {r1.r}</button><br /><br /></div>
                     : ""}
                  {r2.r !== "" ? <div> <button className="btnQ" onClick={() => { setChoice(r2) }} value={r2.r}><span className="cadreQ">{r1.r===""?"A":"B"}</span> {r2.r}</button><br /><br /></div>
                     : ""}
                  {r3.r !== "" ?
                     <button className="btnQ" onClick={() => { setChoice(r3) }} value={r3.r}><span className="cadreQ">{r2.r===""?"B":r1.r===""?"B":"C"}</span> {r3.r}</button> : ""}

                  {r3.r !== "" ? <div><br /><br /></div> : ""}
               </div>
               <div className="btnValiderContainer">
                  <button onClick={() => Next()} className="btnValider" ><strong>VALIDER</strong> </button>
               </div>
            </div>
         </div>
         <div className="timer">
            <h6>QUESTION</h6>
            <p className="textQ">{nb} / 30</p>
            <div className="containerCercle">
               <div className="timerCercle" style={{ borderColor: border }}>
                  <p className="textTimer">00:{zeroPad(seconde)}</p>

               </div>
            </div>
         </div>
      </div>
      </div>
   )
}
