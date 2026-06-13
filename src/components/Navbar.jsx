import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>🏎️ Mechanic Memory</h2>
      </div>
      <nav className="nav-links" aria-label="Main Navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
