import { useState, useEffect } from 'react'
import './courses.css'
import axios from "axios"
import { Link } from "react-router-dom";
export default function Index() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/courses")
            .then(res => {

                setData(res.data)

            }
            )
            .catch(err => {
                throw (err)
            })

    },[])
    return (
        <div className="container courses">
            {data.map((element, index) => (
            <Link to={`/test/${element._id}`} target="_blank"><div className="card1">
                <div className="card_image"> <img src={require("../../assets/images/serie.jpg").default} alt="" />
            </div>
            <div className="card_title title-white">
                    <p>Serie {index + 1}</p>
            </div>
            </div></Link>))}

        </div>

    )
}
