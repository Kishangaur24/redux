import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <span className='logo'>Redux Store</span>
      <div>
        <Link className='navlink' to="/">Home</Link>
        <Link className='navlink' to="/cart">Cart</Link>
        <span  className='cartCounter'>Cart item : 0</span>
      </div>
    </div>
  )
}

export default Navbar
