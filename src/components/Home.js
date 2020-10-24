import React, { Component } from "react";
import { MDBModal, MDBModalBody } from 'mdbreact';
import { MDBNavItem } from "mdbreact";
import { Link } from "react-scroll";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import { MDBTabPane, MDBTabContent, MDBNav, MDBIcon } from 'mdbreact';
import { MDBContainer,  MDBModalHeader } from 'mdbreact';
import Subscribe from '../components/Subscribe';


class Home extends Component {

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
      


    <div id="logo"  className="container-fluid hero_section">
    <br/><br/><br/><br/>
      <div id="container_fluid" className="container">
        <div className="row">
          <div className="col-md-6 hero_col6">
            <h1>Accessible, convenient, and functional workspaces.
              <br/>
              <a href="/Contact" id="btn_warning" className="btn btn_warning">Book a space</a>
            </h1>
            
          </div>
          <div className="col-md-6">
                <div className="view z-depth-1 rounded_v">
                  <div className="mask flex-center ">
                    <span  id="play" className="btn-floating  btn_circle" onClick={this.toggleMod}><i className="fas fa-play"></i></span>
                  </div>
                </div>


          </div>
        </div>
      </div>
    </div>


    <div id="section1" className="container-fluid hero_section_second">
      <br/><br/><br/><br/>
      <div id="container_fluid" className="container">
        <div className="row">
          <div  className="col-md-6 whythedesk">
            <div className="whythedesk_mag">
              <h1>Why The Desk?
                <br/>
               
              </h1>
              <p>
                The Desk workspace is designed to bring people and businesses together. We are a platform for this community to grow their business and connect with others.
               </p>
            </div>
            
          </div>
          <div className="col-md-6">
            
          <div className="card card-cascade wider reverse thedesk">

            <div className="view view-cascade overlay">
              <a href="/#">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body card-body-cascade thedesk_facility">
          
              <h4 className="card-title facility_tit" >
                Our facility is designed to inspire solutions and enhance productivity
              </h4>
              <p className="facility_para">
                We host a community of tech startups in need of a convenient, functional and inspiring workspace for their daily and periodic official needs. We take care of everything to make you comfortable, allowing you to work and have meetings productively.
              </p>
            </div>

          </div> 
          <div className="thedesk_facility1">

          </div>
            </div>
          </div>
        </div>
    </div>

    <div className="container-fluid hero_section_third">
      <br/><br/>
      <div id="container_fluid" className="container">
        <div className="core_values">
          <h3 className="text-center core_values_h3">Our Offerings & Core Values</h3>
        <h3 className="text-center core_values_p">We offer flexible term, full-service workspaces to meet your needs</h3>
        </div>
      
        <div className="row">
          <div className="col-md-4">
            <div className="image_position_left">
            </div>
            <div id="space_sty">
              <h3>The Desk</h3>
              <p>convenient co-working space suitable for individuals and groups.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image_position_center">
            </div>
            <div id="space_sty" className="image_position_div_center">
              <h3>Meeting Rooms</h3>
              <p>Serviced spaces for meeting suitable for interviews, business meetings, conference calls and trainings.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image_position_right">
            </div>
            <div id="space_sty" className="image_position_div_right">
              <h3>classNamerooms and Coliseum</h3>
              <p>Flexible spaces for trainings and meetings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
     <br/>

    <div className="container-fluid ">
      <br/><br/><br/><br/>
      <div id="" className="container-fluid">
        <div id="row_sty" className="row hero_section_third">
          <div className="col-md-4">
           <div className="our_offerings">
            <h3>Our Offerings</h3>
            <h4>Our solutions are designed to meet your needs</h4>
            <p>The Desk coworking space is created with users’ absolute convenience in mind. Our space was consciously designed and built to constantly inspire problem solvers and give them access to top-notch amenities to ease their process of building sustainable businesses.</p>
           </div>
          </div>
          <div id="big_circle" className="col-md-8">
            <div id="pad" className="row space_top">
              <div className="col-md-6">
                <div className="card card_cont">
                  <div className="card-body">
                    <img className="icon_img" src="images/Groupaccess1.svg" alt=""/>
                    <br/>
                    <div className="access">
                      <h4 className="card-title">24/7 Access</h4>
                      <p className="card-text">Our coworking facility is open every day of the week. Users are at liberty to work whenever and for however long it takes.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6">
            
                <div className="card card_cont">
                 
                  <div className="card-body">
                    <img className="icon_img" src="images/Groupprivate.svg" alt=""/>
                    <br/>
                    <div className="access">
                      <h4 className="card-title">Private Meeting Rooms</h4>
                      <p className="card-text">Our facility has provisions for meeting rooms of different sizes to allow users privacy for their business meetings.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <br/>
            <div id="pad" className="row">
              <div className="col-md-6">
                <div className="card card_cont">
                  <div className="card-body">
                    <img className="icon_img" src="images/Groupstartup.svg" alt=""/>
                    <br/>
                    <div className="access">
                      <h4 className="card-title">Startup Friendly</h4>
                      <p className="card-text">
                      All you have to do is focus on building and growing your business or getting your job done. A functional, ready to use space will be waiting each time you walk in.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <img className="icon_img" src="images/Relax Hardwork Sleep Home Night.svg" alt=""/>
                    <br/>
                    <div className="access">
                      <h4 className="card-title">Accessibility</h4>
                      <p className="card-text space_bot">
                      The Desk sits pretty on Ikorodu Road, Jibowu in Yaba. You will be working from the heart of Lagos tech ecosystem. It’s a great space for meetings too, our facility is easily accessible from anywhere in Lagos.                      
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    

    <div className="container-fluid hero_section_fit">
 
      <br/><br/><br/><br/>
      <div id="section2" className="container-fluid">
      <h1 className="text-center plan">Our Plans & Pricing</h1>
      <div id="row_sty" className="row">
      <MDBNav tabs>
          <MDBNavItem  id="nav_tabs">
            <Link
              link
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              <span className="ind"><MDBIcon icon="user" /> Individual Plans </span>
            </Link>
          </MDBNavItem>
          <MDBNavItem  id="nav_tabs">
            <Link
              link
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              <span className="ind"> <MDBIcon icon="users" /> Business Plans</span>
            </Link>
          </MDBNavItem>
     
        </MDBNav>
        </div>
        <MDBTabContent
          className=""
          activeItem={this.state.activeItem}
        >
          <MDBTabPane tabId="1" role="tabpanel">
          <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className=""
      >
         
         
        <MDBCarouselInner>
        <div id="row_sty" className="row">
          <MDBCarouselItem itemId="1">
          
              
              <div className="col-md-4" style={{float:'left'}}>
               <div className="card card_sty mb-2">
        
                  <div className="card-body">
                    <span className="card-title Individual">Individual</span> 
                    <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                    <h1 className="card-title daily">N 7,500/ Daily</h1> 
                      <div className="individual_plan">
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                        <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                      </div>
                    <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                    <br/> <br/>
                  </div>
                </div>
              </div>
        
              <div className="col-md-4" style={{float:'left'}}>
                <div className="card card_sty mb-2">
         
                   <div className="card-body">
                     <span className="card-title Individual">Individual</span> 
                     <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                     <h1 className="card-title daily">N 25,000/ Weekly</h1> 
                       <div className="individual_plan">
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                       </div>
                     <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                     <br/> <br/>
                   </div>
                 </div>
               </div>
        
               <div className="col-md-4 " style={{float:'left'}}>
                <div className="card card_sty mb-2">
         
                   <div className="card-body">
                     <span className="card-title Individual">Individual</span> 
                     <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                     <h1 className="card-title daily">N 70,000/Monthly</h1> 
                       <div className="individual_plan">
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                       </div>
                     <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                     <br/> <br/>
                   </div>
                 </div>
               </div>
        
       
           
               
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
              
              <div className="col-md-4 " style={{float:'left'}}>
                <div className="card card_sty mb-2">
         
                   <div className="card-body">
                     <span className="card-title Individual">Individual</span> 
                     <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                     <h1 className="card-title daily">N 160,000/ Quarterly</h1> 
                       <div className="individual_plan">
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                       </div>
                     <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                     <br/> <br/>
                   </div>
                 </div>
               </div>
        
               <div className="col-md-4 " style={{float:'left'}}>
                <div className="card card_sty mb-2">
         
                   <div className="card-body">
                     <span className="card-title Individual">Individual</span> 
                     <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                     <h1 className="card-title daily">N 300,000/ Bi-Annually</h1> 
                       <div className="individual_plan">
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                       </div>
                     <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                     <br/> <br/>
                   </div>
                 </div>
               </div>
        
               <div className="col-md-4 " style={{float:'left'}}>
                <div className="card card_sty mb-2">
         
                   <div className="card-body">
                     <span className="card-title Individual">Individual</span> 
                     <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                     <h1 className="card-title daily">N 7,500/ Daily</h1> 
                       <div className="individual_plan">
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                       </div>
                     <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                     <br/> <br/>
                   </div>
                 </div>
               </div>
        
          </MDBCarouselItem>
        </div>

        </MDBCarouselInner>
        </MDBCarousel>

          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
           
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className=""
      >
        <MDBCarouselInner>
        <div id="row_sty" className="row">
          <MDBCarouselItem itemId="1">
            <div className="col-md-4" style={{float:'left'}}>
                 <div className="card card_sty mb-2">
          
                    <div className="card-body">
                      <span className="card-title Individual">Enterprise</span> 
                      <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                      <h1 className="card-title daily">N 7,500/ Daily</h1> 
                        <div className="individual_plan">
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                          <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                        </div>
                      <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                      <br/> <br/>
                    </div>
                  </div>
                </div>
          
                <div className="col-md-4" style={{float:'left'}}>
                  <div className="card card_sty mb-2">
           
                     <div className="card-body">
                       <span className="card-title Individual">Enterprise</span> 
                       <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                       <h1 className="card-title daily">N 25,000/ Weekly</h1> 
                         <div className="individual_plan">
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         </div>
                       <a href="#!" onClick={this.toggleBook} id="btn_primary" className="btn"><span className="btn_text">Join Now</span></a>
                       <br/> <br/>
                     </div>
                   </div>
                 </div>
          
                 <div className="col-md-4 " style={{float:'left'}}>
                  <div className="card card_sty mb-2">
           
                     <div className="card-body">
                       <span className="card-title Individual">Enterprise</span> 
                       <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                       <h1 className="card-title daily">N 60,000/Monthly</h1> 
                         <div className="individual_plan">
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         </div>
                       <a href="#!" onClick={this.toggleBook} id="btn_primary" className="btn"><span className="btn_text">Join Now</span></a>
                       <br/> <br/>
                     </div>
                   </div>
                 </div>
        
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
                <div className="col-md-4" style={{float:'left'}}>
                  <div className="card card_sty mb-2">
           
                     <div className="card-body">
                       <span className="card-title Individual">Enterprise</span> 
                       <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                       <h1 className="card-title daily">N 150,000/ Quarterly</h1> 
                         <div className="individual_plan">
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         </div>
                       <a href="#!" onClick={this.toggleBook} id="btn_primary" className="btn"><span className="btn_text">Join Now</span></a>
                       <br/> <br/>
                     </div>
                   </div>
                 </div>
          
                 <div className="col-md-4 " style={{float:'left'}}>
                  <div className="card card_sty mb-2">
           
                     <div className="card-body">
                       <span className="card-title Individual">Enterprise</span> 
                       <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                       <h1 className="card-title daily">N 250,000/ Bi-Annually</h1> 
                         <div className="individual_plan">
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         </div>
                       <a href="#!" onClick={this.toggleBook} id="btn_primary" className="btn"><span className="btn_text">Join Now</span></a>
                       <br/> <br/>
                     </div>
                   </div>
                 </div>
          
                 <div className="col-md-4 " style={{float:'left'}}>
                  <div className="card card_sty mb-2">
           
                     <div className="card-body">
                       <span className="card-title Individual">Enterprise</span> 
                       <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                       <h1 className="card-title daily">N 7,500/ Daily</h1> 
                         <div className="individual_plan">
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                           <p><span className="markout"><img  src="images/Groupmark.svg" alt=""/></span> Functional Kitchenet <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt=""/></sup></p>
                         </div>
                       <a href="#!" onClick={this.toggleBook} id="btn_primary" className="btn"><span className="btn_text">Join Now</span></a>
                       <br/> <br/>
                     </div>
                   </div>
                 </div>
          
            
              
          </MDBCarouselItem>
        </div>

        </MDBCarouselInner>
      </MDBCarousel>
          </MDBTabPane>
          
        </MDBTabContent>
     
    </div>
    </div>

    
    {/* <!-- FIT SECTION --> */}
     

    {/* <!-- SIX SECTION --> */}
      <Subscribe/>
  {/* <!-- SIX SECTION --> */}


      <MDBModal isOpen={this.state.modal} toggle={this.toggleMod} centered size="lg">
        {/* <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader> */}
        <MDBModalBody>
        <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
        <iframe id="player" title="DESK" className="embed-responsive-item" src="https://www.youtube.com/embed/MSsQtcTtmOI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
        </MDBModalBody>
        {/* <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter> */}
      </MDBModal>

  {/* <!-- Footer --> */}

   <MDBContainer fluid>
      <MDBModal isOpen={this.state.modal1} toggle={this.toggleBook} size="lg" >
        <MDBModalHeader toggle={this.toggleBook}></MDBModalHeader>
        <MDBModalBody>
          <div className="container">
            <div id="row_bookIN" className="row">
              <div className="col-md-6 bookInput">
                <input type="text" id="" className="form-control mb-4" placeholder="Firstname"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="text" id="" className="form-control mb-4" placeholder="Lastname"></input>
              </div>
            </div>
            <div id="row_bookIN" className="row">
              <div className="col-md-6 bookInput">
                <input type="email" id="" className="form-control mb-4" placeholder="Email Address"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="number" id="" class="form-control mb-4" placeholder="Phone Number"></input>
              </div>
            </div>
            <div id="row_bookIN" className="row">
              <div className="col-md-6 bookInput">
                <input type="text" id="" className="form-control mb-4" placeholder="Business Industry"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="text" id="" className="form-control mb-4" placeholder="Business Name"></input>
              </div>
            </div>
            <div id="row_bookIN" class="row">
              <div class="col-md-12 bookInput">
                <textarea className="form-control mb-4" placeholder="Business Description"></textarea>
              </div>
              <div className="col-md-12 bookInput">
              <input className="file form-control mb-4" type="file" id="fyfyfy" ></input>
              </div>
            </div>
            <div id="row_bookIN" class="row">
              <div class="col-md-12 bookInput">
              <button href="/#" id="booKBTN" className="btn btn_warning">Book Now</button>
              </div>
              
            </div>
          </div>
        </MDBModalBody>
        
      </MDBModal>
    </MDBContainer>

        </div>
    );
}
}

export default Home
