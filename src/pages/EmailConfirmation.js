import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

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
    <div className="page email-confirmation-page">
      <h1>Thank You!</h1>
      <p>
        Your email has been confirmed. You can now log in and enjoy the
        experience.
      </p>
      <img src="https://source.unsplash.com/800x400/?dessert" alt="Dessert" />
    </div>
  );
};

export default EmailConfirmation;
