import React from "react";
import Applelogo from "../assets/Applelogo.svg";
import GooglePlaylogo from "../assets/GooglePlaylogo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundimg from "../assets/background.png";
import banner from "../assets/banner.svg";

const DownloadApp = () => {
  return (
    <section
      id="download"
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
            <h1 className="display-4 fw-bold">
              המקום לזכות בהטבות{" "}
              <span className="text-warning">למקומות שאתם הכי אוהבים</span>
            </h1>
            <p className="lead text-muted">
              תוכלו למצוא אצלנו הטבות למגוון מסעדות, ולזכות בפרסים
              <span className="fw-bold"> בכל שבוע!</span>
              {"\n"} בכל שבוע, יוגרלו מספר ארוחות חינם במסעדה השבועית, ויחולקו
              הטבות שונות גם לאלו שלא יזכו בפרס הגדול
            </p>

            <div className="d-flex button-container mt-4">
              <a
                href="https://onelink.to/73hfvc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light d-flex align-items-center justify-content-center "
              >
                <img
                  src={GooglePlaylogo}
                  alt="Get it on Google Play"
                  style={{ width: "30px" }}
                  width={50}
                />
                <div className="text-left" style={{ marginLeft: 5 }}>
                  <small className="text-muted">GET IT ON</small>
                  <p className="m-0 fw-bold">Google Play</p>
                </div>
              </a>

              <a
                href="https://onelink.to/73hfvc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light d-flex align-items-center justify-content-center me-md-3"
              >
                <img
                  src={Applelogo}
                  alt="Download on the App Store"
                  style={{ width: "30px" }}
                />
                <div className="text-left" style={{ marginLeft: 5 }}>
                  <small className="text-muted">GET IT ON</small>
                  <p className="m-0 fw-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              src={banner} // Replace with your app mockup image path
              alt="App Mockup"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
