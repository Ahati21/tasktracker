import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#f4f6f8";
    document.body.style.color = darkMode ? "#f4f6f8" : "#000";
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav
      style={{
        padding: "10px",
        background: darkMode ? "#333" : "#007bff",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
      >
        🏠 Home
      </Link>

      {isLoggedIn && (
        <Link
          to="/task-tracker"
          style={{
            marginRight: "20px",
            color: "white",
            textDecoration: "none",
          }}
        >
          📋 Task Tracker
        </Link>
      )}

      <Link
        to="/contact"
        style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
      >
        ✉️ Contact
      </Link>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginLeft: "20px",
          padding: "5px 10px",
          background: "white",
          color: darkMode ? "#333" : "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          style={{
            marginLeft: "20px",
            padding: "5px 10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          style={{ marginLeft: "20px", color: "white", textDecoration: "none" }}
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
