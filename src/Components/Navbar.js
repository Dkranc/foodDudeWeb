import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // To handle navigation
  return (
    <nav className="navbar">
      <div className="logo">
        <button
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          FoodDude
        </button>
      </div>
      <ul className="nav-links">
        {/* <li>
          <Link to="/">ראשי</Link>
        </li> */}
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
