import React from "react";
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import showToast from 'crunchy-toast';


const Contact = () => {
    const [name, setname] = useState('');
    const [email, setemial] = useState('');
    const [message, setmessge] = useState('');

    const [send, setsend] = useState([]);


    const savetolocalstorage = () => {
        const obj = {
            name: name,
            email: email,
            message: message
        }
        const temarr = [...send, obj]
        setsend(temarr);
        localStorage.setItem('contact', JSON.stringify(temarr));
        showToast('message send succesfully', 'success', 3000);
        setname('');
        setemial('');
        setmessge('');

    }


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
                            <div className="d-flex  ">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: "white", }} />  </div>
                                <div className="contact-card">
                                    <h3>Address</h3>
                                    <p>shevalewadi </p>
                                </div>
                            </div>

                            <div className="d-flex ">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "white", }} /> </div>
                                <div className="contact-card">
                                    <h3>Email</h3>
                                    <p>faPhonefaPhonefaPhone </p>
                                </div>
                            </div>

                            <div className="d-flex ">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "white", }} /> </div>
                                <div className="contact-card">
                                    <h3>Email</h3>
                                    <p>faPhonefaPhonefaPhone </p>
                                </div>
                            </div>

                           

                        </div>




                        <div className="input-data">
                            <h2>send meassge</h2>
                            <form>
                                <div className="input-box">
                                    <input type="text" value={name} required onChange={(e) => {
                                        setname(e.target.value);
                                    }} /><span>full name</span>
                                </div>
                                <div className="input-box">
                                    <input type="text" value={email} required onChange={(e) => {
                                        setemial(e.target.value);
                                    }} /><span>email</span>
                                </div>
                                <div className="input-box">
                                    <textarea value={message} required onChange={(e) => {
                                        setmessge(e.target.value)
                                    }} />
                                    <span>type your Message</span>
                                </div>
                                <div className="input-box">
                                    <button className="send" type="button" onClick={savetolocalstorage}>send </button>
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