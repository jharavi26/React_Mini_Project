import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <Outlet /> 

      // the Outlet component is used as a placeholder for rendering child routes. It allows you to nest routes and display their content within a parent route's layout or component.

      </div>
     
      
    </div>
  )
}

export default RootLayout
