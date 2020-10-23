import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from 'mdbreact';
import { MDBTabPane, MDBTabContent, MDBNav, MDBIcon } from 'mdbreact';
import {  MDBNavItem } from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";

const Plans = () => {
    return (
        <div>
            
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
        </div>
    )
}

export default Plans
