import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Fade } from "react-reveal";

export default function Permis() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/avis")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div>
      <section>
        <div className="container avisContainer">
          <div className="text-center">
            <Fade top>
              <h1 className=" title1">Nos témoignages</h1>
            </Fade>
            <div className="avis">
              <Fade bottom>
                <Slider {...settings}>
                  {data.map((element, index) => (
                    <ul
                      class="testimonial-list"
                      id="app"
                      style={{ paddingLeft: "50px !important" }}
                    >
                      <li
                        className="testimonial"
                        v-for="user in users"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "93%",
                          height: "450px ",
                          marginLeft: "14px",
                        }}
                      >
                        <img
                          src={`/uploads/profile/clients/${element.pic}`}
                          alt="User testimonial profile picture"
                        />
                        <blockquote>
                          <p>{element.message}</p>
                          <cite>{element.name}</cite>
                        </blockquote>
                      </li>
                    </ul>
                  ))}
                </Slider>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
