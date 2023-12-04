import React from 'react'
import "./questions.css"
const Questions = () => {
  return (
    <section id="questions">
        <div className="container">
            <div className="questions__wrapper">
                <div className="questions__heading">
                    <h2 className="questions__heading-h2">Frequently asked questions</h2>
                    <a className="questions__heading-a" href="#">Contact us for more info</a>
                </div>
                <div className="questions__main">
                    <div className="questions__item">
                        <div className="questions__info">
                            <div className="questions__number">
                                <span className="questions__number-span">01</span>
                            </div>
                            <div className="question__details">
                                <h3 className="question__details-h3">I have a bigger project. Can you handle it?</h3>
                                <p className="question__details-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="questions__icon">
                            <i className="fa-solid fa-xmark questions__icon-i"></i>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__info">
                            <div className="questions__number">
                                <span className="questions__number-span">02</span>
                            </div>
                            <div className="question__details">
                                <h3 className="question__details-h3">I have a bigger project. Can you handle it?</h3>
                            </div>
                        </div>
                        <div className="questions__icon">
                            <i className="fa-solid fa-plus questions__icon-i"></i>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__info">
                            <div className="questions__number">
                                <span className="questions__number-span">03</span>
                            </div>
                            <div className="question__details">
                                <h3 className="question__details-h3">I have a bigger project. Can you handle it?</h3>
                            </div>
                        </div>
                        <div className="questions__icon">
                            <i className="fa-solid fa-plus questions__icon-i"></i>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__info">
                            <div className="questions__number">
                                <span className="questions__number-span">04</span>
                            </div>
                            <div className="question__details">
                                <h3 className="question__details-h3">I have a bigger project. Can you handle it?</h3>
                            </div>
                        </div>
                        <div className="questions__icon">
                            <i className="fa-solid fa-plus questions__icon-i"></i>
                        </div>
                    </div>
                    <div className="questions__item">
                        <div className="questions__info">
                            <div className="questions__number">
                                <span className="questions__number-span">05</span>
                            </div>
                            <div className="question__details">
                                <h3 className="question__details-h3">I have a bigger project. Can you handle it?</h3>
                            </div>
                        </div>
                        <div className="questions__icon">
                            <i className="fa-solid fa-plus questions__icon-i"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Questions