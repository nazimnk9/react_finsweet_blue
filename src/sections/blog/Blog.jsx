import React from 'react'
import "./blog.css"
import BlogImage from './BlogImage'
const Blog = ({blog_image}) => {
  return (
    <section id="blog">
        <div className="container">
            <div className="blog__heading">
                <h2 className="blog__heading-h2">Our blog</h2>
            </div>
            <div className="blog__wrapper">
                {[0,1,2].map((item, index)=>(
                <div className="blog__item" key={index}>
                    <div className="blog__img">
                        <img src="images/blog__img.png" alt="" />
                        <BlogImage className="blog__img-img" source={blog_image} alt="not found" />
                    </div>
                    <div className="blog__date">
                        <span className="blog__date-span">19 Jan 2022</span>
                    </div>
                    <div className="blog__details">
                        <h5 className="blog__details-h5">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h5>
                        <p className="blog__details-p">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                    </div>
                    <a className="blog__item-a" href="#">Read More <i className="fa-solid fa-arrow-right-long blog__item-a-i"></i></a>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog