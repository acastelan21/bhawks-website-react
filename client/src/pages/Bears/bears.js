import React, { Component } from 'react'
import FilterBar from "../../components/FilterBar";
import axios from "axios"; 
export class Bears extends Component {
  constructor(props){
    super(props);
    this.state={
      allData: ""
    }
    
    
  }
    componentWillMount(){
      axios.get("/api/database").then(res=>{
        console.log("res.data", res.data)
        const data = res.data[0]; 
        this.setState({allData: data})
        
      })
    }
   
  
    

  render() {
    
    return (
      <div className="page bears">
      <FilterBar/>
      <div>
      <div className ="row justify-content-center">
      <div className="col-4">
      <div id="players" className="card" style={{width: 18 + "rem"}}>
        <div className="card-body">
          <h4 className="card-text">{this.state.allData.player} | {this.state.allData.position} | </h4>
          
          <p> </p>
</div>
</div>
</div>
</div>
      </div>
        
       
        
      </div>
    )
  }
}

export default Bears;