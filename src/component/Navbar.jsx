import React from "react";
import "../stylesheets/Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <a href="/" onClick={() => props.randomize()}>
        random
      </a>
       <i className="material-icons">cached</i>
    </nav>
  );
};

export default Navbar;
