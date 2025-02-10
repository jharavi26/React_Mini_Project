import React from 'react';
import Navbar from '../../React_Router/src/components/Navbar';
import { Outlet } from 'react-router';


function MainLayout() {
  return (
    <div>
      <Navbar/>
      
      <Outlet/>
      
      
    </div>
  )
}

export default MainLayout
