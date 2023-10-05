
import React from 'react';
import Navigation from '../Components/Navigation/nav';
import {Footer} from '../Components/Footer/footer'
import { Outlet } from 'react-router-dom';
import { Header } from "../Components/Header/header"


const MainLayout = () => {
  return (
    <div>
      <header>
        <Header/>
        <Navigation />
      </header>
      <main>
        {/* Include the Outlet to render child routes */}
        <Outlet />
      </main>
      <Footer/>

    </div>
  );
};

export default MainLayout;

