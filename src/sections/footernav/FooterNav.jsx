import React from 'react'
import "./footernav.css"
const FooterNav = () => {
  return (
    <section id="footer__nav">
        <div className="container">
            <div className="footer__nav_wrapper">
                <div className="footer__copyright">
                    <h6 className="footer__copyright-h6">Copyright 2022, Finsweet.com</h6>
                </div>
                <div className="footer__nav_menu">
                    <ul className="footer__nav_menu-ul">
                        <li className="footer__nav_menu-ul-li">
                            <a className="footer__nav_menu-ul-li-a" href="#">Home</a>
                        </li>
                        <li className="footer__nav_menu-ul-li">
                            <a className="footer__nav_menu-ul-li-a" href="#">About us</a>
                        </li>
                        <li className="footer__nav_menu-ul-li">
                            <a className="footer__nav_menu-ul-li-a" href="#">Features</a>
                        </li>
                        <li className="footer__nav_menu-ul-li">
                            <a className="footer__nav_menu-ul-li-a" href="#">Pricing</a>
                        </li>
                        <li className="footer__nav_menu-ul-li">
                            <a className="footer__nav_menu-ul-li-a" href="#">FAQ</a>
                        </li>
                        <li className="footer__nav_menu-ul-li">
                            <a className="footer__nav_menu-ul-li-a" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterNav