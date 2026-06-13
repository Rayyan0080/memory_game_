import React from "react";
import SettingsPanel from "../components/SettingsPanel";

const Home = ({ settings, setSettings }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mechanic Memory Challenge</h1>
      <p style={{ marginTop: "1rem" }}>
        Test your short-term memory and visual recall in the auto shop.
      </p>
      <SettingsPanel settings={settings} setSettings={setSettings} />
    </div>
  );
};

export default Home;
