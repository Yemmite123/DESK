import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem  } from "mdbreact";
import { MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBModal, MDBModalBody,} from
"mdbreact";
import { MDBContainer,  MDBModalHeader } from 'mdbreact';
import emailjs from 'emailjs-com';
class Plans extends Component {

  state = {
    modal: false,
    isOpen: false,
    activeItem: "1",
    activeItemJustified: "1"
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

  toggleJustified = tab => e => {
    if (this.state.activeItemJustified !== tab) {
      this.setState({
        activeItemJustified: tab
      });
    }
  };

  
  
  
  render() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_t0arstz', 'template_n1sx5yt', e.target, 'user_cwZkHsqvhYnqMg2kWFBi0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);

        });
    }
    return (
      

    <div id="section2" className="container-fluid section_plan">
    <MDBContainer-fluid>
    <br/><br/>
    <h1 className="text-center plan">Our Plans & Pricing</h1>
    <div className="text-center">
      <span className="individualPlan btn" link to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab">Individual Plans</span>
      <span className="individualPlan btn" link to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >Business Plans</span>
 </div>
 <br/><br/>

<MDBTabContent
 className=""
 activeItem={this.state.activeItemJustified}
>
 <MDBTabPane tabId="1" role="tabpanel">
 <MDBCarousel
      style={{'margin-left':'4%',  'background':' #F9FAFA'}}
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={true}
      
    > 
    
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBRow>
            <MDBCol md="4">
           
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
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>


            </MDBCol>
            <MDBCol md="4">
            <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Individual</span> 
                <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                <h1 className="card-title daily">N 25,000/ Weekly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>
            </MDBCol>
            <MDBCol md="4">

              <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Individual</span> 
                <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                <h1 className="card-title daily">N 70,000/Monthly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
             </div>
            
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <MDBRow>
            <MDBCol md="4">
           
            <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Individual</span> 
                <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                <h1 className="card-title daily">N 160,000/ Quarterly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>


            </MDBCol>
            <MDBCol md="4">
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
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>
            </MDBCol>
            <MDBCol md="4">

              <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Individual</span> 
                <img className="float-right plan_icon" src="images/Group 84Individual.svg" alt=""/>
                <h1 className="card-title daily">N 25,000/ Weekly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
             </div>
            
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
     
      </MDBCarouselInner>
</MDBCarousel>
 </MDBTabPane>
 <MDBTabPane tabId="2" role="tabpanel">
 <MDBCarousel
      style={{'margin-left':'4%',  'background':' #F9FAFA'}}
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={true}
      
    > 
       
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBRow>
            <MDBCol md="4">
           
            <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Enterprise</span> 
                <img className="float-right plan_icon" src="images/enterpise.svg" alt=""/>
                <h1 className="card-title daily">N 25,000/ Weekly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>


            </MDBCol>
            <MDBCol md="4">
            <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Enterprise</span> 
                <img className="float-right plan_icon" src="images/enterpise.svg" alt=""/>
                <h1 className="card-title daily">N 60,000/ Monthly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>
            </MDBCol>
            <MDBCol md="4">

              <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Enterprise</span> 
                <img className="float-right plan_icon" src="images/enterpise.svg" alt=""/>
                <h1 className="card-title daily">N 150,000/Quarterly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
             </div>
            
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <MDBRow>
            <MDBCol md="4">
           
            <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Enterprise</span> 
                <img className="float-right plan_icon" src="images/enterpise.svg" alt=""/>
                <h1 className="card-title daily">N 250,000/ Bi-Annually</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>


            </MDBCol>
            <MDBCol md="4">
            <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Enterprise</span> 
                <img className="float-right plan_icon" src="images/enterpise.svg" alt=""/>
                <h1 className="card-title daily">N 7,500/ Daily</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
            </div>
            </MDBCol>
            <MDBCol md="4">

              <div className="card card_sty mb-2">
        
              <div className="card-body">
                <span className="card-title Individual">Enterprise</span> 
                <img className="float-right plan_icon" src="images/enterpise.svg" alt=""/>
                <h1 className="card-title daily">N 25,000/ Weekly</h1> 
                  <div className="individual_plan">
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Dedicated desk <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Mail Management <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Unlimited Wifi <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Free but limited printing <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Access to Board Room <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Lounge Areas <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                    <p><span className="markout"><img  src="images/Groupmark.svg" alt="" /></span> Functional Kitchenette <sup ><img   data-toggle="tooltip" title="7:00 am - 7:00 pm" src="images/Vector.svg" alt="" /></sup></p>
                  </div>
                <a href="#!" id="btn_primary" onClick={this.toggleBook} className="btn"><span className="btn_text">Join Now</span></a>
                <br/> <br/>
              </div>
             </div>
            
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
     
      </MDBCarouselInner>
</MDBCarousel>
 </MDBTabPane>

</MDBTabContent>
    







    



    </MDBContainer-fluid>


    <MDBContainer fluid>
      <MDBModal isOpen={this.state.modal1} toggle={this.toggleBook} size="lg" >
        <MDBModalHeader toggle={this.toggleBook}></MDBModalHeader>
        <MDBModalBody>
          <div className="container">
          <form className="contact-form" onSubmit={sendEmail}>
            <div id="row_bookIN" className="row">
              <div className="col-md-6 bookInput">
                <input type="text" id="" className="form-control mb-4" placeholder="Firstname" name="firstname"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="text" id="" className="form-control mb-4" placeholder="Lastname" name="lastname"></input>
              </div>
            </div>
            <div id="row_bookIN" className="row">
              <div className="col-md-6 bookInput">
                <input type="email" id="" className="form-control mb-4" placeholder="Email Address" name="email"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="number" id="" class="form-control mb-4" placeholder="Phone Number" name="number"></input>
              </div>
            </div>
            <div id="row_bookIN" className="row">
              <div className="col-md-6 bookInput">
                <input type="text" id="" className="form-control mb-4" placeholder="Business Industry" name="businessName"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="text" id="" className="form-control mb-4" placeholder="Business Name" name="businessName"></input>
              </div>
            </div>
            <div id="row_bookIN" class="row">
              <div class="col-md-12 bookInput">
                <textarea className="form-control mb-4" placeholder="Business Description" name="businessDescription"></textarea>
              </div>
              <div className="col-md-12 bookInput">
              <input className="file form-control mb-4" type="file" id="fyfyfy" ></input>
              </div>
            </div>
            <div id="row_bookIN" class="row">
              <div class="col-md-12 bookInput">
              <button type="submit" id="booKBTN" className="btn btn_warning">Book Now</button>
              </div>
              
            </div>
            </form>
          </div>
        </MDBModalBody>
        
      </MDBModal>
    </MDBContainer>
    </div>




 );
}
}

export default Plans;