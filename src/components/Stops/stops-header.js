import React from 'react';
import './Stops.css';
import logo from '../../assets/metro-transit-vector-logo.png';

function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="Metro Transit Logo" className="ui medium image" />
        <div id="headerText">Serving the Minneapolis/St. Paul Area</div>
      </header>
    </div>
  );
};

export default Header;