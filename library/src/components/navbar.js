import React from "react";
import {Link} from 'react-router-dom';
// import Component from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Library
        </a>
        <Link to="/book/update">
        <button className="btn btn-primary">Update/Delete</button>
        </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
