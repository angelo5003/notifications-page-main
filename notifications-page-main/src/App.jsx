import React, { useState } from "react";
import "./App.css";

import Notifications from "./components/Notifications/Notifications";
// import NotificationList from "./components/NotificationList/NotificationList";
import data from "./data/data.json";

function App() {
  const [newData, setNewData] = useState(data);

  return (
    <div className="border-container">
      <Notifications newData={newData} setNewData={setNewData} />
    </div>
  );
}

export default App;
