

// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/csml_logo.png';
const MainPage = () => {
  return (
    <div style={{ backgroundColor: '#050505', color: 'white', padding: '10px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
<img src={logo} alt="Logo" style={{ position: 'absolute', top: '40px', left: '20px',width: '100px' }} />    
    
    <Link to="./mosq/Homepage">
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '10px' }}>Go to Page 1</button>
    </Link>
    <Link to="./air/Homepage">
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '10px' }}>Go to Page 2</button>
    </Link>
    <Link to="./flood/Homepage">
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '10px' }}>Go to Page 3</button>
    </Link>
    <Link to="./water/Homepage">
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '10px' }}>Go to Page 4</button>
    </Link>
    <Link to="./noise/Homepage">
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '10px' }}>Go to Page 5</button>
    </Link>
  </div>
  
  );
};

export default MainPage;
