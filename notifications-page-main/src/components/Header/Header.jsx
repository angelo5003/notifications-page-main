import React from "react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>
          Notifications <span id="number-notification">3</span>
        </h1>

        <button>Mark all read</button>
      </div>
    </header>
  );
};

export default Header;
