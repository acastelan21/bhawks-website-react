import React, { Component } from 'react'

import "./page404.css";
export class Page404 extends Component {
  render() {
    return (
      <div className="page page404">
      <h1>Error: 404</h1>
        <img src="https://media.giphy.com/media/3oEjHWzZQaCrZW2aWs/giphy.gif" alt="houston we have a problem gif">
        </img>
        <p>The page you are looking does not exist</p>
        <a className="btn btn-primary btn-lg return" href="/" role="button">Return Home</a>
        
        
      </div>
    )
  }
}

export default Page404;
