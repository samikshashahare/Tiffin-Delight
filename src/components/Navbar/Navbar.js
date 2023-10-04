import React from "react";
import './Navbar.css';
import logo from './logo.png'
import profileLogo from "./profile-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header">

      <nav className=" nav-bar">

          <img src={logo} alt="logo"  className="nav-logo"/>

          <ul type="none" className="nav-menu " >
            <li className="list-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="list-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li>
              <Link to="/userpofile" >
                    <img src={profileLogo} alt="profile" className="profile-logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* <nav className="navbar">
          <span> Tiffin-Delight</span>
          <ul className="nav-list">
            <li className="list-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="list-item" >
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav> */}

    </div>
  )
}

export default Navbar 