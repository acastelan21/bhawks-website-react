import React, { Component } from 'react'
import FilterBar from "../../components/FilterBar";
import {ThemeContext} from "../../providers";

export class Bears extends Component {
 
  
    

  render() {
    
    return (
      <div className="page bears">
      <FilterBar/>
      <ThemeContext.Consumer>
        {(context) => (
          <div>
            {context.BearsData.allData[0].gifs[0].season}
          {context.BearsData.allData.map((info,i)=> (
            <div key={i}>
           
            <p>{i} {info.player}  </p>
            <p>{i}.1  {info.position}</p>
            {info.gifs.map((nested, i)=>(
              <div>{i}.2 {nested.gifLink}</div>
            ))}
       
          </div>
          
          
        ))}
          </div>
          
          
        )}
       
      </ThemeContext.Consumer> 
      </div>
    )
  }
}

export default Bears;