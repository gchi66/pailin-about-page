import React from "react";
import "../Styles/Footer.css";

const Footer = ({ isAccordionOpen }) => {
  return (
    <div className={`footer-container ${!isAccordionOpen ? "fixed-bottom" : ""}`}>
      <p className="footer-title">Copyright © 2024, Pailin Abroad</p>
    </div>
  );
};

export default Footer;
