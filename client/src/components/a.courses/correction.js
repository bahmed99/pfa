import { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Courses } from '../../Provider'
import "./courses.css"
import { Link ,history} from 'react-router-dom'


export default function Correction() {
    const { id } = useParams();
    // const { datas, setDatas, reponse, setReponse } = useContext(Courses)
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
                        r2: datas[id ].wrongAnswer1,
                        r3: datas[id ].answer
                    })
                }
          
        }


    }, [])
    function Next() {
        console.log(parseInt(id))
        if(parseInt(id)<29)
       { 
        history.push(`/test/reponse/${parseInt(id)+1}`)
       window.location.reload()
    
    }
      
    }
console.log(final)

    return (
        <div className="course container" >
            <div className="questionZone">

                <div className="card">
                    <div className="cardImage">
                        <img src={`/uploads/courses/${datas[id].pic}`} alt="" />
                    </div>
                    <div className="card-content Q">
                        <p>{datas[id].question} :</p>
                    </div>
                    <div className="action">
                        {final.r1 !== "" ? <div><button className="btnQ"  ><span className="cadreQ">A</span> {final.r1 }</button><br /><br /></div>
                            : ""}
                        {final.r2 !== "" ? <div> <button className="btnQ"  ><span className="cadreQ">{final.r1 === "" ? "A" : "B"}</span> {final.r2}</button><br /><br /></div>
                            : ""}
                        {final.r3 !== "" ?
                           <div> <button className="btnQ1" >
                                <span className="cadreQ">{final.r2 === "" ? "B" : final.r1 === "" ? "B" : "C"}</span> 
                                 {final.r3}
                            </button> <br /><br /></div>: ""}
                    </div>

                    <div className="btnValiderContainer">
                  <button  className="btnValider" onClick={Next} ><strong>Suivant</strong> </button>
               </div>

                </div>
            </div>
        </div>
    )
}
