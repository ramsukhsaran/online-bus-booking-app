import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid bg-white sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand ml-5" href="/">
            <img className="img-responsive" style={{height:'100px',width:'100px'}} src='./busbook.png' alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active mr-2">
                <a className="nav-link btn btn-dark text-white" href="/search">Search</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link btn btn-dark text-white" href="/spltour">Hot Deals</a>
              </li>
              {/* <li className="nav-item active ml-2">
                <a className="nav-link btn btn-dark text-white" href="/photos">Photos</a>
              </li> */}
              <li className="nav-item active ml-2">
                <a className="nav-link btn btn-dark text-white" href="/mybooking">Quick PNR</a>
              </li>
              <li className="nav-item active ml-2">
              <a href="/login" className="nav-link btn btn-dark text-white">Log In</a>
              </li>
              <li className="nav-item active ml-2">
              <a href="/register" className="nav-link btn btn-dark text-white">Register</a>
              </li>

            </ul>
            {/* <div className="flex-div">
              <a href="/login"><button className="btn btn-dark">Log In</button></a>&nbsp;
              <a href="/register"><button className="btn btn-dark">Register</button></a>
            </div> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;