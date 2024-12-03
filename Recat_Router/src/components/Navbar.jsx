import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://www.shutterstock.com/shutterstock/photos/2278726727/display_1500/stock-vector-minimalistic-circular-logo-sample-vector-2278726727.jpg" style={{ width: '100px', height: '80px' }} alt="Icon Image"/>
      <ul>
        <Link to='/'><li>Home </li></Link>
        <Link to='/products'><li>Products</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
      <button>Get Started</button>
      
    </div>
  )
}

export default Navbar
