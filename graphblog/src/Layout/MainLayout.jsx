
import React from 'react';
import Navigation from '../Components/Navigation/nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        {/* Include the Outlet to render child routes */}
        <Outlet />
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default MainLayout;

