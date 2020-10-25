import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_api.png'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark sticky-top navbar-custom">
      <div className="container">
        <img src={ logo } className='navbar__logo' alt='logo' /><h3 className="Navbar__title">APIREYNA EIRL</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#empresa">Empresa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;
