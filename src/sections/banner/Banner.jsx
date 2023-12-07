import React from 'react'
import "./banner.css"
import BannerShape from './BannerShape'
import { Link } from 'react-router-dom'
const Banner = ({banner_shape}) => {
  return (
    <section id="banner">
        <div className="container">
            <div className="banner__wrapper">
                <div className="banner__content">
                    <h1 className="banner__content-h1">Building stellar websites for early startups</h1>
                    <p className="banner__content-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="banner_btn">
                        <Link className="banner_btn-a" to="work">View our work</Link>
                        <Link className="banner_btn-a" to="price">View Pricing <i className="fa-solid fa-arrow-right-long banner_btn-a-i"></i></Link>
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