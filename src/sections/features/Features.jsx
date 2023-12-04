import React from 'react'
import "./features.css"
const Features = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="features_heading">
                    <h5 className="features_heading-h5">Features</h5>
                    <h2 className="features_heading-h2">Design that solves problems, one product at a time</h2>
                </div>
                <div className="features__wrapper">
                    {[0, 1, 2, 3, 4, 5].map((item, index) => (
                        <div className="features__item" key={index}>
                            <div className="features__icon">
                                <i className="fa-solid fa-people-group features__icon-i"></i>
                            </div>
                            <h3 className="features__item-h3">Uses Client First</h3>
                            <p className="features__item-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Features