import React, { Component } from 'react'
import SeasonCard from "../../components/SeasonCard";
export class Bears extends Component {
   
  
  render() {
    return (
      <div className="page bears">
      <div className="row">
        <div className="col-6">
          <SeasonCard
          image={"https://www.bleachernation.com/bears/wp-content/uploads/2017/04/chicago-bears-face-logo-new-feature.jpg"}
          date = {"2017-2018"}
          link={"/2017-2018"}
          />  
        </div>
        <div className="col-6">
          <SeasonCard
          image={"https://www.bleachernation.com/bears/wp-content/uploads/2017/04/chicago-bears-face-logo-new-feature.jpg"}
          date = {"2018-2019"}
          link={"/2018-2019"}

          />
        </div>
      </div>
        
        
       
        
      </div>
    )
  }
}

export default Bears
