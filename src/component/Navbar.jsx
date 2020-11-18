import React from "react";
import "../stylesheets/Navbar.css";
import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/" onClick={() => props.randomize()}>
        random quote 
      </Link>
       <i className="material-icons">cached</i>
    </nav>
  );
};

export default Navbar;
