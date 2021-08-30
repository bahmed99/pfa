import React from 'react'
import { Link} from 'react-router-dom';
import '../../assets/css/components/footer/footer.css'

function Footer() {
    return (
        <footer className="footer-distributed">

			<div className="footer-left">
      
            <iframe src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=tunis%2Cariana+(Pr%C3%A9s%20de%20%C3%A9cole%20naser)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" width="80%" height="250" frameborder="0" style={{border:"#3d3e42 5px solid",borderRadius:"20px"}} allowfullscreen></iframe>
            
				
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Tunis 445</span> Ariana, Naser 1</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+216 53530891</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><Link href="iDriveGears@gmail.com">iDriveGears@gmail.com</Link></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>Apropos Idrive Gears</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<Link><i className="fa fa-facebook"></i></Link>
					<Link ><i className="fa fa-twitter"></i></Link>
					<Link ><i className="fa fa-linkedin"></i></Link>
					<Link ><i className="fa fa-github"></i></Link>

				</div>

			</div>

		</footer>
    )
}

export default Footer;