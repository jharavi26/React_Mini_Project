import React from 'react'
import { Link } from 'react-router-dom';
import "./Mode.css"
import { useTheme } from './Context';

const Navbar = () => {

  const {theme, toggleTheme} = useTheme();
  
    return (
    <nav className='navbar'>

      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>

      <div className='mode-switch'>
        <label htmlFor="">
          <input type='checkbox' onChange={toggleTheme} checked={theme === "dark"}/>
        </label>
      </div>

    </nav>
    )
}

export default Navbar
