import React, { Component } from 'react'
import Star from "../../assets/images/chistar.png"
import "./navBar.css";
import {Link} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
    <div className="navi">
        <div className="row" id="top-bottom-nav">
       
        </div>
        <div className="middle-nav" >
            <nav className="navbar">
                <a href="/" className="navbar-brand"> Chicago Sports Gifs </a>
                    <img className="star" src={Star}/>
                    <Link to="/bears">Bears</Link>
                    <img className="star" src={Star}/>
                    <Link to="/blackhawks">Blackhawks</Link>
                    <img className="star" src={Star}/>
                    <Link to="/contact-us">Contact Us</Link>
                    <img className="star" src={Star}/>
                    <Link to="/about-us"> About Us</Link>
            </nav>
        </div>
        <div className="row" id="top-bottom-nav"></div>
        
       
        
      </div>
    )
  }
}

export default NavBar
