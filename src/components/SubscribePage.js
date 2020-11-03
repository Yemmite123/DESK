import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class SubscribePage extends Component {
  render() {
    return (
      
        <div>
          <br/><br/><br/><br/><br/><br/>
          <Mailchimp
       
       action='https://africa.us10.list-manage.com/subscribe/post?u=af6164777f247c51b69625510&amp;id=e072d55bfb'
       //Adding multiple fields:
  fields={[
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
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
      button: "Subscribe!"
    }
  }
  // Add a personalized class
  className='form-control'
       />
        <br/><br/><br/><br/><br/><br/>
        </div>
    );
  }
}

export default SubscribePage;