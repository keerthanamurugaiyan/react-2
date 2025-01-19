import React from 'react';
import Navigate from './Navigate';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navigate />
      <div className=" d-flex justify-content-center mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;