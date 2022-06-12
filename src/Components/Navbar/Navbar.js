import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div class="container">
        <nav class="navbar navbar-dark navbar-expand-md py-3 navbar-default navbar-custom">
          <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
              <img className="logo-nav" alt="" src={require('../CategoryIcon/Logo.png')}/>
              <h2> <b> SUKMA. </b></h2>
            </a>


            <div class="collapse navbar-collapse" id="navcol-1" >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Category
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="about">
                    <span class="nav-link">About</span>
                  </Link>
                </li>
              </ul>
              <a class="btn btn-primary ms-md-2" role="button" href="#">
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
