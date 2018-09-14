import React, { Component } from 'react';
import './App.css';
import {Router, Route, Switch} from "react-router-dom";
import Wrapper from"./components/Wrapper";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bears from "./pages/Bears";
import Blackhawks from "./pages/Blackhawks";
import ContactUs from "./pages/ContactUs";
import history from "./history";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Page404 from "./pages/Page404";
import BearsProvider from "./contexts/bearsProviders";

class App extends Component {
  render() {
    return (
      <Wrapper>
        
        {/* Routing for Pages */}
        <Router history={history}>
        <React.Fragment>
          <NavBar/>
          <div className="OverallContainer">

            <BearsProvider>
              
              
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route exact path ="/bears" component={Bears}/>
              <Route exact path="/blackhawks" component={Blackhawks}/>
              <Route path="/contact-us" component={ContactUs}/>
              <Route path="/about-us" component={AboutUs}/>
              <Route component={Page404}/>
            </Switch>
            <Footer/>
              
            </BearsProvider>
           
          </div>
          </React.Fragment>
        </Router>



        
      </Wrapper>
    );
  }
}

export default App;
