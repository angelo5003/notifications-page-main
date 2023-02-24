import React, { useState } from "react";
import Header from "../Header/Header";

import "./NotificationsStyles.css";

const Notifications = ({ newData, setNewData }) => {
  const [isActive, setIsActive] = useState(true);

  const unreadMsg = newData?.filter((msg) => msg.active) || []; // if there is newData filter trough the array else if there is no newData give an empty array
  const unreadCount = unreadMsg.length; // show unread messages in the entire length of the array.

  const toggleClass = () => {
    setIsActive(!isActive);

    console.log(`btn is clicked`);
  };

  return (
    <ul>
      <Header
        toggleClass={toggleClass}
        newData={newData}
        isActive={isActive}
        unreadCount={unreadCount}
      />
      {newData &&
        newData.map((data) => {
          return (
            <li
              key={data.id}
              className={`${
                data.active && isActive ? "active" : "notification-container"
              }`}
            >
              <img
                src={data.image}
                alt="user-profile"
                className="notification-img"
              />
              <p className="user-name">
                <strong>{data.name}</strong>
              </p>
              <div className="text-container">
                <p className="followed-you-text">
                  {data.text}{" "}
                  {data.postTitle ? (
                    <span id="postTitle">{data.postTitle}</span>
                  ) : null}
                  {data.club ? <span id="club-title">{data.club}</span> : null}
                </p>
                {data.message ? (
                  <p className="message-box">{data.message}</p>
                ) : null}
                <p>{data.time}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default Notifications;
