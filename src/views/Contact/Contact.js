import React from "react";
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div>
            <div className="section">
                <div className="contact-container">
                    <div className="contact-us">
                        <div className="heading-contact"><h2>Contact Us</h2></div>
                        <div className="contact-para"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum animi voluptatibus facilis, esse architecto tempore pariatur sed nihil fugit, deserunt voluptas! At mollitia minus iste consequuntur soluta sunt non!</p></div>
                    </div>

                    <div className="second-contact-container container">
                        <div className="contact-info">
                            <div className="d-flex justify-content-between">
                                <div className="ico"> <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "white", }} /> </div>
                                <div>

                                    <h3>address</h3>
                                    <p>suran nagar nagpur </p>
                                </div>
                            </div >
                            <div className="d-flex justify-content-between">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: "white", }} />  </div>
                                <div>
                                    <h3>address</h3>
                                    <p>suran nagar nagpur </p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "white", }} /> </div>
                                <div>
                                    <h3>address</h3>
                                    <p>suran nagar nagpur </p>
                                </div>
                            </div>

                        </div>




                        <div className="input-data">
                            <h2>send meassge</h2>
                            <form>
                                <div className="input-box">
                                    <input type="text" required name="" /><span>full name</span>
                                </div>
                                <div className="input-box">
                                    <input type="text" required /><span>email</span>
                                </div>
                                <div className="input-box">
                                    <textarea required />
                                    <span>type your Message</span>
                                </div>
                                <div className="input-box">
                                    <button className="send">send </button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact 