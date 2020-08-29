import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light sticky-top navbar-custom">
      <div className="container">
        <img src={ logo } className='navbar__logo' alt='logo' /><h3>APIREYNA EIRL</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#header">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Empresa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;
