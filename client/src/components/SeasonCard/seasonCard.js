import React from "react";
import "./seasonCard.css";
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import {Link} from "react-router-dom";
const SeasonCard = props => (
    <div className="seasonCards">
        
                    <Card>
                        <CardImg top width="100%" src={props.image} />
                        <CardBody>
                        <CardTitle>{props.date}</CardTitle>
                        <Button color="primary"><Link to={props.link}>Go</Link></Button>
                        </CardBody>
                    </Card>
                </div>
            


)

export default SeasonCard; 
