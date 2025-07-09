import React, { useState } from "react";
import './Header.css'
import LOGO from '../../assets/logo.jpeg'
import { Button } from "@mui/material";
import Modal from "../Modal/Modal";
import { red } from "@mui/material/colors";
import Login from "../../screens/login/Login";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const color = red[500];

  return (
    <>
      <header>
        <nav className="navbar-main">
          <div className="navbar-body">
            {/* Logo and brand name */}
            <div className="brand-body">
              <img className="logo-class" src={LOGO} alt="brand logo"></img>
              <strong style={{ color: 'white', paddingLeft: '8px' }}>Doctor Finder</strong>
            </div>
            {/* Login Button */}
            <div>
              <Button onClick={() => { setIsLoginOpen(true) }} variant="contained">Login</Button>
              {/* <Button style={{ marginLeft: '4px' }} variant="contained">Register</Button>
              <Button style={{ background: color, color: 'white', marginLeft: '4px' }}>Logout</Button> */}
              {/* <Button variant="contained">Register</Button> */}
            </div>
          </div>
          {/* <Modal isOpen={isOpen} onRequestClose={() => {setIsOpen(false)}}/> */}
        </nav>
      </header>
      {isLoginOpen && <Login isLogin={isLoginOpen} setIsLoginOpen={() => setIsLoginOpen(false)} />}
    </>
  );
};

export default Header;
