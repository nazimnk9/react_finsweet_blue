import React from 'react'
import "./project.css"
import ProjectImage from './ProjectImage'
const Project = ({small_item_img_1,small_item_img_2,small_item_img_3}) => {
  return (
    <section id="project">
        <div className="container">
            <div className="project__heading">
                <h2 className="project__heading-h2">View our projects</h2>
                <a className="project__heading-a" href="#">View More <i className="fa-solid fa-arrow-right-long project__heading-a-i"></i></a>
            </div>
            <div className="project__main">
                <div className="project__big">
                    <ProjectImage className="project__small_item-img" source={small_item_img_1} alt="not found" />
                    <div className="project__big_overlay">
                        <h4 className="project__big_overlay-h4">Workhub office Webflow Webflow Design</h4>
                        <p className="project__big_overlay-p">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a className="project__big_overlay-a" href="#">View project <i className="fa-solid fa-arrow-right-long project__big_overlay-a-i"></i></a>
                    </div>
                </div>
                <div className="project__small">
                    <div className="project__small_item">
                        <ProjectImage className="project__small_item-img" source={small_item_img_3} alt="not found" />
                        <div className="project__small_item_overlay">
                            <h4 className="project__small_item_overlay-h4">Unisaas Website 
                                Design</h4>
                            <a className="project__small_item_overlay-a" href="#">View portfolio <i className="fa-solid fa-arrow-right-long project__small_item_overlay-a-i"></i></a>
                        </div>
                    </div>
                    <div className="project__small_item">
                        <ProjectImage className="project__small_item-img" source={small_item_img_2} alt="not found" />
                        <div className="project__small_item_overlay">
                            <h4 className="project__small_item_overlay-h4">Unisaas Website 
                                Design</h4>
                            <a className="project__small_item_overlay-a" href="#">View portfolio <i className="fa-solid fa-arrow-right-long project__small_item_overlay-a-i"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project