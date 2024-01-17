

// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/csml_logo.png';
const MainPage = () => {
  return (
    <div style={{ backgroundColor: '#050505', color: 'white', padding: '10px', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
<img src={logo} alt="Logo" style={{ position: 'absolute', top: '40px', left: '20px',width: '100px' }} />    
    
<Link to="./mosq/Homepage">
  <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', width: '100px', height: '50px', margin: '10px', borderRadius: '15px' }}>Mosquito</button>
</Link>
<Link to="./air/Homepage">
  <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', width: '100px', height: '50px', margin: '10px', borderRadius: '15px' }}>Air</button>
</Link>
<Link to="./flood/Homepage">
  <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', width: '100px', height: '50px', margin: '10px', borderRadius: '15px' }}>Flood</button>
</Link>
<Link to="./water/Homepage">
  <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', width: '100px', height: '50px', margin: '10px', borderRadius: '15px' }}>Water</button>
</Link>
<Link to="./noise/Homepage">
  <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', width: '100px', height: '50px', margin: '10px', borderRadius: '15px' }}>Noise</button>
</Link>

  </div>
  
  );
};

export default MainPage;
