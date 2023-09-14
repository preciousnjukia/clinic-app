import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import DoctorsSection from "./DoctorsSection";
import FeedBack from "./FeedBack";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Signup from "./Signup";
import BookingAppointment from "./BookAppointment";


function App(){
  return (
    <Router>
      <div>
       <NavBar />
       <DoctorsSection />
      <Switch>
        <Route path="/navbar" exact component={NavBar} />
        <Route path="/doctorssection" exact component={DoctorsSection} />
        <Route path="/feedback" exact component={FeedBack} />
        <Route path="/footer" exact component={Footer} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/bookingappointment" exact component={BookingAppointment} />
      </Switch>
      <FeedBack />
      <Footer />
      </div>
    </Router>
  );
}


export default App;
