import React from "react";
import './Cards.css'
const  Cards = ({img,title,discription,lunch,dinner,breakfast,miniPrice,regPrice,jumboPrice}) =>{
    return(
        <div>
           <div className='menu-card'>
                  <img src={img} alt="" className="food-img" />
                 
                 <h3 className="food-title">{title}</h3>
                 <p className="food-discription">{discription}</p>
                 <p className="food-time"><span>{lunch}</span>/<span>{dinner}</span>/<span>{breakfast}</span></p>
                 <div className="food-flex">
                      <div className="sub">
                        <p className="food-price">Mini Meal</p>
                        <span>₹{miniPrice}</span>
                      </div>
                      <div className="sub">
                        <p className="food-price">Regular Meal</p>
                        <span>₹{regPrice}</span>
                      </div>
                      <div className="sub">
                        <p className="food-price">jumbo Meal</p>
                        <span>₹{jumboPrice}</span>
                      </div>
                 </div>
           </div>
        </div>
    )
}

export default Cards 