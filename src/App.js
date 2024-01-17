// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Page1 from './mosq/Homepage';
import Page2 from './air/Homepage';
import Page3 from './flood/Homepage';
import Page4 from './noise/Homepage';
import Page5 from './water/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="mosq/Homepage" element={<Page1 />} />
        <Route path="air/Homepage" element={<Page2 />} />
        <Route path="flood/Homepage" element={<Page3 />} />
        <Route path="noise/Homepage" element={<Page4 />} />
        <Route path="water/Homepage" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
