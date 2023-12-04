import React from 'react'
import "./inquiry.css"
import InquiryImage from './InquiryImage'
const Inquiry = ({inquire_image}) => {
  return (
    <section id="inquiry">
        <div className="container">
            <div className="inquiry__wrapper">
                <div className="inquiry__img">
                    <picture className="inquiry__img-picture">
                        <InquiryImage className="inquiry__img-img" source={inquire_image} alt="not found" />
                    </picture>
                    <div className="inquiry__img_ovarlay">
                        <h2 className="inquiry__img_ovarlay-h2">Building stellar websites for early startups</h2>
                        <p className="inquiry__img_ovarlay-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                <div className="inquiry__form">
                    <h4 className="inquiry__form-h4">Send inquiry</h4>
                    <p className="inquiry__form-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <form action="#" method="#" className="inquiry__form-form">
                        <input className="inquiry__form-input" type="text" placeholder="Your Name" />
                        <input className="inquiry__form-input" type="email" placeholder="Email" />
                        <input className="inquiry__form-input" type="url" placeholder="Paste your Figma design URL" />
                        <button className="inquiry__form-button">Send an Inquiry</button>
                    </form>
                    <a className="inquiry__form-a" href="#">Get in touch with us <i className="fa-solid fa-arrow-right-long inquiry__form-a-i"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inquiry