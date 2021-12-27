import './Footer.css'
import logo from '../../logo.svg'
import React from "react";

const Footer = () => {
  return (
    <footer className='footer-contaier'>
      <p className="footer-text">Copyright 2021 by Gustavo Tremont. All Rights Reserved.</p>
      <p className="footer-text">Poke App is Powered by React.js</p>
      <img src={logo} className="App-logo footer-image" alt="logo"/>
    </footer>
  )
};

export default Footer;
