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
              Enjoy Your <span className="text-warning">Delicious Food</span>
            </h1>
            <p className="lead text-muted">
              We will fill your tummy with delicious food with exciting{" "}
              <span className="fw-bold">coupons</span>
            </p>

            <div className="d-flex button-container mt-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light d-flex align-items-center justify-content-center me-md-3"
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
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light d-flex align-items-center justify-content-center"
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
