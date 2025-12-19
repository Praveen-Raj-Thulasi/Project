import React from "react";
import "./Ideas.css";

export default function Ideas() {
  return (
    <div className="ideas">
      <h1>Startup Ideas</h1>

      <div className="idea-card">
        <h3>AI Pitch Analyzer</h3>
        <p>Analyzes startup pitches and predicts investor interest.</p>
      </div>

      <div className="idea-card">
        <h3>Market Gap Finder</h3>
        <p>Uses trends to suggest underserved markets.</p>
      </div>
    </div>
  );
}
