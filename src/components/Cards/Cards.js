import React from "react";
import './Cards.css'
const  Cards = ({id,img,minimeal,regularmeal,jumbomeal,tittle}) =>{
    return(
        <div>
           <div className='menu-card'>
                  <img src={img} alt="" className="food-img" />
                 
                <span className="food-title">{tittle}</span>
                <span className="lunch-dinner" >Lunch/Dinner</span>
                
                 <div className="food-flex">
                      <div className="sub">
                        <p className="food-price">Mini Meal</p>
                        <span>₹{minimeal}</span>
                      </div>
                      <div className="sub">
                        <p className="food-price">Regular Meal</p>
                        <span>₹{regularmeal}</span>
                      </div>
                      <div className="sub">
                        <p className="food-price">jumbo Meal</p>
                        <span>₹{jumbomeal}</span>
                      </div>
                 </div>
           </div>
        </div>
    )
}

export default Cards 