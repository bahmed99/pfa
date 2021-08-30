import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import '../../assets/css/components/home/home.style.css'
import { Fade } from 'react-reveal';
export default function Apropos() {
  return (

    <div className="bg2 textCenter">
      <Fade left>
        <div>



          <h2 className="title">Qui Sommes Nous?</h2>

          <h5 className="description">
            This is the paragraph where you can write more details about
            your product. Keep you user engaged by providing meaningful
            information. Remember that by this time, the user is curious,
            otherwise he wouldn't scroll to get here. Add a button if you
            want the user to see more.
          </h5>


          <img alt='' className="cours" src={require("../../assets/images/logo.png").default} />




        </div>
      </Fade>
    </div>

  )
}
