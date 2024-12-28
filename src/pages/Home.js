import React, { useState, useEffect } from "react";
import "./Pages.css";
import { useLocation, useNavigate } from "react-router-dom";
import EmailConfirmation from "./EmailConfirmation";
import ResetPassword from "./ResetPassword";
import { supabase } from "../supabase";

const Home = () => {
  const location = useLocation(); // To access the query string
  const navigate = useNavigate(); // To handle navigation
  const [action, setAction] = useState(); //
  const [accessToken, setAccessToken] = useState(); //
  const [refreshToken, setRefreshToken] = useState(); //
  const [redirectUrlError, setRedirectUrlError] = useState(false); //

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search); // Parse the query params

    // If there are no query parameters (i.e., empty search string)
    if (!location.search) {
      return; // Do nothing if the route is just "/"
    }

    const actionPar = queryParams.get("action");

    // Extract hash fragment (after "#")
    const hashParams = new URLSearchParams(location.hash.slice(1));

    const access_tokenPar = hashParams.get("access_token"); // Example: Get "access_token"
    const refresh_tokenPar = hashParams.get("refresh_token");
    const expiresAt = hashParams.get("expires_at");
    const error = hashParams.get("error"); // Example: "access_denied"

    // Check if either parameter is missing
    if (!actionPar) {
      navigate("/"); // Redirect to the home page if any param is missing
    }

    if (error) {
      setRedirectUrlError(true);
    }
    if (
      action === "resetPassword" &&
      (!access_tokenPar || !refresh_tokenPar) &&
      error == null
    ) {
      navigate("/"); // Redirect to the home page if either access_token or refresh_token is missing
    }

    setAction(actionPar);
    setAccessToken(access_tokenPar);
    setRefreshToken(refresh_tokenPar);
  }, [location, navigate, action]); // Dependency on location so it triggers when URL changes

  if (action === "verify_email") {
    return <EmailConfirmation setAction={setAction} />;
  } else if (action === "reset_password") {
    return (
      <ResetPassword
        accessToken={accessToken}
        setAction={setAction}
        refreshToken={refreshToken}
        redirectUrlError={redirectUrlError}
        setRedirectUrlError={setRedirectUrlError}
      />
    );
  } else
    return (
      <div className="page home-page">
        <h1>
          Welcome to <span className="highlight">FoodVerse</span>
        </h1>
        <p>Your gateway to futuristic food experiences.</p>
        <div className="hero-section">
          <img
            src="https://source.unsplash.com/800x400/?futuristic-food"
            alt="Futuristic Food"
          />
        </div>
      </div>
    );
};

export default Home;
