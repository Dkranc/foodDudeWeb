import React from "react";
import "./Pages.css";

const Home = () => {
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
