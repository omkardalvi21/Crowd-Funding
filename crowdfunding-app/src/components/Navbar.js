import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Crowdfunding</h1>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#campaigns">Campaigns</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
