import React from "react";
import SignUpIcon from "../assets/signup-icon.png"; // Replace with actual image paths
import VideoIcon from "../assets/video-icon.png";
import RaffleIcon from "../assets/raffle-icon.png";
import PrizesIcon from "../assets/prizes-icon.png";
import RestaurantIcon from "../assets/restaurant-icon.png";
import CurveImage from "../assets/curve.png"; // The curve image path

const FeaturesSection = () => {
  const features = [
    {
      icon: SignUpIcon,
      title: "מורידים את האפליקציה ונרשמים בחינם",
    },
    {
      icon: VideoIcon,
      title: "תכירו את המסעדה המוצגת השבוע בסרטון",
    },
    {
      icon: RaffleIcon,
      title: "נרשמים להגרלה השבועית",
    },
    {
      icon: PrizesIcon,
      title: "זוכים בארוחה חינם או בהטבות אחרות בכל שבוע",
    },
    {
      icon: RestaurantIcon,
      title: "משתמשים בפרסים במסעדה",
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: "50px 0",
        backgroundColor: "#fff",
        textAlign: "center",
        position: "relative",
      }}
      className="p-sm-none"
    >
      <img
        src={CurveImage}
        alt="Curve decoration"
        style={{
          position: "absolute",
          top: "40%", // Adjust based on desired alignment
          left: "0",
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      />
      <div className="container-fluid">
        {/* Section Header */}
        <h6
          style={{ color: "#ffa500", textTransform: "uppercase", fontSize: 20 }}
        >
          איך השירות עובד?
        </h6>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", margin: "10px 0" }}>
          עוקבים אחרי השלבים הפשוטים, ונהנים מהטבות למסעדות הכי מדוברות
        </h2>

        {/* Features List */}
        <div className="container">
          <div
            className="row justify-content-center mt-5"
            style={{ position: "relative" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-md-2 d-flex flex-column align-items-center col-sm-12"
                style={{
                  padding: "20px",
                  margin: "10px 0",
                  zIndex: 20,
                  margin: "10px 20px",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    height: "100%",
                    backgroundColor: "#FECF77",
                    borderRadius: 30,
                    border: "5px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                    padding: 10,
                  }}
                >
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#555",
                    marginTop: "15px",
                  }}
                >
                  {feature.title}
                </p>
              </div>
            ))}

            {/* Curved Line Decoration */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
