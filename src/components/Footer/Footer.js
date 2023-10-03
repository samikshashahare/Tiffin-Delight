import React from "react";
import'./Footer.css';
const  Footer = () =>{
    return(
       <>
       <div className="main-container-footer">
           <div className="footer-list-cont">

              <ul>
              <h3>Order Now</h3>
                <ul>Breakfast</ul>
                <ul>Lunch</ul>
                <ul>Dinner</ul>
              </ul>
              
              <ol>
              <h3>About</h3>
                <ul>About Us</ul>
                <ul>Contactiess delivery</ul>
                <ul>Nutrition</ul>
              </ol>
              
              <ol>
              <h3>Our Policies</h3>
                <ul>Privacy</ul>
                <ul>Term & Conditions</ul>
                <ul>Responsible disclosure</ul>
                <ul>FAQ & Help</ul>
              </ol>

              <ol>
              <h3>Visit TIFFIN Delight</h3>
                <ul>Locate store</ul>
                <ul>Global Blog</ul>
                
              </ol>

           </div>
       </div>
       </>
    )
}

export default Footer