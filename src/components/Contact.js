import React from 'react';
import Axios from 'axios';
// import SweetAlert from 'sweetalert2-react';
import { PaystackButton } from 'react-paystack';
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        firstName: '',
        lastName: '',
        serviceSeleted: '',
        phoneNumber: '',
        businessIndustry: '',
        businessName: '',
        buisinessDescription: '',
        startdate: '',
        enddate: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }
}


handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
}


handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
        disabled: true
    });

    Axios.post('http://localhost:3030/api/email', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
        })
        .catch(err => {
            console.log(err);

            this.setState({
                disabled: false,
                emailSent: false
            });
        })

}

  render() {

    const config = {
      reference: (new Date()).getTime(),
      email: this.state.email,
      amount: this.state.serviceSeleted,
      publicKey: 'pk_test_6bfbf8b93e180b92765c63f31405a6dc54881b89',
  };

  
    const componentProps = {
        ...config,
        text: 'Pay Now',
        onSuccess: () => Swal.fire({
          title: '',
          icon: 'success',
          html:
            'Thank you, your booking has been successful.',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:
            '<a style="font-family: Proxima Nova Regular; color:#fff;" href="/"> Continue to home!</a>',
          confirmButtonAriaLabel: 'Thumbs up, great!',
        
        }), 
        onClose: () => Swal.fire(
          '',
          'Wait! You need this booking, don\'t go!!!!',
          'success'
        ),
    };

    


    return(
        <div>
          <br/><br/><br/>
             <div className="container-fluid ">
      <br/><br/><br/><br/>
      <div id="" className="container-fluid">
        <div id="row_sty" className="row hero_section_third">
        
          <div class="col-md-6 border-right">
          <form onSubmit={this.handleSubmit}>
            <div className="conform">
            <input hidden className="form-control" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            <h3>Book a space</h3>
            <p>Join our workspace at The Desk </p>
            <div className="contSpace">
            <div id="" className="row">
              <div className="col-md-12 bookInput blueText">
             
                <label>Select a service<sup style={{'color':'#F40000'}}>*</sup></label>
                <select id="serviceSeleted" name="serviceSeleted" type="text" value={this.state.serviceSeleted} onChange={this.handleChange} className="form-control mb-4" required>
                   <option selected disabled></option>
                   <option value="750000" className="option">Individual Daily (N 7,500)</option>
                   <option value="2500000">Individual Weekly (N 25,000)</option>
                   <option value="7000000">Individual Monthly (N 70,000)</option>
                   <option value="16000000">Individual Quarterly (N 160,000)</option>
                   <option value="30000000">Individual Bi-Annually (N 300,000)</option>
                   <option value="750000">Enterprise Daily (N 7,500)</option>
                   <option value="2500000">Enterprise Weekly (N 25,000)</option>
                   <option value="6000000">Enterprise Monthly (N 60,000)</option>
                   <option value="15000000">Enterprise Quarterly (N 150,000)</option>
                   <option value="25000000">Enterprise Bi-Annually (N 250,000)</option>
                </select>
              </div>
              </div>
            <div id="" className="row">
              <div className="col-md-6 bookInput">
                <label>First Name<sup style={{'color':'#F40000'}}>*</sup></label>
                <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange}  className="form-control mb-4" placeholder="" required></input>
              </div>
              <div className="col-md-6 bookInput">
                <label>Last Name <sup style={{'color':'#F40000'}}>*</sup></label>
              <input className="form-control mb-4" placeholder="" id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} required></input>
              </div>
            </div>
            <div id="" className="row">
              <div className="col-md-6 bookInput">
                <label>Email Address<sup style={{'color':'#F40000'}}>*</sup></label>
                <input className="form-control mb-4" placeholder="" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required></input>
              </div>
              <div className="col-md-6 bookInput">
                <label>Phone Number<sup style={{'color':'#F40000'}}>*</sup></label>
              <input id="phoneNumber" name="phoneNumber" type="number" value={this.state.phoneNumber} onChange={this.handleChange}  class="form-control mb-4" placeholder="" required></input>
              </div>
            </div>
            <div id="" className="row">
              <div className="col-md-6 bookInput">
                <label>Business Industry</label>
                <input className="form-control mb-4" placeholder="" id="businessIndustry" name="businessIndustry" type="text" value={this.state.businessIndustry} onChange={this.handleChange} ></input>
              </div>
              <div className="col-md-6 bookInput">
                <label>Business Name</label>
              <input className="form-control mb-4" placeholder="" id="businessName" name="businessName" type="text" value={this.state.businessName} onChange={this.handleChange} ></input>
              </div>
            </div>
            <div id="" class="row">
              <div class="col-md-12 bookInput">
                <label>Buisiness Description</label>
                <textarea className="form-control mb-4" placeholder="" id="buisinessDescription" name="buisinessDescription" type="text" value={this.state.buisinessDescription} onChange={this.handleChange} ></textarea>
              </div>
              </div>
              <div>
              <div id="" className="row">
                
              <div className="col-md-6 bookInput">
              <label>Start Date</label>
                <input className="form-control mb-4" placeholder="" id="startdate" name="startdate" type="date" value={this.state.startdate} onChange={this.handleChange} ></input>
              </div>
              <div className="col-md-6 bookInput">
                <label>End Date</label>
              <input className="form-control mb-4" placeholder="" id="enddate" name="enddate" type="date" value={this.state.enddate} onChange={this.handleChange} ></input>
              </div>
            </div>
            <div id="" class="row">
              <div className="col-md-12 bookInput">
                <label>Upload Identity card or Passport Photograph<sup style={{'color':'#F40000'}}>*</sup> </label>
              <input className="file form-control mb-4" type="file" id="gygyy" placeholder=""/>
              </div>
            </div>
            </div>
            <div id="" class="row">
              <div class="col-md-12 bookInput">
              <button type="submit"  disabled={this.state.disabled} id="booKBTN" className="btn booKBTN_disable">Submit</button>
              {this.state.emailSent === true   &&  <p className="d-inline success-msg">
              Email Sent   <PaystackButton {...componentProps}/> <span style={{'#booKBTN_disable': 'hidden'}}></span></p>}
              {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent <PaystackButton {...componentProps}/></p>}
              </div>
              
            </div>
          </div>
          </div>
          </form>
         
          </div>
         
      
          <div class="col-md-6">
           <div className="contacts"> 
           <h3>Contact Us</h3>
            <p>One of our workspace experts will contact you.</p>
              <div>
                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.000792784503!2d3.3651164148223125!3d6.521580524994838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de69498539b%3A0x61e31411b1bc213b!2sThe%20Bulb%20Africa!5e0!3m2!1sen!2sng!4v1603462343147!5m2!1sen!2sng" frameborder="0" id="map" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
              <div id="our_address" className="row">
              <div className="col-md-6 ">
                  <h3>Our Address</h3>
                  <h4>39 Ikorodu Road,</h4>
                  <p>Jibowu, Yaba, Lagos Nigeria</p>
                  <div>
                    <h5>General contact info</h5>
                    <h4>Phone Number</h4>
                    <p>+234 700 843 2852</p>
                  </div>
              </div>
              <div className="col-md-6">
                  <h3>Hours of Operation</h3>
                  <h4> 7 a.m. - 7 p.m.</h4>
                  <p>Monday - Sunday</p>
                  <div className="mailing">
                  <h5>Mailing address</h5>
                  <h4>39 Ikorodu Road,</h4>
                  <p>Jibowu, Yaba, Lagos Nigeria</p>
                        
                  </div>
              </div>
              
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
        </div>
   );
  }

}
export default Contact
