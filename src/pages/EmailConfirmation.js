import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const EmailConfirmation = ({ setAction }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Set a timeout of 2.5 seconds (2500 milliseconds) to redirect the user
    const timer = setTimeout(() => {
      setAction(""); //Redirect to the home page (or any other page you want)
      navigate("/");
    }, 2500);

    // Cleanup the timer when the component unmounts or redirects
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        background: "#FEF9F3",
        padding: "10%",
        fontFamily: "'Poppins', sans-serif",
        height: "800px",
      }}
    >
      <div className="container">
        <h1 style={{ textAlign: "center", color: "#FECF77" }}>Thank You!</h1>
        <p style={{ color: "#343434", textAlign: "center" }}>
          Your email has been confirmed. You can now log in and enjoy the
          experience.
        </p>
        <div className="text-center">
          <img src={logo} alt="Dessert" />
        </div>
      </div>
    </section>
  );
};

export default EmailConfirmation;
