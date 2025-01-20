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
              קצת עלינו
            </h6>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              מה אנחנו מציעים בעצם?
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}>
              FoodDude מציעה ללקוחותיה להשתתף בהגרלה מדי שבוע, ולזכות בקופונים
              והטבות למסעדות שאתם הכי אוהבים! נכנסים לאפליקציה, מצטרפים להגרלה
              השבועית, זוכים בפרסים מדי שבוע ונהנים מאוכל איכותי בעזרת
              האפלקיציה.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}>
              FoodDude קלה מאוד לשימוש. מורידים את האפליקציה, צופים בסרטון
              השבועי, מצטרפים להגרלה וזוכים בפרסים! וכל זה ללא עלות! לא עכשיו ,
              ולא אף פעם!
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000",
                marginTop: "20px",
              }}
            >
              הצטרפו עוד היום ותהנו ממגוון הטבות ופרסים מטריפים
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
