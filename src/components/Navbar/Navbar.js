
import React, { useEffect, useState } from "react";
import './Navbar.css';
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
              <Link to="/" className="nav-link">Blog</Link>
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


export function Navbar2(){
      return(
        <>
          {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={logo} alt="logo" className="nav-logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
        </>
      )
}
