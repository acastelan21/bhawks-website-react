import React, { Component } from 'react'
import API from "../../utils/API";
import FilterBar from "../../components/FilterBar";
import {BearsContext} from "../../contexts/bearsProviders";
import PlayerCard from "../../components/PlayerCard";
import "./bears.css"
import axios from "axios";
export class Bears extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      players:[],
      seasons:[],
      positions:[],
      opponents:[],
      highlights:[],
      filterByInUse: false,
      filterBy: ""
    }
    this.toggleFilter = this.toggleFilter.bind(this)
  }
  componentWillMount(){
    
    this.makeArraysForState();
    
  }
  
  
  toggleFilter(event){
    this.setState({filterByInUse: true,
                   filterBy: event.target.value
    })
    
  }
  addLike=(event)=>{
    
    console.log(event.target.value)
   const likeUpdaters = {player: event.target.name,
                          identifier: event.target.value}

    API.updateLikes(likeUpdaters).then(res=>{
    console.log(res);
    if (res.status === 200){
      console.log("yay")
    }
    ;
  }) 

  }
   makeArraysForState = () => {
     //make axios call to database to retrieve data
    axios.get("/api/database").then((res)=>{
      console.log("res.data", res.data);
      
      //empty array to push player names
      let playersForState = [];
      
      //loop through all players to make an array to use for filter
      for (let i=0; i<res.data.length ; i++ ){

        playersForState.push(res.data[i].player)
      

      }
      this.setState({players:playersForState,data:res.data})
      
      //creating a set so it convert to array to send to set state
      let positionsForArray = new Set();
      let seasonsForArray = new Set();
      let opponentsForArray = new Set();
      let highlightsForArray = new Set(); 
      //first for loop to first level of array
      for (let i=0;i<res.data.length; i++){
        //add unique values for positons to set
        positionsForArray.add(res.data[i].position)
        //second for loop this one to get into second level of array 
        for (let j=0;j<res.data[i].gifs.length;j++){
          // add unique values for seasons/opponents/highlights to set
          seasonsForArray.add(res.data[i].gifs[j].season)
          opponentsForArray.add(res.data[i].gifs[j].opponent)
          highlightsForArray.add(res.data[i].gifs[j].highlight)
          console.log("highlights",highlightsForArray)
          

      }}
      //convert set to array for seasons/positions/opponents/highlights
      let seasonsForState = [...seasonsForArray]
      let positionsForState =[...positionsForArray]
      let opponentsForState=[...opponentsForArray]
      let highlightsForState=[...highlightsForArray]
      //set state for seasons/positions/opponents/highlights filter
      this.setState({seasons:seasonsForState})
      this.setState({positions:positionsForState})
      this.setState({opponents:opponentsForState})
      this.setState({highlights:highlightsForState})
    }).catch((error)=>{
      console.log(error)
    })

  }

  render() {
    const something = this.state
    console.log("something", something)
    return (
      <div className="page bears">
      
      <FilterBar
      toggleFilter ={this.toggleFilter}
      player1={this.state.players[0]}
      player2={this.state.players[1]}
      player3={this.state.players[2]}
      player4={this.state.players[3]}
      player5={this.state.players[4]}
      player6={this.state.players[5]}
      season1={this.state.seasons[0]}
      position1={this.state.positions[0]}
      position2={this.state.positions[1]}
      position3={this.state.positions[2]}
      position4={this.state.positions[3]}
      position5={this.state.positions[4]}
      opponent1={this.state.opponents[0]}
      highlight1={this.state.highlights[0]}
      highlight2={this.state.highlights[1]}
      highlight3={this.state.highlights[2]}
      highlight4={this.state.highlights[3]}
      highlight5={this.state.highlights[4]}
      
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
              {info.player === this.state.filterBy || info.position ===this.state.filterBy || nested.season===this.state.filterBy || nested.opponent ===this.state.filterBy || nested.highlight === this.state.filterBy ? 
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
          likes = {nested.likes}
          addLike={this.addLike}
          identifier={nested.identifier}

            />
            : (this.state.filterBy ===""? <PlayerCard
            key={k}
            player = {info.player}
            position ={info.position}
            number ={info.number}
            season = {nested.season}
            date = {nested.date}
            opponent={nested.opponent}
            highlight={nested.highlight}
            gifLink={nested.gifLink}
            likes = {nested.likes}
            addLike={this.addLike}
            identifier={nested.identifier}
  
              /> : null)}
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