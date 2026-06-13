import React from "react";
import { useNavigate } from "react-router-dom";

const Results = ({ score }) => {
  const navigate = useNavigate();

  return (
    <div className="settings-panel" style={{ textAlign: "center" }}>
      <h1>Diagnostic Report</h1>
      <h2
        style={{
          fontSize: "4rem",
          margin: "2rem 0",
          color: "var(--accent-color)",
        }}
      >
        {score}{" "}
        <span style={{ fontSize: "1.5rem", color: "var(--text-secondary)" }}>
          pts
        </span>
      </h2>
      <p style={{ marginBottom: "2rem" }}>
        {score > 0
          ? "Great job utilizing short-term memory chunking!"
          : "Don't worry, memory improves with practice!"}
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button className="btn" onClick={() => navigate("/game")}>
          Play Again
        </button>
        <button
          className="btn"
          style={{
            backgroundColor: "var(--surface-color)",
            color: "var(--text-primary)",
            border: "1px solid var(--text-secondary)",
          }}
          onClick={() => navigate("/")}
        >
          Configuration
        </button>
      </div>
    </div>
  );
};

export default Results;
