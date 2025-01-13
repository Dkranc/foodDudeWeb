import React, { useState, useEffect } from "react";
import "./Pages.css";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

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
    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    try {
      if (tokenHash == null) {
        setErrorMsg("הלינק לא תקין, נסו לשלוח מייל איפוס חוזר");
        setError(true);
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
        setErrorMsg("הסיסמה לא יכולה להיות ריקה, וודאו כי הסיסמאות זהות");
        setError(true);
        throw Error("הסיסמה לא יכולה להיות ריקה, וודאו כי הסיסמאות זהות");
      }
      const { data, error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "email",
      });
      if (error) {
        console.log(error.message);
        setErrorMsg("הלינק פג תוקף או לא תקין, נסו לשלוח מייל חוזר");
        setError(true);
        throw Error("הלינק פג תוקף או לא תקין, נסו לשלוח מייל חוזר");
      }
      const { error: updateError } = await supabase.auth.updateUser({
        password: password,
      });
      if (updateError) {
        console.log(updateError.message);
        setErrorMsg("חלה שגיאה באיפוס הסיסמה");
        setError(true);
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
    setSuccess(false);
    navigate("/");
    setAction("");
  };

  //http://localhost:3000/?action=reset_password&token_hash=6b9818e1dbc16ca0444c824059123d3e33dfb9c56353b8b9788e92c0&email=bomb669@gmail.com
  const PasswordResetFailedModal = ({ message, onClose }) => {
    return (
      <>
        <div className="text-center">
          <h2 style={{ marginTop: "10%" }}>איפוס הסיסמה נכשל</h2>
          <p>{message}</p>
          <button
            onClick={closeError}
            className="btn"
            style={{
              backgroundColor: "#FECF77",
              color: "#54251E",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              width: "100%",
            }}
          >
            סגירה
          </button>
        </div>
      </>
    );
  };

  const PasswordResetSuccessModal = ({ message, onClose }) => {
    return (
      <div className="text-center">
        <h2 style={{ marginTop: "5%", color: "#26b726" }}>
          הסיסמה שונתה בהצלחה
        </h2>
        <p>{message}</p>
        <button
          onClick={closeSuccess}
          className="btn"
          style={{
            backgroundColor: "#FECF77",
            color: "#54251E",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            width: "100%",
          }}
        >
          סגירה
        </button>
      </div>
    );
  };

  return (
    <section
      style={{
        background: "#FEF9F3",
        height: "100vh", // Full viewport height
        display: "flex", // Flexbox for alignment
        justifyContent: "center", // Center horizontally
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {" "}
          {/* Bootstrap utility for horizontal centering */}
          <div className="col-md-6 col-sm-12">
            <div className="text-center" style={{ marginTop: "20%" }}>
              <img src={logo} alt="Dessert" />
            </div>

            <h1 className="text-center" style={{ marginBottom: "5%" }}>
              איפוס <span className="highlight">סיסמה</span>
            </h1>
            {!error && !success ? (
              <>
                <div
                  style={{
                    background: "white",
                    padding: 50,
                    borderRadius: 20,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p className="text-center">הזינו סיסמה חדשה לאפליקציה</p>
                  <form
                    noValidate
                    className="needs-validation"
                    onSubmit={resetPasswordWithToken}
                  >
                    <input
                      dir="rtl"
                      type="password"
                      placeholder="סיסמה חדשה"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control custom-form mb-10"
                    />
                    <input
                      dir="rtl"
                      type="password"
                      placeholder="אימות סיסמה חדשה"
                      value={confirmPassword}
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control custom-form mb-10"
                    />
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "#FECF77",
                        color: "#54251E",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        fontSize: "16px",
                        width: "100%",
                      }}
                      type="submit"
                    >
                      איפוס סיסמה
                    </button>
                  </form>
                </div>
              </>
            ) : !error && success ? (
              <PasswordResetSuccessModal
                message={successMsg}
                onClose={closeSuccess}
              />
            ) : (
              <PasswordResetFailedModal
                message={errorMsg}
                onClose={closeError}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
