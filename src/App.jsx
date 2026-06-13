import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Results from "./pages/Results";
import About from "./pages/About";

function App() {
  const [settings, setSettings] = useState({
    level: "Beginner", // Beginner (3), Intermediate (5), Expert (8)
    vehicle: "Sports Cars",
    theme: "Dark Workshop",
    sound: true,
  });

  const [lastScore, setLastScore] = useState(0);

  return (
    <div
      className={`app-container ${settings.theme === "Light Garage" ? "theme-light" : "theme-dark"}`}
    >
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home settings={settings} setSettings={setSettings} />}
          />
          <Route
            path="/game"
            element={<Game settings={settings} setLastScore={setLastScore} />}
          />
          <Route path="/results" element={<Results score={lastScore} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
