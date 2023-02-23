import React from "react";

import "./NotificationsStyles.css";

const Notifications = ({ newData, setNewData }) => {
  return (
    <ul>
      {newData &&
        newData.map((data) => {
          return (
            <li
              key={data.id}
              className={data.active ? "active" : "notification-container"}
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
