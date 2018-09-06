import React, { Component } from 'react';
import "./footer.css";
import {Link} from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
    <div className="footer">
       {/* website name */}
        <div className="row">
            <div className="col-12"> <Link to="/">Windy City Sports Gifs</Link></div>
        </div>
        {/* links to other parts of site */}
        
        <div className="row">
            <div className="col-12">
                    <Link to="/home">Home</Link>
                    <Link to="/bears">Bears</Link>
                    <Link to="/blackhawks">Blackhawks</Link>
                    <Link to="/cubs">Cubs</Link>
                    <Link to="/white-sox">White Sox</Link>
                    <Link to="/contact-us">Contact Us</Link>
                
            </div>
        </div>
        {/* social media */}
        <div className="row">
            <div className="col-12">
                <div class="social-icon">
                        <a href="/"><span><i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i></span></a>
                        <a href="/"><span><i class="fab fa-facebook-square fa-2x" aria-hidden="true"></i></span></a>
                        <a href="/"><span><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></span></a>
                </div>
            
            </div>
        </div>
        {/* copyright */}
        <div className="row">
        <div className="col-12">
        <a href="alvarocastelan.com">&copy; 2018 Alvaro Castelan</a>
        </div>
   
       </div>
      </div>
    )
  }
}

export default Footer

