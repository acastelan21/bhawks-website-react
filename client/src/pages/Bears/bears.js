import React, { Component } from 'react'
import FilterBar from "../../components/FilterBar";
import {ThemeContext} from "../../providers";
import PlayerCard from "../../components/PlayerCard";
export class Bears extends Component {
 
  
    

  render() {
    
    return (
      <div className="page bears">
      <FilterBar/>
      <ThemeContext.Consumer>
        {(context) => (
          <div>
          {context.BearsData.allData.map((info, i)=> (
            <div key={i}>
            {info.gifs.map((nested,j)=>(

              <PlayerCard
          key={j}
          player = {info.player}
          position ={info.position}
          season = {nested.season}
          date ={ nested.date}
          opponent={nested.opponent}
          highlight={nested.highlight}
          gifLink={nested.gifLink}

            />


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