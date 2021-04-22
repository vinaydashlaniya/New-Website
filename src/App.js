import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from './Footer';

const App = () =>
{
  return(
    <>
    <Navbar />
    <Switch>
    <Route exact path="/home" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/service" component={Service}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Redirect to="/" />
    </Switch>
    <Footer />      
    </>
  );

};

export default App;
