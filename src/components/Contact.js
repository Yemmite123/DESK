import React from 'react'
function Contact() {
    return (
        <div><br/><br/><br/>
             <div className="container-fluid ">
      <br/><br/><br/><br/>
      <div id="" className="container-fluid">
        <div id="row_sty" className="row hero_section_third">
          <div class="col-md-6 border-right">
            <div className="conform">
            <h3>Book a space</h3>
            <p>Join our workspace at The Desk </p>
            <div className="contSpace">
            <div id="" className="row">
              <div className="col-md-12 bookInput blueText">
                <select className="form-control mb-4">
                   <option selected disabled>Select a service</option>
                   <option className="option">Individual Daily (N 7,500)</option>
                   <option>Individual Weekly (N 25,000)</option>
                   <option>Individual Monthly (N 70,000)</option>
                   <option>Individual Quarterly (N 160,000)</option>
                   <option>Individual Bi-Annually (N 300,000)</option>
                   <option>Enterprise Daily (N 7,500)</option>
                   <option>Enterprise Weekly (N 25,000)</option>
                   <option>Enterprise Monthly (N 60,000)</option>
                   <option>Enterprise Quarterly (N 150,000)</option>
                   <option>Enterprise Bi-Annually (N250,000)</option>
                </select>
              </div>
              </div>
            <div id="" className="row">
              <div className="col-md-6 bookInput">
                <input type="text" id="" className="form-control mb-4" placeholder="Firstname"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="text" id="" className="form-control mb-4" placeholder="Lastname"></input>
              </div>
            </div>
            <div id="" className="row">
              <div className="col-md-6 bookInput">
                <input type="email" id="" className="form-control mb-4" placeholder="Email Address"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="number" id="" class="form-control mb-4" placeholder="Phone Number"></input>
              </div>
            </div>
            <div id="" className="row">
              <div className="col-md-6 bookInput">
                <input type="text" id="" className="form-control mb-4" placeholder="Business Industry"></input>
              </div>
              <div className="col-md-6 bookInput">
              <input type="text" id="" className="form-control mb-4" placeholder="Business Name"></input>
              </div>
            </div>
            <div id="" class="row">
              <div class="col-md-12 bookInput">
                <textarea className="form-control mb-4" placeholder="Business Description"></textarea>
              </div>
              <div className="col-md-12 bookInput">
              <input className="file form-control mb-4" type="file" id="gygyy" placeholder=""/>
              </div>
            </div>
            <div id="" class="row">
              <div class="col-md-12 bookInput">
              <button href="/#" id="booKBTN" className="btn ">Submit</button>
              </div>
              
            </div>
          </div>
          </div>
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
    )
}

export default Contact
