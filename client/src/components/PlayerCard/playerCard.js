import React from 'react'
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardFooter, Button} from 'reactstrap'; 
import "./playerCard.css";


const PlayerCard =(props) => {
    return (
        <Card>
        <CardBody>
       <CardTitle>{props.player} | {props.position} | #{props.number} </CardTitle>
       <CardSubtitle> Season: {props.season}| Date: {props.date} </CardSubtitle>
       <CardSubtitle> {props.highlight} Vs. {props.opponent} </CardSubtitle>
     </CardBody>
     <CardImg top width="50%" src={props.gifLink} alt="Card image cap" />
     <CardFooter><Button name={props.player} value={props.identifier} onClick={props.addLike} color="info"><i className="far fa-thumbs-up"> </i> Like</Button>{props.likes} Likes</CardFooter>
     
   </Card>
    )
  }


export default PlayerCard;
