import {useState,useEffect} from 'react'
import Slider from "react-slick";
import axios from "axios"
import { Fade } from 'react-reveal';

export default function Permis() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/avis").then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log(err)
        })
       
    }, [])
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div>

            <section >
                <div className="container avisContainer">
                    <div className="text-center">
                    <Fade top>
                        <h1 className=" title1">Nos témoignages</h1></Fade>
                <div className="avis">
                <Fade bottom>
                        <Slider {...settings} >
                         {  data.map((element,index)=>(
                            <figure className="snip1192" key={index}>
                                <blockquote>{element.message}. </blockquote>
                                <div className="author">
                                    <img src={`/uploads/profile/clients/${element.pic}`} alt="sq-sample1" />
                                    <h5> {element.name} </h5>
                                </div>
                            </figure>
                         )) }
                           
                        </Slider>
                        </Fade>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
