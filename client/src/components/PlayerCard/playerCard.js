import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'; 
import "./playerCard.css";


const PlayerCard =(props) => {
  
    return (
        <Card>
        <CardBody>
       <CardTitle>{props.player} | {props.position}</CardTitle>
       <CardSubtitle>Season: {props.season}| Date: {props.date} | Vs. {props.opponent} | {props.highlight}</CardSubtitle>
     </CardBody>
     <CardImg top width="50%" src={props.gifLink} alt="Card image cap" />
   </Card>
    )
  }


export default PlayerCard;
