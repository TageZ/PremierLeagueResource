import React from 'react';
import '../Styling/Navbar.css'

const NavBar = ({ title }) => {
    return (
      <nav className="navBar">
        <button className="navButton" onClick={() => window.location.href = '/'}>
            <img className="home-icon" src={process.env.PUBLIC_URL + "assets/home-icon.png"} />
        </button>
        <h1 className="navTitle">{title}</h1>
      </nav>
    );
  };

export default NavBar;