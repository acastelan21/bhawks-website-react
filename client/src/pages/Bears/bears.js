import React, { Component } from 'react'
import FilterBar from "../../components/FilterBar";
import {BearsContext} from "../../contexts/bearsProviders";
import PlayerCard from "../../components/PlayerCard";
import "./bears.css"
export class Bears extends Component {
 
  
    

  render() {
    
    return (
      <div className="page bears">
      <FilterBar/>
      <BearsContext.Consumer>
        {(context) => (
          <React.Fragment>
            
            {/* The first map to access first level of array of data in state */}
          {context.BearsData.allData.map((info, i)=> (
            <div key={i}>
            {/* the second map is to access the nested array inside data of state */}
            {info.gifs.map((nested,j,k)=>(
              
              <div key={j} >
              <PlayerCard
          key={k}
          player = {info.player}
          position ={info.position}
          number ={info.number}
          season = {nested.season}
          date = {nested.date}
          opponent={nested.opponent}
          highlight={nested.highlight}
          gifLink={nested.gifLink}

            />
              </div>
              
              
              

            ))}
            </div>
            


          ))}
           


            </React.Fragment>
            

          
          
         
        )}
       
      </BearsContext.Consumer> 
      </div>
    )
  }
}

export default Bears;