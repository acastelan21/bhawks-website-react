import React, { Component } from 'react'
import FilterBar from "../../components/FilterBar";
import {ThemeContext} from "../../providers";
export class Bears extends Component {
 
  
    

  render() {
    
    return (
      <div className="page bears">
      <FilterBar/>
      <ThemeContext.Consumer>
        {(context)=> (
          <p>{context.name} | {context.position} | {context.gif}</p>
        )}
      </ThemeContext.Consumer>

        
       
        
      </div>
    )
  }
}

export default Bears;