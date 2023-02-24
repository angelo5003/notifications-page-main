import React from "react";
import "./HeaderStyle.css";

const Header = ({ toggleClass, isActive, unreadCount }) => {
  return (
    <header>
      <nav className="header-container">
        <h1>
          Notifications{" "}
          <span id="number-notification">{isActive ? unreadCount : ""}</span>
        </h1>
        <button onClick={toggleClass}>Mark all read</button>
      </nav>
    </header>
  );
};

export default Header;
