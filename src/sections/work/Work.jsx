import React from 'react'
import "./work.css"
import WorkIcon from './WorkIcon'
const Work = ({ work_icon }) => {
    return (
        <section id="work">
            <div className="container">
                <div className="work__wrapper">
                    <div className="work__heading">
                        <h2 className="work__heading-h2">How we work</h2>
                        <p className="work__heading-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a className="work__heading-a" href="#">Get in touch with us <i className="fa-solid fa-arrow-right-long work__heading-a-i"></i></a>
                    </div>
                    <div className="work__main">
                        {[0, 1, 2, 3].map((item, index) => (
                            <div className="work__item" key={index}>
                                <div className="work__img">
                                    <WorkIcon className="work__img-img" source={work_icon} alt="not found" />
                                </div>
                                <h3 className="work__item-h3">Strategy</h3>
                                <p className="work__item-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work