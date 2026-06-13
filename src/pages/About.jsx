import React from "react";

const About = () => {
  return (
    <div className="settings-panel">
      <h2>About The Project</h2>
      <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
        Built for SEG 3125, the <strong>Mechanic Memory Challenge</strong>{" "}
        demonstrates core HCI principles including:
      </p>
      <ul style={{ margin: "1rem 0 1rem 2rem", lineHeight: "1.6" }}>
        <li>
          <strong>User-Centered Design:</strong> Interfaces designed for diverse
          personas (Alex & Sarah).
        </li>
        <li>
          <strong>Gestalt Principles:</strong> Proximity, Similarity, and
          Closure organize the tools interface logically.
        </li>
        <li>
          <strong>Cognitive Loads:</strong> Employs limits of short-term memory
          and Miller's Law (7±2) by varying sequence length from 3 to 8 chunks.
        </li>
        <li>
          <strong>Visual Hierarchy:</strong> Use of typography (Poppins/Roboto)
          and high contrast colors to guide the user's eye and respect the
          Primacy Effect.
        </li>
      </ul>
      <p>
        Developed with React.js, React Router, and standard CSS methodologies.
      </p>
    </div>
  );
};

export default About;
