import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <span> Tiffin-Delight</span>
          <ul className="nav-list">
            <li className="list-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="list-item" >
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>
      </header>


    </div>
  )
}

export default Navbar 