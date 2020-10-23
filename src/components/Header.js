import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
        <div>
            <Router>
      <MDBNavbar style={{'background-color': '#10152C', 'box-shadow': 'none',}} dark expand="md" fixed="top">
      <div id="container_fluid" className="container-fluid">
        <MDBNavbarBrand>
        <Link to="logo">
           <img className="navLogo" src="images/the-desk-bulb-logo.6a2228d2 1.svg" alt=""/>
        </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <li className="nav-item">
              <Link className="nav-link navLink" to="section1">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link navLink" to="section2">Plan</Link>
            </li>
            <MDBNavItem>
              <MDBNavLink className="navLink" to="#!">Directory</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={{'background': '#E6AF17', 'color':'#10152C'}} to="#!"><yem>Book a space</yem></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </div>
      </MDBNavbar>
</Router>
        </div>
    )
}

export default Header
