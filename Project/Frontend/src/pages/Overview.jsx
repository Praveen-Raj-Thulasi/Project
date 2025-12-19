import React from "react";
import DashboardCard from "../components/DashboardCard";

export default function Overview() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Startup Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <DashboardCard title="Traffic" value="12,430" />
        <DashboardCard title="Conversion Rate" value="18%" />
        <DashboardCard title="Retention Rate" value="42%" />
        <DashboardCard title="Likes" value="3,210" />
      </div>
    </div>
  );
}
