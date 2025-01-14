import React, { useState, useEffect } from "react";
import "./Pages.css";
import { useLocation, useNavigate } from "react-router-dom";
import EmailConfirmation from "./EmailConfirmation";
import ResetPassword from "./ResetPassword";
import Navbar from "../Components/Navbar";
import DownloadApp from "../Components/DownloadApp";
import AboutSection from "../Components/AboutSection";
import FeaturesSection from "../Components/FeaturesSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

const Home = () => {
  const location = useLocation(); // To access the query string
  const navigate = useNavigate(); // To handle navigation
  const [action, setAction] = useState(); //
  const [tokenHash, setTokenHash] = useState(); //

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search); // Parse the query params
    // If there are no query parameters (i.e., empty search string)
    if (!location.search) {
      return; // Do nothing if the route is just "/"
    }
    const actionPar = queryParams.get("action");
    const tokenHashPar = queryParams.get("token_hash");

    // Check if either parameter is missing
    if (!actionPar) {
      navigate("/"); // Redirect to the home page if any param is missing
    }

    if (action === "reset_password" && !tokenHashPar) {
      navigate("/"); // Redirect to the home page if either token is missing
    }
    setAction(actionPar);
    setTokenHash(tokenHashPar);
  }, [location, navigate, action]); // Dependency on location so it triggers when URL changes

  if (action === "verify_email") {
    return <EmailConfirmation setAction={setAction} />;
  } else if (action === "reset_password") {
    return <ResetPassword tokenHash={tokenHash} setAction={setAction} />;
  } else
    return (
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Navbar showMenu={true} />
        <DownloadApp></DownloadApp>
        <AboutSection></AboutSection>
        <FeaturesSection></FeaturesSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
      </div>
    );
};

export default Home;
