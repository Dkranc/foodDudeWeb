import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        textAlign: "center",
        padding: "15px 0",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} FoodDude. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
