import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import axios from "axios"
import { Fade } from 'react-reveal';
function ImageSlider() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/carousel").then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])




    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div style={{ backgroundColor: "#b4b4b4", width: "100% !important" }}>
            <div className="container carousel" >
                <Fade top>
                    <h1 className="titleEquipe slider_title">Notre Équipes</h1>
                </Fade>
                <Fade bottom>
                    <Slider {...settings}>
                        {data.map((element, index) => (<div className="card-wrapper6">
                            <div className="card6">
                                <div className="card-image6">
                                    <img src={`./uploads/profile/employes/${element.pic}`} alt="" />
                                </div>
                                <ul className="social-icons6">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                                <div className="details6">
                                    <h2>{element.name} <span className="job-title">Moniteur</span></h2>
                                </div>
                            </div>
                        </div>))}

                    </Slider>
                </Fade>
            </div>
        </div>

    )
}

export default ImageSlider
