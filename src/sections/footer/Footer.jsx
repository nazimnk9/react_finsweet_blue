import React from 'react'
import "./footer.css"
import Logo from '../navbar/Logo'
const Footer = ({logo_img}) => {
  return (
    <footer id="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__content">
                    <div className="footer__logo">
                        {/* <FooterImage className="footer__logo-img" source={footer_image} alt="not found" /> */}
                        <Logo className="footer__logo-img" source={logo_img} alt="not found" />
                    </div>
                    <p className="footer__content-p">We are always open to discuss your project and improve your online presence.</p>
                    <div className="footer__contact">
                        <div className="footer__contact_email">
                            <h6 className="footer__contact_email-h6">Email me at</h6>
                            <a className="footer__contact_email-a" href="mailto:contact@website.com">contact@website.com</a>
                        </div>
                        <div className="footer__contact_call">
                            <h6 className="footer__contact_call-h6">Call us</h6>
                            <a className="footer__contact_call-a" href="tel:0927 6277 28525">0927 6277 28525</a>
                        </div>
                    </div>
                </div>
                <div className="footer__main">
                    <h2 className="footer__main-h2">Lets Talk!</h2>
                    <p className="footer__main-p">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div className="footer__social_icon">
                        <i className="footer__social_icon-i fa-brands fa-facebook"></i>
                        <i className="footer__social_icon-i fa-brands fa-twitter"></i>
                        <i className="footer__social_icon-i fa-brands fa-instagram"></i>
                        <i className="footer__social_icon-i fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer