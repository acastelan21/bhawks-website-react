import React, { Component } from 'react'
import "./navBar.css";
export class NavBar extends Component {
  render() {
    return (
    <div>
        <div className="row" id="top-bottom-nav"></div>
        <div className="middle-nav" >
            <nav className="navbar">
                <a className="navbar-brand"> Windy City Sports Gifs </a>
                <a href="/bears" className="badge badge-danger">Bears</a>
                <a href="/blackhawks" className="badge badge-danger">Blackhawks</a>
                <a href="/cubs" className="badge badge-danger">Cubs</a>
                <a href="/white-sox" className="badge badge-danger">White Sox</a>
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
