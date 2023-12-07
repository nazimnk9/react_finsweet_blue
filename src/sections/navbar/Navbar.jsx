import React from 'react'
import "./navbar.css"
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const Navbar = ({logo_img}) => {
  return (
    <nav id="nav">
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <NavLink to="/">
                        <Logo source={logo_img} alt="not found" />
                    </NavLink>
                </div>
                <div className="nav__menu">
                    <ul className="nav__menu-ul">
                        <li className="nav__menu-li">
                            <NavLink className="nav__menu-a" to="/">Home</NavLink>
                        </li>
                        <li className="nav__menu-li">
                            <NavLink className="nav__menu-a" to="client">About us</NavLink>
                        </li>
                        <li className="nav__menu-li">
                            <NavLink className="nav__menu-a" to="features">Features</NavLink>
                        </li>
                        <li className="nav__menu-li">
                            <NavLink className="nav__menu-a" to="project">Project</NavLink>
                        </li>
                        <li className="nav__menu-li">
                            <NavLink className="nav__menu-a" to="questions">FAQ</NavLink>
                        </li>
                        <li className="nav__menu-li">
                            <NavLink className="nav__menu-a" to="blog">Blog</NavLink>
                        </li>
                    </ul>
                    <div className="nav__btn">
                        <NavLink className="nav__btn-a" to="inquiry">contact us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar