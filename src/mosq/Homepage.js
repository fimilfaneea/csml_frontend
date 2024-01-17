// src/mosq/Homepage.js
import React from 'react';
import logo from '../assets/csml_logo.png'; // make sure the path to the logo is correct

const Homepage = () => {
  return (
    <div style={{ backgroundColor: '#050505', color: 'white', padding: '10px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '40px', left: '20px', width: '100px' }} />
      {/* ... rest of your code ... */}
    </div>
  );
};

export default Homepage;
  