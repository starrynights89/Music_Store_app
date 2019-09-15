import React from 'react';
// eslint-disable-next-line no-unused-vars
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component{
  render() {
    //The code to describe how our menu would look like
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
          <div className="container">
            <button type="button" className="navbar-brand order-1 btn btn-success"  
              onClick={() => { this.props.showModalWindow();}}>Sign in</button>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>                             
                <NavLink className="nav-item nav-link" to="/about">About</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}