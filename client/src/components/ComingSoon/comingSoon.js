import React, { Component } from "react";
import UnderConstruction from "../../assets/images/under-construction.gif";
import "./comingSoon.css"
export class ComingSoon extends Component {
  render() {
    return (
      <div className="comingSoonContainer">
        <div className="row">
            <div className="col-12">
                {/* <img src={UnderConstruction} alt="under construction gif" className="underConstructionGif"></img> */}
            </div>
        </div>
      </div>
    )
  }
}

export default ComingSoon;
