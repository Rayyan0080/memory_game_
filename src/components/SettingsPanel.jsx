import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsPanel = ({ settings, setSettings }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const startGame = () => navigate("/game");

  return (
    <div className="settings-panel">
      <h2>Game Configuration</h2>
      <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
        Customize your workshop experience before starting.
      </p>

      <div className="form-group">
        <label htmlFor="level">Difficulty Level</label>
        <select
          name="level"
          id="level"
          value={settings.level}
          onChange={handleChange}
        >
          <option value="Beginner">Beginner (3 Steps)</option>
          <option value="Intermediate">Intermediate (5 Steps)</option>
          <option value="Expert">Expert (8 Steps)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="theme">UI Theme</label>
        <select
          name="theme"
          id="theme"
          value={settings.theme}
          onChange={handleChange}
        >
          <option value="Dark Workshop">Dark Workshop</option>
          <option value="Light Garage">Light Garage</option>
        </select>
      </div>

      <button
        className="btn"
        onClick={startGame}
        style={{ width: "100%", marginTop: "1rem" }}
      >
        Start Challenge
      </button>
    </div>
  );
};

export default SettingsPanel;
