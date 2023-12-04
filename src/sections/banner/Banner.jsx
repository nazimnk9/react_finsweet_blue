import React from 'react'
import "./banner.css"
import BannerShape from './BannerShape'
const Banner = ({banner_shape}) => {
  return (
    <section id="banner">
        <div className="container">
            <div className="banner__wrapper">
                <div className="banner__content">
                    <h1 className="banner__content-h1">Building stellar websites for early startups</h1>
                    <p className="banner__content-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner_btn">
                        <a className="banner_btn-a" href="#">View our work</a>
                        <a className="banner_btn-a" href="#">View Pricing <i className="fa-solid fa-arrow-right-long banner_btn-a-i"></i></a>
                    </div>
                </div>
                <div className="banner__image">
                    <BannerShape source={banner_shape} alt="not found" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner