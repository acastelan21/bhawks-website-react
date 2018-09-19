import React, { Component } from 'react';
import {Card, CardImg, Button, Jumbotron, Container} from "reactstrap";
import BearsLogo1 from "../../assets/images/bearslogo1.png";
import BlackhawksLogo from "../../assets/images/blackhawkslogo.png";
import "./home.css";


export class Home extends Component {
  render() {
    return (
      <div className="page home">
         <div className="row bearsRow">
          <div className="col-12"> 
            <Jumbotron>
            <Container fluid>
              <h2 className="display-3">Chicago Sports Gifs </h2>
              <p className="lead">Your source for all highlights for Da Bears and The Blackhawks in gif form!</p>
              <div className="row .mx-auto">
              
              <Card>
                <CardImg top width="100%"  src={BearsLogo1} alt="Card image cap" />
               
                  <Button href="/bears">Chicago Bears Gifs</Button>
                
              </Card>
              
             
              <Card>
                <CardImg top width="100%"  src={BlackhawksLogo} alt="Card image cap" />
                
                  <Button href="/blackhawks">Chicago Blackhawks Gifs</Button>
                
              </Card>
            </div>





            </Container>
           </Jumbotron>
         
          </div>
          </div>
            
          
         
      </div>
    )
  }
}

export default Home;
