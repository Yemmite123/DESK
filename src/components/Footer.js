import React from 'react'
import { MDBNavLink } from "mdbreact";
const footer = () => {
    return (
        <div>
           <footer className="page-footer font-small pt-4 container_fluid1">
  {/* <!-- Footer Links --> */}
  <div className="container-fluid text-center text-md-left ">

    {/* <!-- Grid row --> */}
    <div style={{'margin-top':'2%'}}  id="row_sty" className="row d-flex align-items-center">

      {/* <!-- Grid column --> */}
    
      <div className="col-md-3">
        <p>  <img className="image-fluid" src="images/footer-logo 1.svg" alt=""/> <span className="Copyright">Copyright © 2019 thebulb 2020.</span> </p>
      </div>
      <div className="col-md-2">
        <MDBNavLink to="/Privacypolicy"><p  className="privacy"><div className="pri">Privacy policy</div></p> </MDBNavLink> 
      </div>
      <div className="col-md-2">
      <MDBNavLink to="/TermsOfUse"> <p className="privacy">Terms of use</p></MDBNavLink> 
      </div>
     
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-5">

        {/* <!-- Social buttons --> */}
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/DeskAtTheBulb" target="_blank" rel="noopener noreferrer" className="btn-floating btn-sm">
                <i className="fab fa-2x fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/DeskAtTheBulb" target="_blank" rel="noopener noreferrer" className="btn-floating btn-sm">
                <i className="fab fa-2x fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/desk.africa/" target="_blank" rel="noopener noreferrer" className="btn-floating btn-sm">
               <i className="fab fa-2x fa-instagram"></i>
              </a>
            </li>

            <li className="list-inline-item">
              <a href="https://www.youtube.com/watch?v=mvDsq-KaukI&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="btn-floating btn-sm">
               <i className="fab fa-2x fa-youtube"></i>
              </a>
            </li>
            
          </ul>
        </div>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}

</footer>
        </div>
    )
}

export default footer
