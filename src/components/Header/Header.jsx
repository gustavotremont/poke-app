import './Header.css'
import React from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  return ( 
    <header className='header-container'>
      <img className="logo-image" src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png" alt="pokemon logo" />
      <Nav/>
    </header>
  )
};

export default Header;
