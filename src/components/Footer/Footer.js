import React from "react";
import'./Footer.css';
import Image1 from './project img 1.png';
import Image2 from './project img 2.png';
import facebook from './facebook.png'
import twitter from './twitter.png';
import youtube from './youtube.png';
import insta from './instagram.png';

const  Footer = () =>{
    return(
       <>
       <div className="main-container-footer">
           <div className="footer-list-cont">

              <ol>
              <ul className="footer-cont-heading">Order Now</ul>
                <ul>Breakfast</ul>
                <ul>Lunch</ul>
                <ul>Dinner</ul>
              </ol>
              
              <ol>
                <ul className="footer-cont-heading">About</ul>
                <ul>About Us</ul>
                <ul>Contactiess delivery</ul>
                <ul>Nutrition</ul>
              </ol>
              
              <ol>
              <ul className="footer-cont-heading">Our Policies</ul>
                <ul>Privacy</ul>
                <ul>Term & Conditions</ul>
                <ul>Responsible disclosure</ul>
                <ul>FAQ & Help</ul>
              </ol>

              <ol>
              <ul className="footer-cont-heading">Visit TIFFIN Delight</ul>
                <ul>Locate store</ul>
                <ul>Global Blog</ul>
                
              </ol>

           </div>
             
             <div className="footer"> 

             <div className="fotter-cont-img">
              <img src={Image1} className="footer-img" />
              <img src={Image2} className="footer-img" />
            </div>
            <div className="fotter-cont-logos">
              <p className="fotter-cont-logos-title"> Follow us </p>
              <div className="fotter-cont-logo">   
               <img src={facebook} className="footer-logo" />
               <img src={twitter} className="footer-logo" />  
              <img src={insta} className="footer-logo" />
               <img src={youtube} className="footer-logo" />
               
              </div>
              
            </div>


             </div>
           
       </div>
       </>
    )
}

export default Footer