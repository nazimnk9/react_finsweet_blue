import React from 'react'
import "./client.css"
import ClientAvater from './ClientAvater'
const Client = ({client_avater_img}) => {
  return (
    <section id="client">
        <div className="container">
            <div className="client__wrapper">
                <div className="client__heading">
                    <h2 className="client__heading-h2">What our clients say about us</h2>
                    <p className="client__heading-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="client__main">
                    <div className="client__item">
                        <h3 className="client__item-h3">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                        <div className="client__info">
                            <div className="client__avater">
                                <ClientAvater className="client__avater-img" source={client_avater_img} alt="not found" />
                            </div>
                            <div className="client__details">
                                <h4 className="client__details-h4">Jenny Wilson</h4>
                                <h5 className="client__details-h5">Vice President</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client