import React from "react";
import './Contact.css';
import Navbar from "../../components/Navbar/Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import showToast from 'crunchy-toast';
import Footer from "../../components/Footer/Footer";


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


    return (<>
        <div>
            <Navbar/>
            <div className="section">
                <div className="contact-container">
                    <div className="contact-us">
                        <div className="heading-contact"><h2>Contact Us</h2></div>
                        <div className="contact-para"><p>
                        Welcome to Tiffin Delight website We are passionate about food and dedicated to bringing you the best culinary experiences right to your doorstep. Our journey began with a simple idea  to make delicious, restaurant-quality food accessible to everyone, anytime.</p></div>
                    </div>

                    <div className="second-contact-container container">
                        <div className="contact-info">
                            <div className="d-flex  ">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faLocationDot} size="2x" style={{ color: "white", }} />  </div>
                                <div className="contact-card">
                                    <h3>Address</h3>
                                    <p>unnamed road, Gopalpatti, - 412307, Maharashtra, India </p>
                                </div>
                            </div>

                            <div className="d-flex ">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: "white", }} /> </div>
                                <div className="contact-card">
                                    <h3>Email</h3>
                                    <p>tiffindelight@gmail.com </p>
                                </div>
                            </div>

                            <div className="d-flex ">
                                <div className="ico">
                                    <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "white", }} /> </div>
                                <div className="contact-card">
                                    <h3>Phone</h3>
                                    <p>9987-9987-9900 </p>
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
        <Footer/></>
    )
}

export default Contact 