import React, { Component } from 'react';
import "./home.css";
import ComingSoon from "../../components/ComingSoon";
export class Home extends Component {
  render() {
    return (
      <div className="home">
        <ComingSoon/>
      </div>
    )
  }
}

export default Home;
