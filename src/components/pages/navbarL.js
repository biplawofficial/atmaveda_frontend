import React from 'react';
import Navbar8 from '../pages/navbar8'; // Adjust the import path if needed

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar8 />
      <main>{children}</main>
    </div>
  );
};

export default Layout;