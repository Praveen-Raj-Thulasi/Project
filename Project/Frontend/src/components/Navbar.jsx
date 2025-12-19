import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Startup Insights</h2>
      <div className="nav-links">
        <a href="/">Dashboard</a>
        <a href="/ideas">Ideas</a>
        <a href="/users">Users</a>
        <a href="/performance">Performance</a>
      </div>
    </div>
  );
}
