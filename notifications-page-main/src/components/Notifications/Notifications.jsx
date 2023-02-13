import React from "react";
import "./NotificationsStyles.css";
import data from "../../data/data.json";

const Notifications = () => {
  return (
    <main>
      {data.map((data) => {
        return (
          <article key={data.id}>
            <img src={data.image} alt="user-profile" />
            <p>
              <strong>{data.name}</strong> {data.text}
            </p>
            <p>{data.message}</p>
            <p>{data.time}</p>
          </article>
        );
      })}
    </main>
  );
};

export default Notifications;
