import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import DoctorsSection from "./DoctorsSection";
import FeedBack from "./FeedBack";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

function App(){
  return (
    <Router>
      <div>
       <NavBar />
      <Switch>
        <Route path="/navbar" exact component={NavBar} />
        <Route path="/doctorssection" exact component={DoctorsSection} />
        <Route path="/feedback" exact component={FeedBack} />
        <Route path="/footer" exact component={Footer} />
        <Route path="/aboutus" exact component={AboutUs} />
      </Switch>
      </div>
    </Router>
  );
}


export default App;
