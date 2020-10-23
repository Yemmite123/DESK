import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <div className="container-fluid hero_section_six">
      <br/><br/><br/><br/>
      <div className="container-fluid">

        {/* <!-- Section --> */}
        <section>          
          <div className="">
      
            <div className="container text-center  subscribe">
      
              <h3 className="pb-2">Subscribe to our newsletter</h3>
              <p className="pt-2 mb-5">Be the first to know about special offers and events happening at The Desk.</p>
      
              <form className="mb-5" action="" method="post" target="_blank">
                <div className="form-row">
                  <div className="col-md-4 ml-auto">
                    <div className="input-group sub">
                      
                      <input type="email" name="EMAIL" className="form-control" placeholder="Your email address"/>
                </div>
                  </div>
      
                  <div className="col-md-2 mr-auto sub2">
                    <button className="btn">Subscribe</button>
                  </div>
                </div>
              </form>

      
            </div>
      
          </div>
      
        </section>
        {/* <!-- Section --> */}
        
      </div>
    </div>
        </div>
    )
}

export default Subscribe
