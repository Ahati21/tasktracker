import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Welcome to the Task Tracker App</h1>
      <Link to="/tasks">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
        >
          Go to Task Tracker
        </button>
      </Link>
    </div>
  );
}

export default Home;
