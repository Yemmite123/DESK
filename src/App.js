import React, { Component } from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import "./index.css";
import "./respon.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Privacypolicy from "./components/Privacypolicy";
import TermsOfUse from "./components/TermsOfUse";
import SubscribePage from "./components/SubscribePage";
import Payment from "./components/Payment";


class App extends Component {

  state = {
    modal: false,
    isOpen: false,
    activeItem: "1"
  }
  toggleBook = () => {
    this.setState({
      modal1: !this.state.modal1
    });
  }
  toggleMod = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
    this.setState({
      activeItem: tab
    });
    }
    
  }
  
  render() {
    return (

      <Router>
      <Navbar/>
      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Privacypolicy">
            <Privacypolicy/> 
          </Route>
          <Route path="/TermsOfUse">
            <TermsOfUse/>
          </Route> 

          <Route path="/Payment">
            <Payment/>
          </Route>

          <Route path="/SubscribePage">
            <SubscribePage/>
          </Route>
          <Route path="/section1">
            <Home/>
          </Route>
          
      </Switch>
      <Footer/>
   </Router>
  
    );
  }
}

export default App;
