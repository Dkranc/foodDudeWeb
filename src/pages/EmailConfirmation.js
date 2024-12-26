import React from "react";
import "./Pages.css";

const EmailConfirmation = () => {
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
