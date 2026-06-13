import React from "react";
import ReactDOM from "react-dom/client";
// 1. Import HashRouter instead of BrowserRouter
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. HashRouter doesn't need a tricky basename! */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
