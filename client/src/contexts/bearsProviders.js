import React from 'react';
import axios from "axios";


export const BearsContext = React.createContext();

export default class Provider extends React.Component{
    constructor(){
        super();
        this.state={
          allData: []
        }
                
        
      }
        componentWillMount(){
          axios.get("/api/database").then(res=>{
            console.log("res.data", res.data)
            this.setState({allData: res.data})
            
          })
        }
    


render() {
  const BearsData = this.state
  console.log("bears data", BearsData); 
    return (
        <BearsContext.Provider value={{
            BearsData : BearsData
        }}>{this.props.children}</BearsContext.Provider>
    )
}
}