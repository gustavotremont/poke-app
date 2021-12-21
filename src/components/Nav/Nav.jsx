import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav> 
      <Link to={'/'}>Home</Link>
      <Link to={'/new'}>Create</Link>
      {/* <Link to={'/pokemon'}>Pokemon</Link> */}
      <Link to={'/search'}>Search</Link>
    </nav>
  )
};

export default Nav;
