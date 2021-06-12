import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Tracking from './components/Tracking';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return (
    
   
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/tracking" component={Tracking} />
          <Route exact path="/home" component={Home} />
        
          {/* <Redirect to="/404" /> */}
        </Switch>
     </Router>

      // <div className="container"> 
      //   <Home></Home>
      //   <Tracking></Tracking>
      // </div>
    );
  }
}

export default App;

  //  <Router> 
  //       <Navbar />
  //       <Switch>
  //         <Route path='/' />
  //         <Home></Home>
  //       <Tracking></Tracking>
  //       </Switch>
  //     </Router>