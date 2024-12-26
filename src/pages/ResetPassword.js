import React from "react";
import "./Pages.css";

const ResetPassword = () => {
  return (
    <div className="page reset-password-page">
      <h1>
        Reset <span className="highlight">Your Password</span>
      </h1>
      <p>Enter your email to receive a secure password reset link.</p>
      <form className="styled-form">
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
