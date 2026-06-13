import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

// We use import.meta.env.DEV to check if you are running 'npm run dev' locally!
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/memory_game_/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
