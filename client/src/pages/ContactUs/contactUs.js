import React, { Component } from 'react'
import "./contactUs.css"
export class ContactUs extends Component {
  render() {
    return (
<div className="page contactUs">
<h2 class="section-title"><span>Contact Me</span></h2>
  <form id="contact-form" method="POST" action="https://formspree.io/alvaro.castelan.21@gmail.com">

    <div className="messages"></div>

    <div className="controls">


      <div className="row">

        <div className="col-md-6 col-xs-12 form-group">
          <input id="form_name" type="text" name="name" className="form-control" placeholder="Name *" required="required" data-error="Name is required."/>
          <div className="help-block with-errors"></div>
        </div>

        <div className="col-md-6 col-xs-12 form-group">
          <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required="required" data-error="Valid email is required."/>
          <div className="help-block with-errors"></div>
        </div>

      </div>

      <div className="row">

        <div className="col-md-12 col-xs-12 form-group">
          <input id="form_subject" type="text" name="_subject" className="form-control" placeholder="Subject"/>
          <div className="help-block with-errors"></div>
        </div>


      </div>

      <div className="row">
          
        <div className="form-group col-md-12">
          <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
          <div className="help-block with-errors"></div>
        </div>

        <div className="col-md-12">
          <input type="submit" className="btn btn-success btn-send" value="Send message"/>
        </div>

        </div>
    
    </div>


  </form>
</div>
    )
  }
}

export default ContactUs
