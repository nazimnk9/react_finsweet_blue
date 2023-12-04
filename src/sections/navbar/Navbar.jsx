import React from 'react'
import "./navbar.css"
import Logo from './Logo'

const Navbar = ({logo_img}) => {
  return (
    <nav id="nav">
        <div className="container">
            <div className="nav__wrapper">
                <div className="nav__logo">
                    <a href="#">
                        <Logo source={logo_img} alt="not found" />
                    </a>
                </div>
                <div className="nav__menu">
                    <ul className="nav__menu-ul">
                        <li className="nav__menu-li">
                            <a className="nav__menu-a" href="#">Home</a>
                        </li>
                        <li className="nav__menu-li">
                            <a className="nav__menu-a" href="#">About us</a>
                        </li>
                        <li className="nav__menu-li">
                            <a className="nav__menu-a" href="#">Features</a>
                        </li>
                        <li className="nav__menu-li">
                            <a className="nav__menu-a" href="#">Pricing</a>
                        </li>
                        <li className="nav__menu-li">
                            <a className="nav__menu-a" href="#">FAQ</a>
                        </li>
                        <li className="nav__menu-li">
                            <a className="nav__menu-a" href="#">Blog</a>
                        </li>
                    </ul>
                    <div className="nav__btn">
                        <a className="nav__btn-a" href="#">contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar