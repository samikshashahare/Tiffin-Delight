
import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from './logo.png';
import profileLogo from "./profile-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [getinfo, setGetinfo] = useState([]);

  useEffect(() => {
    const profile = localStorage.getItem('details');
    const profileDetails = JSON.parse(profile);
    setGetinfo(profileDetails);
  }, []);

  const firstName = getinfo && getinfo.length > 0 ? getinfo[0].firstName : '';

  return (
    <div>
      <header className="header">
        <div className=" nav-bar">
          <img src={logo} alt="logo" className="nav-logo" />
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
              <Link to="/userpofile">
                <div className="text-center  ">
                  <img src={profileLogo} alt="profile" className="profile-logo" />
                  {/* <p className="link-deco">{firstName}</p> */}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
