import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import "./courses.css"



export default function Correction() {
    const { id } = useParams();
  
    const [final, setFinal] = useState({})
    const [test, setTest] = useState(false)
    const history=useHistory()

    let reponse = JSON.parse(localStorage.getItem("reponse"));
    let datas = JSON.parse(localStorage.getItem("datas"));

    useEffect(() => {
        
        if (datas[id ].answer === reponse[id ].r) {

            setTest(true)
            setFinal({
                r1: datas[id ].wrongAnswer1,
                r2: datas[id ].wrongAnswer2,
                r3: datas[id ].answer
            })
        }
        else {
            if (reponse[id ].r === datas[id].answerWrong2) {
                setFinal({
                    r1: datas[id ].wrongAnswer1,
                    r2: datas[id ].wrongAnswer2,
                    r3: datas[id ].answer
                })
            }
            else 
               
                {
                    setFinal({
                        r1: datas[id ].wrongAnswer2,
                        r2: reponse[id ].r,
                        r3: datas[id ].answer
                    })
                }
          
        }


    }, [])
    function Next() {
        
        if(parseInt(id)<29)
       { 
        history.push(`/test/reponse/${parseInt(id)+1}`)
       window.location.reload()
    
    }
      
    }

    return (
        <div className="course1 container" >
            <div className="Correction">

                <div className="card2 card">
                    <div className="cardImage">
                        <img src={`/uploads/tests/${datas[id].pic}`} alt="" />
                    </div>
                    <div className="card-content Q">
                        <p>{datas[id].question} :</p>
                    </div>{/* className={`num ${element.valid ? "bg_vert" : "bg_rouge"}`} */}
                    <div className="action">
                        {final.r1 !== "" ? <div><button className="btnQ"  ><span className="cadreQ">A</span> {final.r1 }</button><br /><br /></div>
                            : ""}
                        {final.r2 !== "" ? <div> <button className={`${test? "btnQ" : "btnQ2"}`}  ><span className="cadreQ">{final.r1 === "" ? "A" : "B"}</span> {final.r2}</button><br /><br /></div>
                            : ""}
                        {final.r3 !== "" ?
                           <div> <button className="btnQ1" >
                                <span className="cadreQ">{final.r2 === "" ? "B" : final.r1 === "" ? "B" : "C"}</span> {final.r3}
                                 
                            </button> <br /><br /></div>: ""}
                    </div>

                    <div className="btnValiderContainer">
                  <button  className="btnValider" onClick={Next} ><strong>Suivant</strong> </button>
               </div>

                </div>
            </div>
            <br /> <br /> 
        </div>
    )
}
