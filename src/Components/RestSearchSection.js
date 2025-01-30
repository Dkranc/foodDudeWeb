import React from "react";
import Applelogo from "../assets/Applelogo.svg";
import GooglePlaylogo from "../assets/GooglePlaylogo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundimg from "../assets/background.png";
import banner2 from "../assets/banner2.svg";

const RestSearchSection = () => {
  return (
    <section
      id="res-search"
      className="container"
      style={{
        marginTop: "2%",
        padding: "100px 20px",
        backgroundColor: "#fff",
        backgroundImage: `url(${backgroundimg})`, // Correctly set the background image
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repeating
        borderRadius: 10,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <img
              src={banner2} // Replace with your app mockup image path
              alt="App Mockup"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className="display-4 fw-bold">
              תמיד מתקשים להחליט לאן לצאת לאכול?{" "}
              <span className="text-warning">למקומות שאתם הכי אוהבים</span>
            </h1>
            <p className="lead text-muted">
              <span className="fw-bold">FoodDude </span>
              תמצא עבורכם את ההתאמה המושלמת על פי ההדעפות שלכם. מספיק לכאב ראש,
              .תנו לנו לעזור לכם לקבל את ההחלטות {"\n"}
              באפליקציה תוכלו לבחור מבין שפע המסעדות שי סביבכם, ואתם פשוט לא
              מכירים. אנו מוצאים את המסעדה המתאימה ביותר עבורכם על פי ההעדפות
              שתגדירו.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestSearchSection;
