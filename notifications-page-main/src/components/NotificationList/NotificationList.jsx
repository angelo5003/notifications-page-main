import React from "react";

import "../Notifications/NotificationsStyles.css";

const NotificationList = ({
  image,
  name,
  text,
  postTitle,
  club,
  message,
  time,
  active,
}) => {
  return (
    <ul>
      <li className="notification-container">
        <img src={image} alt="user-profile" className="notification-img" />
        <p className="user-name">
          <strong>{name}</strong>
        </p>
        <div className="text-container">
          <p className="followed-you-text">
            {text} {postTitle ? <span id="postTitle">{postTitle}</span> : null}
            {club ? <span id="club-title">{club}</span> : null}
          </p>
          {message ? <p className="message-box">{message}</p> : null}
          <p>{time}</p>
        </div>
      </li>
    </ul>
  );
};

export default NotificationList;
