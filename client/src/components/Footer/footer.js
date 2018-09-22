import React, { Component } from 'react';
import "./footer.css";
import {Link} from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
    <div className="footer">
       {/* website name */}
        <div className="row">
            <div className="col-12"> <Link to="/">Chicago Sports Gifs</Link></div>
        </div>
        {/* links to other parts of site */}
        
        <div className="row">
            <div className="col-12">
                    <Link to="/home">Home</Link>
                    <Link to="/bears">Bears</Link>
                    <Link to="/blackhawks">Blackhawks</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/about-us">About Us</Link>
                
            </div>
        </div>
        {/* copyright */}
        <div className="row">
        <div className="col-12">
        <a href="alvarocastelan.com">Created by: &copy; 2018 Alvaro Castelan</a>
        </div>
   
       </div>
        {/* social media */}
        <div className="row">
            <div className="col-12">
                <div className="social-icon">
                        <a href="https://www.linkedin.com/in/alvarocastelan/"><span><i className="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></span></a>
                        <a href="https://github.com/acastelan21"><span><i className="fab fa-github fa-2x" aria-hidden="true"></i></span></a>
                        <a href="alvarocastelan.com"><span><i className="fas fa-desktop fa-2x" aria-hidden="true"></i></span></a>
                </div>
            
            </div>
        </div>
      </div>
    )
  }
}

export default Footer

