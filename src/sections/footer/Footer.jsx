import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="footer_wrapper">
                <div class="footer_content">
                    <h5 class="paragraph">Copyright 2022, Finsweet.com</h5>
                </div>
                <div class="footer_navigator">
                    <ul>
                        <li> <NavLink to='/'>Home</NavLink> </li>
                        <li> <NavLink to='/aboutus'>About us</NavLink> </li>
                        <li> <NavLink to='/feature'>Feature</NavLink> </li>
                        <li> <NavLink to='/project'>Project</NavLink> </li>
                        <li> <NavLink to='/blog'>Blog</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer