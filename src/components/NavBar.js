import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return (
    <nav className="navbar">
     <h1>Clinic App</h1>
      <ul className="navbar-menu">
        <li>
          <NavLink to="/book-appointment">Book Appointment</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </li>
      </ul>
      <button className="consult-button">Consult Online</button>
    </nav>
  );

}
export default NavBar;
