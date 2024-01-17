

// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>Main Page</h1>
      <Link to="./mosq/Homepage">
        <button>Go to Page 1</button>
      </Link>
      <Link to="./air/Homepage">
        <button>Go to Page 2</button>
      </Link>
      <Link to="./flood/Homepage">
        <button>Go to Page 3</button>
      </Link>
      <Link to="./water/Homepage">
        <button>Go to Page 4</button>
      </Link>
      <Link to="./noise/Homepage">
        <button>Go to Page 5</button>
      </Link>
    </div>
  );
};

export default MainPage;
