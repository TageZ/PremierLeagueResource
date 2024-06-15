import React from 'react';
import '../Styling/Navbar.scss'

interface NavBarProps{
  title: string;
}

const NavBar = ({title}: NavBarProps) => {
    return (
      <nav className="navBar">
        <button className="navButton" onClick={() => window.location.href = '/'}>
            <img className="home-icon" src={process.env.PUBLIC_URL + '/assets/premier-league.svg'} />
        </button>
        <div className="navTitle">{title}</div>
      </nav>
    );
  };

export default NavBar;