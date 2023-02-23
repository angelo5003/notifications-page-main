import React from "react";
import "./HeaderStyle.css";

const Header = ({ toggleClass, newData, isActive, numberOfActiveMsg }) => {
  return (
    <header>
      <nav className="header-container">
        <h1>
          Notifications <span id="number-notification">{newData.active} 3</span>
        </h1>
        <button onClick={toggleClass}>Mark all read</button>
      </nav>
    </header>
  );
};

export default Header;
