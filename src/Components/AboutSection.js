import React from "react";
import CouponImage from "../assets/about.png"; // Replace with your actual image path

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        padding: "50px 0",
        backgroundColor: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section (Image) */}
          <div className="col-md-6">
            <img src={CouponImage} alt="Coupon Holder" />
          </div>

          {/* Right Section (Text) */}
          <div className="col-md-6">
            <h6 style={{ color: "#ffa500", textTransform: "uppercase" }}>
              About us
            </h6>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              What We Offer?
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}>
              Fooddude gives perfect solutions for all kinds of coupons and
              deals on this site that you can use to build your successful
              coupon, deals, & discount affiliate website and make money with
              it.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}>
              Fooddude is a powerful coupon app. You can easily set up and
              customize your own coupon site using this app.
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000",
                marginTop: "20px",
              }}
            >
              Join With Us and Discover What’s Out There
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
