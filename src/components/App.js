import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import DoctorsSection from "./DoctorsSection";
import FeedBack from "./FeedBack";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Signup from "./Signup";
import BookAppointment from "./BookAppointment";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <DoctorsSection />
        <Routes>
          <Route path="/doctorssection" element={<DoctorsSection />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
        <FeedBack />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
