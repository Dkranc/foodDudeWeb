import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FoodDude</div>
      <ul className="nav-links">
        <li>
          <Link to="/">ראשי</Link>
        </li>
        {/* <li>
          <Link to="/reset-password">Reset Password</Link>
        </li>
        <li>
          <Link to="/email-confirmation">Email Confirmation</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
