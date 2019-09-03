import React from 'react';
import Logo from '../images/LOGO ENGINE FINAL - BLANCO.png';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top scrolling-navbar" role="navigation">
        <div className="container">
          <a className="navbar-brand" href="#">
              <img src={Logo} className="d-inline-block align-top"/>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="basicExampleNav">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#header" data-scroll>HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" data-scroll>ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://investor.engine.web.app/" data-scroll>ACCOUNTABILITY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">UPDATES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" data-scroll>CONTACT</a>
              </li>
        
            </ul>
          </div>
        </div>
        </nav>
    )
}

export default Navbar;