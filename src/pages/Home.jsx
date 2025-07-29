import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to My Task App</h1>
      <Link to="/task-tracker">Go to Task Tracker</Link>
    </div>
  );
}

export default Home;
