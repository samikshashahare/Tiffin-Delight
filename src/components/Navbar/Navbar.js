
import React, { useEffect, useState } from "react";
import './Navbar.css';
import './Navbar2.css'
import toggle from './toggl.png'
import logo from './logo.png';
import profileLogo from "./profile-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [getimg, setGetimg] = useState([]);

 

  useEffect(() => {
    const profile = localStorage.getItem('image') || "";
    setGetimg(profile);  // No need to parse as JSON, it's a string
  }, []);
  


  return (
    <div>
      <header className="header">
        <div className=" nav-bar">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul type="none" className="nav-menu " >
            <li className="list-item">
              <Link to="/menucard" className="nav-link">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>

            <li className="list-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="list-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li>
              <Link to="/userprofile">
                <div className="text-center  ">
                <img src={getimg ? getimg : profileLogo} alt="profile" className="profile-logo" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}


export function Navbar2() {
  const [getimg, setGetimg] = useState([]);



  useEffect(() => {
    const profile = localStorage.getItem('image') || "";
    setGetimg(profile);  // No need to parse as JSON, it's a string
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg ms-auto ">
        <div className="container-fluid  nav-bar">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul type="none" className="nav-menu " >
              <li className="list-item">
                <Link to="/menucard" className="nav-link">Home</Link>
              </li>
              <li className="list-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>

              <li className="list-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="list-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li>
                <Link to="/userprofile">
                  <div className="text-center  ">
                    <img src={getimg ? getimg : profileLogo} alt="profile" className="profile-logo" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
  
export function Navbar3() {
  const [getimg, setGetimg] = useState('');

  useEffect(() => {
    const profile = localStorage.getItem('image') || '';
    setGetimg(profile);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg   ">
      <div className="container-fluid nav-bar " >
        <Link to="/menucard" className="navbar-brand">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={toggle} alt="toggle" className="toggle-logo" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-menu ms-auto">
            <li className="nav-item ">
              <Link to="/menucard" className="nav-link">
                 <span className="list-item">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
              <span className="list-item">Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <span className="list-item">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
              <span className="list-item"> Contact</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/userprofile" className="nav-link">
                <div className="text-center nav-item">
                  <img
                    src={getimg ? getimg : profileLogo}
                    alt="profile"
                    className="profile-logo"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
