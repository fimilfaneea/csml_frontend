
import React from 'react';

const Toolbar = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#191B1F', color: '#fff', padding: '10px', height: '100vh', width: '175px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'fixed', left: '0', top: '0' }}>
      {children}
    </div>
  );
};

export default Toolbar;
