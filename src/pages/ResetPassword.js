import React, { useState, useEffect } from "react";
import "./Pages.css";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ setAction, tokenHash }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const successMsg =
    "הסיסמה אופסה בהצלחה! חזר ול אפליקציה ובצעו התחברות עם הסיסמה החדשה.";
  const resetPasswordWithToken = async (e) => {
    e.preventDefault();
    try {
      if (tokenHash == null) {
        throw Error("הלינק לא תקין, נסו לשלוח מייל איפוס חוזר");
      }

      if (
        password !== confirmPassword ||
        password === "" ||
        confirmPassword === "" ||
        password.length < 6 ||
        confirmPassword.length < 6 ||
        password.length > 128 ||
        confirmPassword.length > 128
      ) {
        throw Error("הסיסמה לא יכולה להיות ריקה, וודאו כי הסיסמאות זהות");
      }
      const { data, error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "email",
      });

      if (error) {
        console.log(error.message);
        throw Error("הלינק פג תוקף או לא תקין, נסו לשלוח מייל חוזר");
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (updateError) {
        console.log(updateError.message);
        throw Error("חלה שגיאה באיפוס הסיסמה");
      }
      setSuccess(true);
      setPassword("");
      setConfirmPassword("");
      const timer = setTimeout(() => {
        setAction(""); //Redirect to the home page (or any other page you want)
        navigate("/");
      }, 3000);

      // Cleanup the timer when the component unmounts or redirects
      return () => clearTimeout(timer);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  const closeError = () => {
    setError(false);
    setPassword("");
    setConfirmPassword("");
  };

  const closeSuccess = () => {
    setError(false);
    navigate("/");
    setAction("");
  };

  //http://localhost:3000/?action=reset_password&token_hash=6b9818e1dbc16ca0444c824059123d3e33dfb9c56353b8b9788e92c0&email=bomb669@gmail.com
  const PasswordResetFailedModal = ({ message, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>איפוס הסיסמה נכשל</h2>
          <p>{message}</p>
          <button onClick={onClose} className="close-button">
            סגירה
          </button>
        </div>
      </div>
    );
  };

  const PasswordResetSuccessModal = ({ message, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>הסיסמה שונתה בהצלחה</h2>
          <p>{message}</p>
          <button onClick={onClose} className="close-button">
            סגירה
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="page reset-password-page">
      <h1>
        איפוס <span className="highlight">סיסמה</span>
      </h1>
      {!error && !success ? (
        <>
          {" "}
          <p>הזינו סיסמה חדשה לאפליקציה</p>
          <form className="styled-form" onSubmit={resetPasswordWithToken}>
            <input
              dir="rtl"
              type="password"
              placeholder="סיסמה חדשה"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              dir="rtl"
              type="password"
              placeholder="אימות סיסמה חדשה"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button type="submit">איפוס סיסמה</button>
          </form>
        </>
      ) : !error && success ? (
        <PasswordResetSuccessModal
          message={successMsg}
          onClose={closeSuccess}
        />
      ) : (
        <PasswordResetFailedModal message={errorMsg} onClose={closeError} />
      )}
    </div>
  );
};

export default ResetPassword;
