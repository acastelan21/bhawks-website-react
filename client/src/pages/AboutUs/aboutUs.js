import React, { Component } from 'react';
import "./aboutUs.css"
import {Container} from "reactstrap";

export class AboutUs extends Component {
  
  render() {
    return (
      <div className="page aboutUs">
        <Container>
          <h2>•Our Mission•</h2>
          <p>To provide fans a place to view and search for quick highlights from their favorite Chicago teams and players.</p>
          <h2>•About•</h2>
          <p>The idea for this website came from me needing a gif of a specific play to send to a friend through text. Once I was not able to find one I decided to make my own. After that I thought to myself that I couldn't be the only one and hence this website was born. </p>
        </Container>
      </div>
    )
  }
}

export default AboutUs
