import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import NavBar from "./NavBar";
import ErrorPage from './ErrorPage.js'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom" //'BrowserRouter' renamed as 'Router', Route element imported

class Main extends Component {
  constructor() {
    super();
    this.state = {
      pricing:[
        {level:"Hobby",cost:0},
        {level:"Startup", cost:10},
        {level:"Enterprise",cost:100}
      ]
    };

  }
//React Fragment is similar to a div, but does not effect screenreaders. USe here to group options as a single item
//as BrowserRouter only expects one element
//Each 'Route' takes two elements- a path and a compoenent to render on that path
//Route should be self closing (<Route/>)
//Exact path will render 'Home' on 'http://localhost3000/'' only. Other paths render their components
//NavBar is outside Routes and therefore will always render
//React Routes cannot pass props, so must pass render directly (thats actually pretty cool)
  render() {
    return (
    <Router>
    <React.Fragment>
    <NavBar/>
    <Switch>
    <Route exact path="/" Component={Home}/>
    <Route path ="/about" component={About}/>
    <Route path ="/pricing" render={()=><Pricing prices={this.state.pricing}/>}/>
    <Route component={ErrorPage}/>
    </Switch>
    </React.Fragment>

    </Router>
    );
  }




}

export default Main;
