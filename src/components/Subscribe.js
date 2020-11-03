import React from 'react';
import Mailchimp from 'react-mailchimp-form';

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

              <Mailchimp
                  action='https://africa.us10.list-manage.com/subscribe/post?u=af6164777f247c51b69625510&amp;id=e072d55bfb'
                        //Adding multiple fields:
                    fields={[
                      {
                        name: 'EMAIL',
                        placeholder: 'Your email address',
                        type: 'email',
                        required: true,
                        Tags: 'The Desk',
                        className: ''
                      },
                      // {
                      //   name: 'FNAME',
                      //   placeholder: 'name',
                      //   type: 'text',
                      //   required: true
                      // }
                    ]}
                    // Change predetermined language
                    messages = {
                      {
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "You must write an e-mail.",
                        duplicate: "Too many subscribe attempts for this email address",
                        button: "Subscribe"
                      }
                    }
                    // Add a personalized class
                    className='sub mb-5'
              />
      
            

      
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
