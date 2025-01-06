import React from "react";

const Header = ({ language }) => {
  const headerText = {
    EN: "COMING SOON IN 2025!",
    TH: "เร็วๆ นี้ในปี 2025!",
  };

  return (
    <div className="header-container">
      <p className="header-title">{headerText[language]}</p>
    </div>
  );
};

export default Header;
