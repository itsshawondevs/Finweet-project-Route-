import React from 'react'
import './navbar.css'
import navLogo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <img src={navLogo} alt="logo"/>
                </div>
                <div className="nav_menu">
                    <ul className="nav_item">
                        <li> <NavLink to='/'>Home</NavLink> </li>
                        <li> <NavLink to='/aboutus'>About us</NavLink> </li>
                        <li> <NavLink to='/feature'>Feature</NavLink> </li>
                        <li> <NavLink to='/project'>Project</NavLink> </li>
                        <li> <NavLink to='/blog'>Blog</NavLink> </li>
                    </ul>
                    <div className="nav_btn">
                        <a href="#">contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar