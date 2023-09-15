import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import DoctorsSection from "../DoctorsSection";
import FeedBack from "./FeedBack";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Signup from "./Signup";
import BookAppointment from "./BookAppointment";


function Home() {
  return <h2>Welcome to our website!</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/doctorssection" element={<DoctorsSection />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <DoctorsSection />
        <FeedBack />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
