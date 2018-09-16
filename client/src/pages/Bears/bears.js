import React, { Component } from 'react'
import FilterBar from "../../components/FilterBar";
import {BearsContext} from "../../contexts/bearsProviders";
import PlayerCard from "../../components/PlayerCard";
import "./bears.css"
import axios from "axios";
export class Bears extends Component {
  constructor(props){
    super(props)
    this.state={
      players:[],
      seasons:[]
    }
  }
  componentWillMount(){
    this.makeArraysForState()
  }
   makeArraysForState = () => {
     //make axios call to database to retrieve data
    axios.get("/api/database").then((res)=>{
      console.log("res.data", res.data);
      
      //empty array to push player names
      let playersForState = [];
      //first for loop to first level of array 
      for (let i=0; i<res.data.length ; i++ ){
        playersForState.push(res.data[i].player)
      }
      this.setState({players:playersForState})
      //empty array for seasons
      // let seasonsForState =[];
      let seasonsForState = new Set();
      //second for loop this one to get into second level of array 
      for (let i=0;i<res.data.length; i++){
        for (let j=0;j<res.data[i].gifs.length;j++){
          seasonsForState.add(res.data[i].gifs[j].season)
          
          //check to see if season already in array 
          // if (res.data[i].gifs[j].season.indexOf(seasonsForState)){
          //   console.log("Repeat")
          //   }
          //   else{(seasonsForState.push(res.data[i].gifs[j].season)
            
          //     )
          //   console.log("Pushed:" + i + ":" + j )}
           
        

        console.log(res.data[i].gifs[j].season)
      }}
      console.log("seasons", seasonsForState)
    })

  }

  render() {
    const something = this.state
    console.log("something", something)
    return (
      <div className="page bears">
      
      <FilterBar
      player1={this.state.players[0]}
      player2={this.state.players[1]}
      player3={this.state.players[2]}
      player4={this.state.players[3]}
      player5={this.state.players[4]}
      player6={this.state.players[5]}
      season1={"2018"}
      
      />
      


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