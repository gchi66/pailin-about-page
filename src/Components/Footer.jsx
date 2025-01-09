import React from "react";
import "../Styles/Footer.css";

const Footer = ({ isAccordionOpen }) => {
  return (
    <div className={`footer-container ${!isAccordionOpen ? "fixed-bottom" : ""}`}>
      <p className="footer-title">Copyright © {new Date().getFullYear()}, Pailin Abroad</p>
    </div>
  );
};
