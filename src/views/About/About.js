import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import './About.css'
import aboutimg from './aboutus.jpg';
import Footer from "../../components/Footer/Footer";



const About = () => {
    const [active, seactive] = useState(1);
    const tochangethestate = (index) => {
        seactive(index)
    }
    return (<>
        <div>

            <div>
              <Navbar/>
                <div className="about-hero-section">



                    <div className="container main-section d-flex ">
                        <div className="col">
                            <img src={aboutimg} className="aboutimg"></img>
                        </div>
                        <div className="col col-div">
                            <div className="tab d-flex  ">
                                <div className={active === 1 ? "single-tab active-tab" : "single-tab"}
                                    onClick={() => {
                                        tochangethestate(1)
                                    }}>
                                    <h2>about</h2>

                                </div>
                                <div className={active === 2 ? "single-tab active-tab" : "single-tab"}
                                    onClick={() => {
                                        tochangethestate(2)
                                    }}>
                                    <h2>Mission</h2>

                                </div>
                                <div className={active === 3 ? "single-tab active-tab" : "single-tab"}
                                    onClick={() => {
                                        tochangethestate(3)
                                    }}>
                                    <h2>Vision</h2>

                                </div>
                            </div>

                            <div className="tab-content">
                                <div className={active === 1 ? "content active-content " : "content"}>
                                   
                                        <h1>Our Story</h1>
                                    <p>
                                    Welcome to Tiffin Delight website We are passionate about food and dedicated to bringing you the best culinary experiences right to your doorstep. Our journey began with a simple idea  to make delicious, restaurant-quality food accessible to everyone, anytime.
                                    </p>
                                    <p>
                                    It all started with a small team of food enthusiasts who wanted to bridge the gap between busy lives and great meals. Over the years, we've grown into a vibrant community of food lovers, connecting people with their favorite dishes from local eateries to renowned restaurants.
                                    </p>
                                    </div>
                               

                                <div className={active === 2 ? "content active-content" : "content"}>
                                    <h1>Our Mission</h1>
                                    <p>Our mission at FoodieDelight.com is to connect food enthusiasts with culinary inspiration from around the world. We are dedicated to curating a diverse collection of recipes, cooking tips, and restaurant recommendations, providing our users with the knowledge and tools to elevate their dining experiences. With a commitment to excellence and culinary exploration, we aim to empower individuals to savor the joys of cooking and dining.. </p>
                                   
                                </div>

                                <div className={active === 3 ? "content active-content" : "content"}>
                                    <h1>Our vision</h1>
                                    <p>Our vision for FoodieDelight.com is to become the go-to destination for food enthusiasts seeking culinary inspiration and expertise. We aspire to be a trusted resource and community hub for food lovers around the world. We envision a future where individuals, regardless of their cooking skills, can confidently create delicious meals and share memorable dining experiences with their loved ones. </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
        <Footer/>
    </>
    )
}

export default About 