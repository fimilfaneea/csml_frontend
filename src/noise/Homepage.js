// src/mosq/Homepage.js
import React from 'react';
import logo from '../assets/csml_logo.png'; // make sure the path to the logo is correct
import Toolbar from '../components/Toolbar'; // import the Toolbar component

const Homepage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Toolbar>
        {/* Add any elements you want to display in the toolbar here */}
      </Toolbar>
      <div style={{ backgroundColor: '#111213', color: 'white', padding: '10px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} alt="Logo" style={{ position: 'absolute', top: '40px', left: '20px', width: '180px' }} />
        {/* ... rest of your code ... */}
      </div>
    </div>
  );
};

export default Homepage;
