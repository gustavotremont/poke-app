import './Nav.css'
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar"> 
      <Link className="nav-item" to={'/'}>Home</Link>
      <Link className="nav-item" to={'/new'}>Create</Link>
      {/* <Link to={'/pokemon'}>Pokemon</Link> */}
      <Link className="nav-item" to={'/search'}>Search</Link>
    </nav>
  )
};

export default Nav;
