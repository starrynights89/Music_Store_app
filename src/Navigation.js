import React from 'react';
// eslint-disable-next-line no-unused-vars
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component{

  // Logged in menu method
  buildLoggedInMenu() {
    return (
      <div className="navbar-brand order-1 text-white my-auto">
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Welcome {this.props.user.name}
          </button>
          <div className="dropdown-menu">
            <a href="#/" className="btn dropdown-item" role="button">Sign Out</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // The code to describe how our menu would look like
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
          {/* Call buildLoggedInMenu to load the user drop-down button */}
          <div className="container">
            {
              this.props.user.loggedin ? this.buildLoggedInMenu()
                : <button type="button" className="navbar-brand order-1 btn btn-success" 
                  onClick={() => { this.props.showModalWindow();}}>Sign in</button>
            }
            <div className="navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>
                {/* Link path for /myorders */}
                {
                  this.props.user.loggedin ? <NavLink className="nav-item nav-link" to="/myorders">
                    MyOrders
                  </NavLink> : null
                }                             
                <NavLink className="nav-item nav-link" to="/about">About</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}