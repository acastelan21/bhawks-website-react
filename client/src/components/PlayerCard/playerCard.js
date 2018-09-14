import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
import "./playerCard.css";


const PlayerCard =(props) => {
  
    return (
        <Card>
        <CardBody>
       <CardTitle>{props.player} | {props.position} | #{props.number} </CardTitle>
       <CardSubtitle> Season: {props.season}| Date: {props.date} |</CardSubtitle>
       <CardSubtitle> {props.highlight} Vs. {props.opponent} </CardSubtitle>
     </CardBody>
     <CardImg top width="50%" src={props.gifLink} alt="Card image cap" />
     
   </Card>
    )
  }


export default PlayerCard;
