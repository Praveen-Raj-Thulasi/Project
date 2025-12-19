import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Ideas from "./pages/Ideas";
import Performance from "./pages/Performance";
import Users from "./pages/Users";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <Navbar setPage={setPage} />
      {page === "dashboard" && <Dashboard />}
      {page === "ideas" && <Ideas />}
      {page === "performance" && <Performance />}
      {page === "users" && <Users />}
    </>
  );
}
