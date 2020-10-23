import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { Link } from "react-scroll";

class Navbar extends Component {

    state = {
      modal: false,
      isOpen: false,
      activeItem: "1"
    }
    toggleBook = () => {
      this.setState({
        modal1: !this.state.modal1
      });
    }
    toggleMod = () => {
      this.setState({
        modal: !this.state.modal
      });
    }
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
  
    toggle = tab => () => {
      if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
      }
      
    }
    
    render() {
      return (
        <div>
            <MDBNavbar style={{'background-color': '#10152C', 'box-shadow': 'none',}} dark expand="md" fixed="top">
      <div id="container_fluid" className="container-fluid">
        <MDBNavbarBrand>
        <MDBNavLink to="/">
           <img className="navLogo" src="../images/the-desk-bulb-logo.6a2228d2 1.svg" alt=""/>
        </MDBNavLink>
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
              <MDBNavLink to="/Contact" style={{'background': '#E6AF17', 'color':'#10152C'}}><yem>Book a space</yem></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </div>
      </MDBNavbar>
        </div>
     );
    }
  }

export default Navbar
