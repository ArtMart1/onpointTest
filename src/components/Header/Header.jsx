import React from "react";

import homeIcon from "../../images/home.svg";

import "./Header.css";

const Header = ({ goHome }) => (
  <div className="header-container">
    <img
      className="header-container__home-icon"
      src={homeIcon}
      alt="Home"
      onClick={goHome}
    />
    <p className="header-container__project-title">Project</p>
  </div>
);

export default Header;
