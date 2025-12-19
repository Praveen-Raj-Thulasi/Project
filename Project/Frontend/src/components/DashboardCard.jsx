import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>1,248</p>
        </div>

        <div className="card">
          <h3>Startup Ideas</h3>
          <p>312</p>
        </div>

        <div className="card">
          <h3>Conversion Rate</h3>
          <p>6.4%</p>
        </div>

        <div className="card">
          <h3>Retention Rate</h3>
          <p>71%</p>
        </div>
      </div>
    </div>
  );
}
