import React, { Component } from 'react'
import "./navBar.css";
import {Link} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
    <div>
        <div className="row" id="top-bottom-nav"></div>
        <div className="middle-nav" >
            <nav className="navbar">
                <a href="/" className="navbar-brand"> Windy City Sports Gifs </a>
                    <Link to="/bears">Bears</Link>
                    <Link to="/blackhawks">Blackhawks</Link>
                    <Link to="/cubs">Cubs</Link>
                    <Link to="/white-sox">White Sox</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/about-us"> About Us</Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
        <div className="row" id="top-bottom-nav"></div>
        
       
        
      </div>
    )
  }
}

export default NavBar
