import React from "react";
import "./NotificationsStyles.css";
import data from "../../data/data.json";

const Notifications = () => {
  return (
    <main>
      {data.map((data) => {
        return (
          <article key={data.id} className="notification-container">
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
          </article>
        );
      })}
    </main>
  );
};

export default Notifications;
