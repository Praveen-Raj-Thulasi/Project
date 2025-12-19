import React from "react";
import "./Navbar.css";
export default function Navbar({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("ideas")}>Ideas</button>
      <button onClick={() => setPage("performance")}>Performance</button>
      <button onClick={() => setPage("users")}>Users</button>
    </nav>
  );
}
