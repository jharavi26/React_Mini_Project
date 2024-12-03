import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://www.shutterstock.com/shutterstock/photos/2278726727/display_1500/stock-vector-minimalistic-circular-logo-sample-vector-2278726727.jpg" style={{ width: '100px', height: '80px' }} alt="Icon Image"/>
      <ul>
        <li>Home </li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
      
    </div>
  )
}

export default Navbar
